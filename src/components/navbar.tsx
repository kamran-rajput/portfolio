"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight transition-all hover:drop-shadow-[0_0_12px_rgba(192,133,82,0.4)]"
        >
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-primary/30 ring-2 ring-primary/10 shadow-sm">
            <Image
              src="/icon.png"
              alt="Kamran Akmal Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="gradient-text">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-all hover:text-foreground",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-1 -bottom-[1.5px] h-0.5 rounded-full bg-primary shadow-[0_2px_8px_rgba(192,133,82,0.5)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 glass">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
              >
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-primary/30 ring-2 ring-primary/10 shadow-sm">
                  <Image
                    src="/icon.png"
                    alt="Kamran Akmal Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="gradient-text">
                  Portfolio
                </span>
              </Link>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-white/[0.05] hover:text-foreground",
                          isActive
                            ? "bg-white/[0.06] text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
