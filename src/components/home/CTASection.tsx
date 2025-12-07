"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-4rem] right-[-2rem] w-72 h-72 bg-[#D4C9A1] rounded-full blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-2rem] w-80 h-80 bg-[#476A6F] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl px-6 py-10 md:px-12 md:py-14 shadow-2xl backdrop-blur-md text-center">
            {/* Small label */}
            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold tracking-[0.2em] rounded-full bg-white/10 text-[#D4C9A1] uppercase">
              Brandenbed Living Spaces
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to Experience Stress-Free Property Management?
            </h2>

            <p className="text-base md:text-lg text-white/75 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied property owners who trust Brandenbed
              Living Spaces with their investments. Get started today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="group flex items-center space-x-2 bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>{t("hero.cta.explore")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center space-x-2 bg-transparent border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>{t("hero.cta.contact")}</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
