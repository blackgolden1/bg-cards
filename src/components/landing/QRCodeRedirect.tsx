"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons/social";

interface QRCodeRedirectProps {
  id: string;
}

export default function QRCodeRedirect({ id }: QRCodeRedirectProps) {
  const [cardUrl, setCardUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCardUrl(`${window.location.origin}/landing/${id}`);
    }
  }, [id]);

  const handleDownload = () => {
    const svg = document.getElementById("card-qr");
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const urlSvg = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(urlSvg);
      const png = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = png;
      link.download = `qr-edelco-${id}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = urlSvg;
  };

  return (
    <section className="px-4 md:px-8 max-w-xl mx-auto text-center pb-8">
      <GlassCard className="p-6 md:p-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold text-card-foreground mb-4"
        >
          Conoce a tu asesor
        </motion.h2>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block p-4 rounded-2xl bg-white shadow-inner"
        >
          {cardUrl && <QRCodeSVG id="card-qr" value={cardUrl} size={200} level="H" />}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg"
          >
            <DownloadIcon size={18} />
            Descargar QR
          </motion.button>

          <motion.a
            href={cardUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card text-card-foreground border border-border hover:border-primary transition-all"
          >
            <ExternalLinkIcon size={18} />
            Abrir tarjeta
          </motion.a>
        </div>
      </GlassCard>

      <footer className="mt-8 text-sm text-muted-foreground">
        <a
          href="https://blackgolden.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          © Black Golden 2025
        </a>
      </footer>
    </section>
  );
}
