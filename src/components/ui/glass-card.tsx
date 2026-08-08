"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverable?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = false,
  hoverable = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl glass-card overflow-hidden",
        hoverable && "gradient-border",
        glow && "glow-primary",
        className
      )}
      whileHover={hoverable ? { y: -2 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {/* Noise texture overlay */}
      <div className="noise-texture absolute inset-0 rounded-xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
