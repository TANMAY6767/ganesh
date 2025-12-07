"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/what-we-do", label: t("nav.whatWeDo") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="relative bg-[#071E40] text-white overflow-hidden pt-20 pb-10">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="absolute top-[-3rem] right-[-2rem] w-72 h-72 bg-[#D4C9A1] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-3rem] left-[-2rem] w-80 h-80 bg-[#476A6F] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#476A6F] to-[#0F3641] rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <span className="font-bold text-xl leading-tight">
                Brandenbed <br /> Living Spaces
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Smart, Simple, Stress-Free Property Ownership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-[#D4C9A1] uppercase tracking-wide">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[#D4C9A1] rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-[#D4C9A1] uppercase tracking-wide">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-[#D4C9A1]" />
                <span>contact@brandenbedlivingspaces.com</span>
              </li>

              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <Globe className="w-5 h-5 text-[#D4C9A1]" />
                <span>brandenbedlivingspace.com</span>
              </li>

              <li className="flex items-center space-x-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-[#D4C9A1]" />
                <span>Berlin, Germany</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-[#D4C9A1] uppercase tracking-wide">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2 text-white/60 text-xs leading-relaxed">
              <li>Brandenbed Living Spaces UG (Haftungsbeschränkt)</li>
              <li>Registration: HRB 274551 B</li>
              <li>Tax ID: 30/238/50491</li>
              <li>VAT ID: DE455265164</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Brandenbed Living Spaces UG. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
