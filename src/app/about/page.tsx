"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Building2, Users, Award, Target, Shield, Heart } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete openness with our clients. No hidden fees, no surprises.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in property management services.",
    },
    {
      icon: Heart,
      title: "Care",
      description: "We treat every property as if it were our own, with close attention to detail.",
    },
    {
      icon: Target,
      title: "Results",
      description: "We focus on delivering measurable outcomes and stable returns.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 right-10 w-96 h-96 bg-[#D4C9A1] blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-10 w-[26rem] h-[26rem] bg-[#476A6F] blur-[150px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("about.title")}
          </h1>
          <p className="text-xl text-white/70">
            Modern property management for the digital age
          </p>
        </motion.div>
      </section>

      {/* ---------- OUR STORY ---------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-4xl mx-auto mb-20 
              bg-white/70 backdrop-blur-xl border border-white/60 
              rounded-3xl p-10 md:p-14 shadow-2xl
            "
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-[#071E40] rounded-2xl flex items-center justify-center shadow-xl">
                <Building2 className="w-10 h-10 text-[#D4C9A1]" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#071E40] text-center mb-6">
              Our Story
            </h2>

            <p className="text-[#476A6F] text-lg leading-relaxed text-center">
              {t("about.description")}
            </p>
          </motion.div>

          {/* ---------- VALUES ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#071E40] text-center mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="
                    bg-white/70 backdrop-blur-xl border border-white/60
                    rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all
                  "
                >
                  <div className="w-14 h-14 bg-[#071E40] rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <value.icon className="w-6 h-6 text-[#D4C9A1]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#071E40] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#476A6F]">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ---------- COMPANY INFO ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-4xl mx-auto mt-20 
              bg-gradient-to-br from-[#071E40] to-[#0F3641] 
              rounded-3xl p-10 md:p-14 text-white shadow-xl backdrop-blur-xl
            "
          >
            <h2 className="text-3xl font-bold text-center mb-10">
              Company Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <p className="text-[#D4C9A1] text-sm mb-1">{t("about.registration")}</p>
                <p className="font-semibold text-lg">HRB 274551 B</p>
              </div>
              <div>
                <p className="text-[#D4C9A1] text-sm mb-1">{t("about.taxId")}</p>
                <p className="font-semibold text-lg">30/238/50491</p>
              </div>
              <div>
                <p className="text-[#D4C9A1] text-sm mb-1">{t("about.vatId")}</p>
                <p className="font-semibold text-lg">DE455265164</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 text-center">
              <p className="text-white/70 text-sm">
                Brandenbed Living Spaces UG (Haftungsbeschränkt)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- TEAM SECTION ---------- */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-[#071E40] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Users className="w-10 h-10 text-[#D4C9A1]" />
            </div>

            <h2 className="text-3xl font-bold text-[#071E40] mb-6">
              Our Team
            </h2>

            <p className="text-[#476A6F] text-lg leading-relaxed">
              Our team brings years of experience in real estate, tenant relations,  
              finance, and modern digital property management — ensuring your property  
              is handled with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="relative py-24 bg-gradient-to-br from-[#071E40] to-[#0F3641] overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-16 left-20 w-80 h-80 bg-[#D4C9A1] blur-[120px]" />
          <div className="absolute bottom-16 right-20 w-80 h-80 bg-[#476A6F] blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>

          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Let us show you how effortless property ownership can truly be.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/pricing"
              className="border-2 border-white/30 hover:border-white/70 text-white px-10 py-4 rounded-xl font-semibold transition-all"
            >
              View Plans
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
