"use client";

import { motion } from "framer-motion";
import VCardQR from "./QRCode";
import { Employee } from "@/types/Employee";
import { downloadVCard } from "@/lib/vcard";
import { shareCard } from "@/lib/share";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { DownloadIcon, ShareIcon, LinkIcon, QrCodeIcon } from "@/components/icons/social";

interface CardContainerProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  rol?: string;
  website?: string;
}

export default function CardContainer({
  firstName,
  lastName,
  phone,
  email,
  rol,
  website,
}: CardContainerProps) {
  const [copied, setCopied] = useState(false);

  const employee: Employee = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    phoneCard: phone,
    email,
    rol: rol || "",
    website: website || "",
    profilePhotoUrl: "",
    whspUrl: "",
    facebookUrl: "",
    emailUrl: `mailto:${email}`,
    instagramUrl: "",
    phone: `tel:${phone}`,
    youtubeUrl: "",
  };

  const currentId = typeof window !== "undefined" ? window.location.pathname.split("/").pop() || "" : "";

  const handleShare = async () => {
    await shareCard(employee, currentId);
  };

  const handleCopy = async () => {
    const { copied } = await shareCard(employee, currentId);
    if (copied) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <GlassCard className="mx-4 md:mx-auto max-w-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="shrink-0"
        >
          <VCardQR
            firstName={firstName}
            lastName={lastName}
            rol={rol}
            phone={phone}
            email={email}
            website={website}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 text-center md:text-left space-y-3"
        >
          <h2 className="text-2xl font-bold text-foreground">
            Escaneá para guardar
          </h2>
          <p className="text-muted-foreground text-sm">
            Apuntá la cámara al código QR para agregar este contacto directamente a tu agenda.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => downloadVCard(employee)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all"
            >
              <DownloadIcon size={18} />
              Guardar contacto
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border hover:border-primary transition-all"
            >
              <ShareIcon size={18} />
              Compartir
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border hover:border-primary transition-all"
            >
              {copied ? <QrCodeIcon size={18} /> : <LinkIcon size={18} />}
              {copied ? "Copiado" : "Copiar enlace"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </GlassCard>
  );
}
