"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
}

export default function ActionButton({
  href,
  icon,
  label,
  variant = "secondary",
  external = true,
}: ActionButtonProps) {
  const baseStyles =
    "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-200 group";
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 hover:-translate-y-1",
    secondary:
      "bg-card text-card-foreground border border-border hover:border-primary hover:text-primary hover:-translate-y-1",
    outline:
      "bg-transparent text-foreground border border-border hover:bg-muted hover:-translate-y-1",
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant])}
    >
      <span className="p-2 rounded-full bg-background/50 group-hover:bg-primary/10 transition-colors">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </motion.a>
  );
}
