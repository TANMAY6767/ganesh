"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Users,
  Wallet,
  Wrench,
  Monitor,
  Headphones,
  TrendingUp,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const benefits = [
  { icon: Users, key: "whyChooseUs.benefit1" },
  { icon: Wallet, key: "whyChooseUs.benefit2" },
  { icon: Wrench, key: "whyChooseUs.benefit3" },
  { icon: Monitor, key: "whyChooseUs.benefit4" },
  { icon: Headphones, key: "whyChooseUs.benefit5" },
  { icon: TrendingUp, key: "whyChooseUs.benefit6" },
];

const stats = [
  { value: "100+", label: "Properties Managed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function WhyChooseUsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      
      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 right-10 w-96 h-96 bg-[#D4C9A1] blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-[#476A6F] blur-[140px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("whyChooseUs.title")}
          </h1>
          <p className="text-xl text-white/70">
            {t("whyChooseUs.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* ---------------- BENEFITS GRID ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  bg-white/70 backdrop-blur-xl border border-white/60 
                  rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  hover:-translate-y-2 transition-all duration-300
                "
              >
                <div className="w-16 h-16 bg-[#071E40] rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon className="w-7 h-7 text-[#D4C9A1]" />
                </div>
                <p className="text-lg text-[#071E40] font-medium leading-relaxed">
                  {t(benefit.key)}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ---------------- STATS SECTION ---------------- */}
      <section className="relative py-20 bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40]">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4C9A1] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#476A6F] blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D4C9A1] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- TRUST SECTION (GLASS CARD) ---------------- */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-4xl mx-auto 
              bg-white/70 backdrop-blur-xl border border-white/60 
              rounded-3xl p-10 md:p-14 shadow-2xl
            "
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-2xl bg-[#071E40] flex items-center justify-center shadow-xl">
                <Shield className="w-12 h-12 text-[#D4C9A1]" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#071E40] text-center mb-6">
              Built on Trust & Transparency
            </h2>

            <p className="text-[#476A6F] text-center text-lg mb-10 leading-relaxed">
              We believe in full transparency. Your digital dashboard provides real-time updates on 
              property operations, tenant communications, maintenance, and financial activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Real-Time Updates", desc: "Stay informed 24/7" },
                { icon: Award, title: "Quality Service", desc: "Premium management" },
                { icon: TrendingUp, title: "Better Returns", desc: "Maximize your income" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#F5F2EC] rounded-xl text-center shadow-sm"
                >
                  <item.icon className="w-8 h-8 text-[#476A6F] mx-auto mb-3" />
                  <h3 className="font-semibold text-[#071E40] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#476A6F]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative py-24 bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-80 h-80 bg-[#D4C9A1] blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#476A6F] blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Stress-Free Property Ownership?
          </h2>

          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join hundreds of property owners who trust us with their investments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg"
            >
              View Plans
            </a>
            <a
              href="/contact"
              className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-xl font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
