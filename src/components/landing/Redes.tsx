"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Network {
  name: string;
  url: string;
  icon: string;
}

export default function Redes({ name, url, icon }: Network) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card text-card-foreground border border-border hover:border-primary transition-colors"
    >
      <Image
        src={icon}
        alt={name}
        width={64}
        height={64}
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
        unoptimized
      />
      <span className="text-sm font-medium text-center">{name}</span>
    </motion.a>
  );
}
