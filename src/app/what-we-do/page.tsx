"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Users,
  Wallet,
  Wrench,
  FileText,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Users,
    titleKey: "whatWeDo.tenant.title",
    descKey: "whatWeDo.tenant.description",
    details: [
      "Property marketing across multiple channels",
      "Thorough tenant screening and verification",
      "Professional viewings management",
      "Quick occupancy with reliable renters",
    ],
  },
  {
    icon: Wallet,
    titleKey: "whatWeDo.rent.title",
    descKey: "whatWeDo.rent.description",
    details: [
      "Automated rent collection system",
      "Transparent monthly payouts",
      "Real-time payment tracking",
      "Late payment follow-up",
    ],
  },
  {
    icon: Wrench,
    titleKey: "whatWeDo.maintenance.title",
    descKey: "whatWeDo.maintenance.description",
    details: [
      "Regular property inspections",
      "24/7 emergency repairs",
      "Vendor coordination",
      "Preventive maintenance planning",
    ],
  },
  {
    icon: FileText,
    titleKey: "whatWeDo.legal.title",
    descKey: "whatWeDo.legal.description",
    details: [
      "Professional rental agreements",
      "Tenant document verification",
      "Compliance management",
      "Digital record keeping",
    ],
  },
  {
    icon: Headphones,
    titleKey: "whatWeDo.support.title",
    descKey: "whatWeDo.support.description",
    details: [
      "Dedicated support team",
      "Quick issue resolution",
      "Clear communication channels",
      "Owner and tenant assistance",
    ],
  },
];

export default function WhatWeDoPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-[#D4C9A1] blur-[140px] rounded-full"></div>
          <div className="absolute -bottom-20 left-0 w-[28rem] h-[28rem] bg-[#476A6F] blur-[150px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("whatWeDo.title")}
          </h1>
          <p className="text-white/70 text-lg">{t("whatWeDo.subtitle")}</p>
        </motion.div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-24">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                flex flex-col-reverse lg:flex-row
                ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} 
                items-center gap-14
              `}
            >

              {/* ----- TEXT CONTENT ----- */}
              <div className="flex-1">
                <div className="w-20 h-20 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/70 shadow-md flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-[#071E40]" />
                </div>

                <h2 className="text-3xl font-bold text-[#071E40] mb-4">
                  {t(service.titleKey)}
                </h2>

                <p className="text-lg text-[#476A6F] mb-6">
                  {t(service.descKey)}
                </p>

                <ul className="space-y-3">
                  {service.details.map((d, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 bg-[#D4C9A1] rounded-full"></div>
                      <span className="text-[#476A6F]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ----- IMAGE / ICON BOX ----- */}
              <div className="flex-1">
                <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/70 shadow-xl p-10">
                  <div className="aspect-video bg-gradient-to-br from-[#071E40]/10 to-[#0F3641]/20 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-[#476A6F]/30" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 mt-20 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4C9A1] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#476A6F] blur-[120px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
            Let us handle your property management while you enjoy stress-free ownership.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-10 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </a>
        </motion.div>
      </section>

    </div>
  );
}
