"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/what-we-do", label: t("nav.whatWeDo") },
    { href: "/dashboard", label: t("nav.dashboard") },
    { href: "/why-choose-us", label: t("nav.whyChooseUs") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/about", label: t("nav.about") },
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-xl 
      ${isScrolled ? "bg-[#071E40]/90 shadow-xl" : "bg-[#071E40]/50 shadow-md"}
    `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-[#476A6F] to-[#0F3641] rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">B</span>
            </motion.div>
            <span className="text-white font-bold text-lg hidden sm:block">
              Brandenbed
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 
                    ${isActive ? "text-[#D4C9A1]" : "text-white/80 hover:text-white"}
                  `}
                >
                  {link.label}

                  {/* Active bottom indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#D4C9A1] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 backdrop-blur-md"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium text-sm">
                {language.toUpperCase()}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F3641]/95 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium py-2 transition-all duration-300 
                      ${isActive ? "text-[#D4C9A1]" : "text-white/80 hover:text-white"}
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
