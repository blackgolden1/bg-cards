// components/landing/Header.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  name: string;
  role: string;
  profilePhotoUrl: string;
}

export default function Header({ name, role, profilePhotoUrl }: HeaderProps) {
  return (
    <header className="relative flex flex-col items-center text-center px-4 pt-8 pb-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-ring blur-2xl opacity-30 animate-pulse" />
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-primary via-primary to-ring shadow-2xl">
          <Image
            src={profilePhotoUrl}
            alt={`Foto de ${name}`}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <span className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-background" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 space-y-2"
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          {role}
        </p>
        <p className="text-sm md:text-base text-primary font-semibold tracking-wide uppercase">
          Edelco SAS
        </p>
      </motion.div>
    </header>
  );
}
