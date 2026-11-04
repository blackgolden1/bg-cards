"use client";

import { motion } from "framer-motion";
import {
  WhatsAppIcon,
  PhoneIcon,
  MailIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/icons/social";
import ActionButton from "@/components/ui/ActionButton";
import { sharedCompanyData } from "@/lib/dummyData";
import GlassCard from "@/components/ui/GlassCard";

interface PortfolioProps {
  whspUrl: string;
  facebookUrl: string;
  emailUrl: string;
  instagramUrl: string;
  phone: string;
  youtubeUrl: string;
}

export default function Portfolio({
  whspUrl,
  facebookUrl,
  emailUrl,
  instagramUrl,
  phone,
  youtubeUrl,
}: PortfolioProps) {
  const actions = [
    { href: whspUrl, icon: <WhatsAppIcon size={28} />, label: "WhatsApp" },
    { href: phone, icon: <PhoneIcon size={28} />, label: "Llamar" },
    { href: emailUrl, icon: <MailIcon size={28} />, label: "Email" },
    { href: instagramUrl, icon: <InstagramIcon size={28} />, label: "Instagram" },
    { href: facebookUrl, icon: <FacebookIcon size={28} />, label: "Facebook" },
    { href: youtubeUrl, icon: <YoutubeIcon size={28} />, label: "YouTube" },
  ];

  return (
    <section className="px-4 md:px-8 max-w-5xl mx-auto space-y-8">
      <GlassCard className="p-6 md:p-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-2xl text-card-foreground leading-relaxed"
        >
          {sharedCompanyData.company_description1}
        </motion.p>
      </GlassCard>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="/brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
        >
          Ver portafolio de servicios
        </a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-3 md:grid-cols-6 gap-4"
      >
        {actions.map((action) => (
          <motion.div
            key={action.label}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ActionButton
              href={action.href}
              icon={action.icon}
              label={action.label}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
