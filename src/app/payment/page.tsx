"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building2,
  CreditCard,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ---------------- PLAN DATA ---------------- */

const plans = {
  basic: { name: "Basic", price: 350 },
  standard: { name: "Standard", price: 550 },
  premium: { name: "Premium", price: 750 },
};

/* ---------------- PAYMENT PAGE CONTENT ---------------- */

function PaymentContent() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>("standard");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "apartment",
    propertySize: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ---------------- On Load: Check URL Param ---------------- */

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && planParam in plans) {
      setSelectedPlan(planParam as keyof typeof plans);
    }
  }, [searchParams]);

  /* ---------------- Change Handler ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  /* ---------------- Step Validation ---------------- */

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email";
    }

    if (currentStep === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.propertySize.trim())
        newErrors.propertySize = "Property size is required";
    }

    if (currentStep === 4) {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number required";
      else if (formData.cardNumber.replace(/\s/g, "").length < 16)
        newErrors.cardNumber = "Invalid card number";

      if (!formData.expiry.trim()) newErrors.expiry = "Expiry required";

      if (!formData.cvv.trim()) newErrors.cvv = "CVV required";
      else if (formData.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------------- Step Navigation ---------------- */

  const handleNext = () => validateStep(step) && setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSubmit = () => validateStep(4) && setShowSuccess(true);

  /* ---------------- Format Card Number ---------------- */

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  /* ---------------- Step Config ---------------- */

  const steps = [
    { num: 1, label: t("payment.step1"), icon: User },
    { num: 2, label: t("payment.step2"), icon: Building2 },
    { num: 3, label: t("payment.step3"), icon: Check },
    { num: 4, label: t("payment.step4"), icon: CreditCard },
  ];

  /* --------------------------------------------------------
     ---------------------- UI START -------------------------
     -------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------------- HERO ---------------- */}
      <section className="relative py-20 bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] text-center overflow-hidden">

        {/* Soft glowing background circles */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-[-4rem] right-[-3rem] w-[18rem] h-[18rem] bg-[#D4C9A1] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-4rem] left-[-3rem] w-[20rem] h-[20rem] bg-[#476A6F] blur-[120px] rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
        >
          {t("payment.title")}
        </motion.h1>

        <p className="relative z-10 text-white/70 max-w-2xl mx-auto mt-4 text-lg">
          {t("payment.subtitle")}
        </p>
      </section>

      {/* ---------------- STEPPER ---------------- */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex items-center justify-center mb-12">
          {steps.map((s, index) => (
            <React.Fragment key={s.num}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                    step >= s.num
                      ? "bg-[#D4C9A1] text-[#071E40]"
                      : "bg-white/30 text-white/50 backdrop-blur-lg border border-white/40"
                  }`}
                >
                  <s.icon className="w-6 h-6" />
                </div>
                <span className="text-xs mt-2 font-medium text-[#071E40] hidden sm:block">
                  {s.label}
                </span>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-1 mx-3 rounded-full transition-all ${
                    step > s.num ? "bg-[#D4C9A1]" : "bg-gray-300"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ---------------- FORM + SUMMARY GRID ---------------- */}
      <div className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ---------- Form Panel (Glassmorphic) ---------- */}
        <div className="lg:col-span-2">
          <div className="bg-white/50 backdrop-blur-xl border border-white/70 shadow-xl p-10 rounded-3xl">

            <AnimatePresence mode="wait">

              {/* ---------------- STEP 1 ---------------- */}
              {step === 1 && (
                <StepWrapper key="step1">
                  <StepTitle>{t("payment.step1")}</StepTitle>

                  <Input label={t("payment.name")} name="name" value={formData.name}
                    onChange={handleChange} error={errors.name} placeholder="John Doe" />

                  <Input label={t("payment.email")} name="email" value={formData.email}
                    onChange={handleChange} error={errors.email} placeholder="john@example.com" />

                  <Input label={t("payment.phone")} name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+49 123 456 7890" />
                </StepWrapper>
              )}

              {/* ---------------- STEP 2 ---------------- */}
              {step === 2 && (
                <StepWrapper key="step2">
                  <StepTitle>{t("payment.step2")}</StepTitle>

                  <Input label={t("payment.address")} name="address" value={formData.address}
                    onChange={handleChange} error={errors.address} placeholder="Friedrichstraße 123" />

                  <div>
                    <label className="block text-sm font-medium text-[#071E40] mb-2">
                      {t("payment.propertyType")}
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20"
                    >
                      <option value="apartment">{t("payment.propertyType.apartment")}</option>
                      <option value="house">{t("payment.propertyType.house")}</option>
                      <option value="commercial">{t("payment.propertyType.commercial")}</option>
                    </select>
                  </div>

                  <Input label={t("payment.propertySize")} name="propertySize" value={formData.propertySize}
                    onChange={handleChange} error={errors.propertySize} placeholder="75" />
                </StepWrapper>
              )}

              {/* ---------------- STEP 3 (SELECT PLAN) ---------------- */}
              {step === 3 && (
                <StepWrapper key="step3">
                  <StepTitle>{t("payment.selectPlan")}</StepTitle>

                  {Object.entries(plans).map(([key, plan]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedPlan(key as keyof typeof plans)}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer backdrop-blur-md ${
                        selectedPlan === key
                          ? "border-[#071E40] bg-[#071E40]/10"
                          : "border-gray-300 hover:border-[#476A6F]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-[#071E40] text-lg">{plan.name}</h3>
                          <p className="text-[#476A6F] text-sm">€{plan.price}/month</p>
                        </div>

                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedPlan === key
                              ? "bg-[#071E40] border-[#071E40]"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedPlan === key && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </StepWrapper>
              )}

              {/* ---------------- STEP 4 (CARD DETAILS) ---------------- */}
              {step === 4 && (
                <StepWrapper key="step4">
                  <StepTitle>{t("payment.step4")}</StepTitle>

                  <Input
                    label={t("payment.cardNumber")}
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        cardNumber: formatCardNumber(e.target.value),
                      })
                    }
                    error={errors.cardNumber}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label={t("payment.expiry")}
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      error={errors.expiry}
                    />

                    <Input
                      label={t("payment.cvv")}
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={4}
                      error={errors.cvv}
                    />
                  </div>
                </StepWrapper>
              )}

            </AnimatePresence>

            {/* ---------------- BOTTOM BUTTONS ---------------- */}
            <div className="flex justify-between mt-10 pt-8 border-t border-white/40">

              {/* Back Button */}
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-[#476A6F] hover:text-[#071E40] transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>{t("payment.back")}</span>
                </button>
              ) : (
                <div />
              )}

              {/* Next / Submit Button */}
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-[#071E40] hover:bg-[#0F3641] text-white px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  <span>{t("payment.next")}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center space-x-2 bg-[#D4C9A1] hover:bg-[#c4b991] text-[#071E40] px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>{t("payment.payNow")}</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ---------- SUMMARY PANEL (Glassmorphic) ---------- */}
        <div className="lg:col-span-1">
          <div className="bg-white/50 backdrop-blur-xl border border-white/70 shadow-xl p-8 rounded-3xl sticky top-24">

            <h3 className="text-lg font-semibold text-[#071E40] mb-6">
              {t("payment.summary")}
            </h3>

            <div className="space-y-4">

              <SummaryRow label="Plan" value={plans[selectedPlan].name} />
              <SummaryRow label="Monthly Fee" value={`€${plans[selectedPlan].price}`} />

              <div className="border-t border-white/50 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#071E40]">{t("payment.total")}</span>
                  <span className="font-bold text-xl text-[#071E40]">
                    €{plans[selectedPlan].price}
                  </span>
                </div>
                <p className="text-xs text-[#476A6F] mt-1">per month</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ---------- SUCCESS POPUP ---------- */}
      <SuccessModal show={showSuccess} t={t} onClose={() => {
        setShowSuccess(false);
        window.location.href = "/";
      }} />

    </div>
  );
}

/* --------------------------------------------------------
   ---------------------- COMPONENTS ----------------------
   -------------------------------------------------------- */

function StepWrapper({ children }: any) {
  return (
    <motion.div
      key={Math.random()}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -25 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}

function StepTitle({ children }: any) {
  return <h2 className="text-xl font-semibold text-[#071E40] mb-4">{children}</h2>;
}

function Input({ label, name, value, onChange, placeholder, error, maxLength }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#071E40] mb-2">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full px-4 py-3 rounded-xl border transition-all bg-white/80 backdrop-blur-md ${
          error ? "border-red-500" : "border-gray-300"
        } focus:border-[#476A6F] focus:ring-2 focus:ring-[#476A6F]/20`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

function SummaryRow({ label, value }: any) {
  return (
    <div className="flex justify-between text-[#476A6F]">
      <span>{label}</span>
      <span className="font-medium text-[#071E40]">{value}</span>
    </div>
  );
}

/* ---------- SUCCESS MODAL ---------- */

function SuccessModal({ show, onClose, t }: any) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl p-10 max-w-md w-full text-center relative shadow-2xl overflow-hidden"
          >
            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 1,
                    y: -20,
                    x: Math.random() * 300 - 150,
                    rotate: 0,
                  }}
                  animate={{
                    opacity: 0,
                    y: 320,
                    rotate: Math.random() * 360,
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 0.5,
                  }}
                  className="absolute top-0 left-1/2"
                  style={{
                    width: 10,
                    height: 10,
                    backgroundColor: ["#D4C9A1", "#071E40", "#476A6F"][Math.floor(Math.random()*3)],
                    borderRadius: Math.random() > 0.5 ? "50%" : "0",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-2xl font-bold text-[#071E40] mb-4">
                {t("payment.success.title")}
              </h2>

              <p className="text-[#476A6F] mb-8">{t("payment.success.message")}</p>

              <button
                onClick={onClose}
                className="bg-[#071E40] hover:bg-[#0F3641] text-white px-10 py-3 rounded-xl font-semibold transition-all"
              >
                {t("payment.success.close")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- EXPORT ---------------- */

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
