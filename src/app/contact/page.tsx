"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Globe, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });
    }, 2500);
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-20 right-10 w-96 h-96 bg-[#D4C9A1] blur-[150px]" />
          <div className="absolute bottom-0 left-10 w-[28rem] h-[28rem] bg-[#476A6F] blur-[150px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-white/70">
            {t("contact.subtitle")}
          </p>
        </motion.div>
      </section>

      {/* ---------- CONTACT CONTENT ---------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

            {/* ---------- FORM (GLASS CARD) ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                bg-white/70 backdrop-blur-xl border border-white/60 
                rounded-3xl p-10 shadow-xl
              "
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#071E40]">
                    Message Sent!
                  </h3>
                  <p className="text-[#476A6F] mt-2 text-center">{t("contact.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-200 
                        focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 
                        bg-white outline-none transition-all
                      "
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-200 
                        focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 
                        bg-white outline-none transition-all
                      "
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-200 
                        focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 
                        bg-white outline-none transition-all
                      "
                      placeholder="+49 123 456 7890"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.inquiryType")}
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-200 
                        focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 
                        bg-white outline-none transition-all
                      "
                    >
                      <option value="general">{t("contact.inquiry.general")}</option>
                      <option value="pricing">{t("contact.inquiry.pricing")}</option>
                      <option value="support">{t("contact.inquiry.support")}</option>
                      <option value="partnership">{t("contact.inquiry.partnership")}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("contact.message")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="
                        w-full px-4 py-3 rounded-xl border border-gray-200 
                        focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20 
                        bg-white outline-none resize-none transition-all
                      "
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full flex items-center justify-center space-x-2 
                      bg-[#071E40] hover:bg-[#0F3641] text-white 
                      py-4 rounded-xl font-semibold transition-all 
                      hover:scale-[1.02]
                    "
                  >
                    <Send className="w-5 h-5" />
                    <span>{t("contact.submit")}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* ---------- INFO COLUMN (GLASS CARDS) ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#071E40] mb-4">Get in Touch</h2>
                <p className="text-[#476A6F] text-lg leading-relaxed">
                  Have questions about our property management services?
                  Our team is here to help you every step of the way.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "contact@brandenbedlivingspaces.com",
                  },
                  {
                    icon: Globe,
                    title: "Website",
                    value: "brandenbedlivingspace.com / .de",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Berlin, Germany",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#071E40] rounded-xl flex items-center justify-center shadow-md">
                      <item.icon className="w-6 h-6 text-[#D4C9A1]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#071E40] text-lg">{item.title}</h3>
                      <p className="text-[#476A6F]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours (Glass Card) */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl">
                <h3 className="font-semibold text-[#071E40] mb-4 text-lg">
                  Business Hours
                </h3>
                <div className="space-y-2 text-[#476A6F]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-sm text-[#476A6F] mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
