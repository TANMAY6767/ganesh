"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    nameKey: "pricing.basic",
    price: "350",
    description: "Perfect for low-cost landlords",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenanceBasic", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.monthlyReport", included: true },
      { key: "pricing.feature.dashboardAccess", included: false },
      { key: "pricing.feature.cleaning1", included: false },
      { key: "pricing.feature.tenantChat", included: false },
      { key: "pricing.feature.inspection1", included: false },
      { key: "pricing.feature.checkInOut", included: false },
    ],
    popular: false,
  },
  {
    nameKey: "pricing.standard",
    price: "550",
    description: "Best for regular rental owners",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenanceFull", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.dashboardReport", included: true },
      { key: "pricing.feature.dashboardAccess", included: true },
      { key: "pricing.feature.cleaning1", included: true },
      { key: "pricing.feature.tenantChat", included: true },
      { key: "pricing.feature.inspection1", included: true },
      { key: "pricing.feature.checkInOut", included: true },
    ],
    popular: true,
  },
  {
    nameKey: "pricing.premium",
    price: "750",
    description: "For premium, zero-involvement owners",
    features: [
      { key: "pricing.feature.tenantSearch", included: true },
      { key: "pricing.feature.rentCollection", included: true },
      { key: "pricing.feature.maintenancePriority", included: true },
      { key: "pricing.feature.digitalContracts", included: true },
      { key: "pricing.feature.detailedAnalytics", included: true },
      { key: "pricing.feature.unlimitedDashboard", included: true },
      { key: "pricing.feature.cleaning3", included: true },
      { key: "pricing.feature.priorityChat", included: true },
      { key: "pricing.feature.inspection2", included: true },
      { key: "pricing.feature.checkInOut", included: true },
      { key: "pricing.feature.linenService", included: true },
    ],
    popular: false,
  },
];

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 overflow-hidden">
        {/* Glowing Background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-[#D4C9A1] blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-20 left-0 w-[28rem] h-[28rem] bg-[#476A6F] blur-[140px] rounded-full"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {t("pricing.title")}
          </h1>
          <p className="text-xl text-white/70">{t("pricing.subtitle")}</p>
        </motion.div>
      </section>

      {/* ---------------- PRICING CARDS ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative rounded-3xl p-8 shadow-xl backdrop-blur-xl border 
                  transition-all duration-300 hover:scale-[1.03]
                  ${plan.popular
                    ? "bg-gradient-to-br from-[#071E40] to-[#0F3641] border-white/20 text-white scale-105"
                    : "bg-white/60 border-white/70 text-[#071E40]"
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 bg-[#D4C9A1] text-[#071E40] py-2 text-center font-semibold rounded-t-3xl">
                    {t("pricing.popular")}
                  </div>
                )}

                <div className={`${plan.popular ? "pt-16" : ""} text-center mb-8`}>
                  <h3 className="text-2xl font-bold mb-2">{t(plan.nameKey)}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-[#476A6F]"}`}>
                    {plan.description}
                  </p>

                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">€{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? "text-white/70" : "text-[#476A6F]"}`}>
                      {t("pricing.perMonth")}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 ${plan.popular ? "text-[#D4C9A1]" : "text-green-500"}`} />
                      ) : (
                        <X className={`w-5 h-5 ${plan.popular ? "text-white/30" : "text-gray-300"}`} />
                      )}

                      <span
                        className={`
                          ${feature.included
                            ? plan.popular
                              ? "text-white/90"
                              : "text-[#476A6F]"
                            : plan.popular
                            ? "text-white/30"
                            : "text-gray-400"
                          }
                        `}
                      >
                        {t(feature.key)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/payment?plan=${plan.nameKey.split(".")[1]}`}
                  className={`
                    flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-semibold transition-all duration-300
                    ${plan.popular
                      ? "bg-[#D4C9A1] text-[#071E40] hover:bg-[#c4b991]"
                      : "bg-[#071E40] text-white hover:bg-[#0F3641]"
                    }
                  `}
                >
                  <span>{t("pricing.selectPlan")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#071E40] mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: "Can I upgrade my plan later?",
                  a: "Yes, you can upgrade anytime. The price difference will be prorated.",
                },
                {
                  q: "Is there a minimum contract period?",
                  a: "Standard contracts are 12 months, but flexible options are available.",
                },
                {
                  q: "What happens if my property is vacant?",
                  a: "We handle tenant search and minimize vacancies proactively.",
                },
                {
                  q: "Are there any hidden fees?",
                  a: "No. All services included are transparent with no hidden charges.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white/70 shadow-md text-left">
                  <h3 className="font-semibold text-[#071E40] mb-2">{faq.q}</h3>
                  <p className="text-[#476A6F]">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
