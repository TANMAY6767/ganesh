"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Users, Wallet, Wrench, FileText, Headphones } from "lucide-react";

const features = [
  { icon: Users, titleKey: "whatWeDo.tenant.title", descKey: "whatWeDo.tenant.description" },
  { icon: Wallet, titleKey: "whatWeDo.rent.title", descKey: "whatWeDo.rent.description" },
  { icon: Wrench, titleKey: "whatWeDo.maintenance.title", descKey: "whatWeDo.maintenance.description" },
  { icon: FileText, titleKey: "whatWeDo.legal.title", descKey: "whatWeDo.legal.description" },
  { icon: Headphones, titleKey: "whatWeDo.support.title", descKey: "whatWeDo.support.description" },
];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#071E40] mb-4">
            {t("home.solutions.title")}
          </h2>
          <p className="text-[#476A6F] max-w-3xl mx-auto text-lg">
            {t("home.solutions.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#F5F2EC] rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#071E40] to-[#0F3641] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-[#D4C9A1]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#071E40] mb-3">
                {t(feature.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-[#476A6F] leading-relaxed text-sm md:text-base">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
