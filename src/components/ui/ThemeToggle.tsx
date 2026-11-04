"use client";

import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@/components/icons/social";
import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg text-foreground"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </motion.button>
  );
}
