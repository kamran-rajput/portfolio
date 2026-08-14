"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, AlertCircle, ShieldCheck, Lock } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Le4DIQtAAAAAOcdGdwe2HPjGV3Nf2dFiaL0ZEwW";

  const executeV3Recaptcha = async (): Promise<string | null> => {
    if (typeof window === "undefined" || !window.grecaptcha) return null;
    return new Promise((resolve) => {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action: "contact_form" })
            .then((token: string) => resolve(token))
            .catch((err: unknown) => {
              console.warn("reCAPTCHA v3 execute error:", err);
              resolve(null);
            });
        });
      } catch {
        resolve(null);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    let token = recaptchaToken;
    if (!token) {
      token = await executeV3Recaptcha();
    }

    if (!token) {
      setErrorMessage("reCAPTCHA security check required. Please verify the reCAPTCHA or try again.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      botcheck: formData.get("botcheck"),
      recaptchaToken: token,
    };



    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="lazyOnload"
      />
      <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 relative" id="contact-form">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-4 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                Encrypted Communication
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-foreground">
              Send a <span className="gradient-text glow-text">Direct Message</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">Have an opportunity or a technical question? Reach out securely below.</p>
          </div>

          <div className="glass-card border-primary/30 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(192,133,82,0.12)] hover:border-primary/50 transition-all duration-300 relative overflow-hidden min-h-[520px] flex flex-col justify-center">
            {/* Subtle background glow circle inside form card */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full min-h-[440px] flex flex-col items-center justify-center p-8 text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </motion.div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    Message Received
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been sent directly to my inbox. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 w-full relative z-10"
                >
                  {/* Honeypot field to block automated spambots */}
                  <input 
                    type="text" 
                    name="botcheck" 
                    tabIndex={-1} 
                    autoComplete="off" 
                    className="hidden" 
                    aria-hidden="true" 
                  />

                  {errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/25 rounded-xl text-destructive text-sm font-medium"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="john@example.com" 
                        className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold">Company / Organization <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Acme Security Inc." 
                      className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      required 
                      placeholder="Opportunity / Collaboration" 
                      className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      placeholder="How can we collaborate?" 
                      rows={5} 
                      className="bg-secondary/30 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl resize-y" 
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.985 }}
                    className="pt-2"
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full h-13 text-base font-semibold rounded-xl bg-gradient-to-r from-primary via-amber-600 to-primary bg-[length:200%_auto] text-primary-foreground shadow-[0_0_20px_rgba(192,133,82,0.25)] hover:shadow-[0_0_30px_rgba(192,133,82,0.45)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                          <span>Verifying & Sending Message...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Lock className="w-4 h-4 text-primary-foreground/80" />
                          Send Secure Message
                          <Send className="w-4 h-4 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 ease-out" />
                        </span>
                      )}
                      
                      {/* Shimmer light sweep on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    </Button>
                  </motion.div>

                  <div className="text-center pt-1">
                    <p className="text-xs text-muted-foreground/70 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary/70" />
                      Protected by Google reCAPTCHA v3 & 256-bit TLS Encryption
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}



