"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Terminal, Cpu } from "lucide-react";
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
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/6 rounded-full blur-[100px] -z-10 pointer-events-none" />

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_8px_var(--color-accent)]"></span>
            </span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              System Online
            </span>
          </div>
          
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Muhammad <br />
            <span className="gradient-text">Kamran Akmal</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-medium text-muted-foreground">
            Cybersecurity Engineer
          </h2>
          
          <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Building secure systems through application security, security operations, cloud security, and AI-powered security automation.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all hover:glow-primary relative overflow-hidden shimmer-overlay">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge">
              Download Resume
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            {[
              { icon: Shield, label: "Application Security" },
              { icon: Terminal, label: "Security Operations" },
              { icon: Lock, label: "Cloud Security" },
              { icon: Cpu, label: "AI Automation" },
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
          <div className="absolute inset-0 rounded-full glass flex items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.12)]">
            {/* Core */}
            <div className="relative w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_var(--color-primary)] -top-2 left-1/2 -translate-x-1/2"></div>
              <div className="w-24 h-24 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_reverse_infinite]"></div>
            </div>
            
            {/* Orbit 1 */}
            <div className="absolute w-64 h-64 rounded-full border border-white/[0.06] animate-[spin_30s_linear_reverse_infinite]">
              <div className="absolute w-3 h-3 bg-primary/40 rounded-full top-1/4 -right-1.5 shadow-[0_0_8px_rgba(37,99,235,0.3)]"></div>
            </div>
            
            {/* Orbit 2 */}
            <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-white/[0.04] animate-[spin_40s_linear_infinite]">
              <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.3)] bottom-1/4 -left-1"></div>
              <div className="absolute w-2 h-2 bg-red-400/30 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.3)] top-10 right-10"></div>
            </div>
            
            {/* Center Icon */}
            <Shield className="absolute w-12 h-12 text-primary drop-shadow-[0_0_12px_rgba(37,99,235,0.5)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
