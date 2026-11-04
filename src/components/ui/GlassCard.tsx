import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
