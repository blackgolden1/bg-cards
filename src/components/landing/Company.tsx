"use client";

import { motion } from "framer-motion";
import { MapPinIcon } from "@/components/icons/social";
import GlassCard from "@/components/ui/GlassCard";

interface Address {
  city: string;
  description: string;
}

interface CompanyProps {
  company_description2: string;
  address: Address[];
}

export default function Company({ company_description2, address }: CompanyProps) {
  return (
    <section className="px-4 md:px-8 max-w-5xl mx-auto space-y-8 pb-12">
      <GlassCard className="p-6 md:p-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center mb-6 text-card-foreground"
        >
          Política Empresarial
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-justify md:text-left text-base md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line"
        >
          {company_description2}
        </motion.p>
      </GlassCard>

      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center text-foreground"
        >
          Información de Contacto
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-3 gap-4"
        >
          {address.map((loc) => (
            <motion.div
              key={loc.city}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard className="p-5 text-center h-full">
                <div className="mx-auto mb-3 text-primary">
                  <MapPinIcon size={28} />
                </div>
                <p className="text-lg font-bold text-card-foreground">{loc.city}</p>
                <p className="text-sm text-muted-foreground mt-1">{loc.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
