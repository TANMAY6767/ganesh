"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPreview() {
  const { t } = useLanguage();

  const plans = [
    {
      name: "Basic Plan",
      price: "€99/mo",
      features: [
        "Property Listing Management",
        "Tenant Communication",
        "Basic Maintenance Handling",
        "Monthly Report"
      ],
      highlight: false,
    },
    {
      name: "Premium Plan",
      price: "€149/mo",
      features: [
        "Everything in Basic",
        "Legal & Documentation Support",
        "Dedicated Property Manager",
        "Priority Maintenance Support",
        "Advanced Reporting"
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Multiple Properties",
        "Dedicated Account Manager",
        "Full Legal Support",
        "Custom Reporting",
        "24/7 Priority Support"
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-[#F5F2EC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#071E40] mb-4">
            Affordable & Transparent Pricing
          </h2>
          <p className="text-[#476A6F] max-w-2xl mx-auto text-lg">
            Choose the plan that fits your needs. No hidden fees — ever.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 bg-white
              ${plan.highlight ? "border-2 border-[#071E40] scale-105" : "border border-gray-200"}
            `}
            >
              <h3 className="text-xl font-bold text-[#071E40] mb-2">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-[#071E40] mb-6">{plan.price}</div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#476A6F]">
                    <Check className="w-5 h-5 text-[#071E40]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/pricing"
                className="group block text-center bg-[#071E40] text-white py-3 rounded-xl font-semibold hover:bg-[#0f2e5a] transition-all duration-300"
              >
                Explore Full Pricing
                <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
