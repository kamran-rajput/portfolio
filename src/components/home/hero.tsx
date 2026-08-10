"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Globe } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "@/components/ui/floating-particles";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-[-24px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{ animation: "grid-drift 20s linear infinite" }}
        />
      </div>

      {/* Floating particles */}
      <FloatingParticles count={18} />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/12 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              System Online
            </span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Muhammad <br />
            <span className="gradient-text">Kamran Akmal</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-primary">
            Cybersecurity Analyst
          </h2>
          
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            I build and analyze secure systems through <strong className="text-foreground font-semibold">security operations, application security, network security, and cloud security</strong> — backed by hands-on labs, security research, and continuous practical learning.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all hover:glow-primary relative overflow-hidden shimmer-overlay">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge">
              <a href="https://github.com/muhammad-kamran-akmal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <SiGithub className="w-4 h-4 text-primary" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {[
              { icon: Shield, label: "Security Operations" },
              { icon: Lock, label: "Application Security" },
              { icon: Terminal, label: "Cloud Security" },
              { icon: Globe, label: "Network Security" },
            ].map((item, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium glass-badge text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="w-3 h-3 mr-2 text-primary" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Abstract Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative aspect-square max-w-md mx-auto w-full lg:ml-auto"
        >
          <div className="absolute inset-0 rounded-full glass flex items-center justify-center shadow-[0_0_80px_rgba(192,133,82,0.15)]">
            {/* Core */}
            <div className="relative w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="w-24 h-24 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_reverse_infinite]"></div>
            </div>
            
            {/* Orbit 1 */}
            <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-[spin_30s_linear_reverse_infinite]">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full top-1/4 -right-1.5 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            </div>
            
            {/* Orbit 2 */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-primary/15 animate-[spin_40s_linear_infinite]">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] bottom-1/4 -left-1.5"></div>
              <div className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] top-10 right-10"></div>
            </div>
            
            {/* Center Icon */}
            <Shield className="absolute w-12 h-12 text-blue-600 drop-shadow-[0_0_14px_rgba(37,99,235,0.6)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
