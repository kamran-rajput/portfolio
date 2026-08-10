"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      botcheck: formData.get("botcheck"),
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
    }
  };

  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30" id="contact-form">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">Send a Message</h2>
          <p className="text-lg text-muted-foreground">Have an opportunity or a technical question? Reach out securely below.</p>
        </div>

        <div className="bg-background border border-border/40 rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden min-h-[520px] flex flex-col justify-center">
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
                  className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
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
                className="space-y-6 w-full"
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
                    className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-medium"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" className="bg-secondary/20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-secondary/20" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                  <Input id="company" name="company" placeholder="Acme Security Inc." className="bg-secondary/20" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required placeholder="Opportunity / Collaboration" className="bg-secondary/20" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required placeholder="How can we collaborate?" rows={5} className="bg-secondary/20 resize-y" />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  className="pt-2"
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full h-13 text-base font-semibold rounded-xl bg-gradient-to-r from-primary via-amber-600 to-primary bg-[length:200%_auto] text-primary-foreground shadow-[0_0_20px_rgba(192,133,82,0.2)] hover:shadow-[0_0_30px_rgba(192,133,82,0.4)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                        <span>Sending Secure Message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Secure Message
                        <Send className="w-4 h-4 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 ease-out" />
                      </span>
                    )}
                    
                    {/* Shimmer light sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
