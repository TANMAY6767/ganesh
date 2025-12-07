"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.whatWeDo": "What We Do",
    "nav.dashboard": "Owner Dashboard",
    "nav.whyChooseUs": "Why Choose Us",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.about": "About",
    "nav.payment": "Payment",

    // Hero Section
    "hero.heading": "Smart, Simple, Stress-Free Property Ownership",
    "hero.subheading": "A fully managed property management service that delivers stability, transparency, and peace of mind.",
    "hero.cta.explore": "Explore Plans",
    "hero.cta.contact": "Contact Us",

    // Home Page
    "home.solutions.title": "Smart Solutions for Modern Property Owners",
    "home.solutions.description": "Experience automated rent collection, professional tenant management, and complete transparency through our digital dashboard.",
    "home.features.title": "Our Services",

    // What We Do
    "whatWeDo.title": "What We Do",
    "whatWeDo.subtitle": "Comprehensive property management solutions",
    "whatWeDo.tenant.title": "End-to-End Tenant Management",
    "whatWeDo.tenant.description": "We market your property, screen tenants, handle viewings, and ensure quick occupancy with reliable renters.",
    "whatWeDo.rent.title": "Guaranteed & Consistent Rent",
    "whatWeDo.rent.description": "Our system ensures timely rent collection with transparent payouts every month.",
    "whatWeDo.maintenance.title": "Maintenance & Property Upkeep",
    "whatWeDo.maintenance.description": "We manage repairs, inspections, complaints, and vendor coordination to keep your property in top condition.",
    "whatWeDo.legal.title": "Legal & Documentation Management",
    "whatWeDo.legal.description": "We create rental agreements, verify tenant documents, and handle compliance.",
    "whatWeDo.support.title": "24/7 Support",
    "whatWeDo.support.description": "Both owners and tenants receive fast, reliable support for any issue.",

    // Owner Dashboard
    "dashboard.title": "Owner Dashboard",
    "dashboard.subtitle": "Full Transparency. Full Control. From Anywhere.",
    "dashboard.properties.title": "View All Properties in One Place",
    "dashboard.properties.description": "Track all units, tenants, and performance in real time.",
    "dashboard.tickets.title": "Maintenance Ticket Tracking",
    "dashboard.tickets.description": "View all service tickets with status (pending, in progress, resolved).",
    "dashboard.documents.title": "Documents & Reports",
    "dashboard.documents.description": "Access contracts, inspection reports, invoices, and photos easily.",
    "dashboard.financial.title": "Financial Insights",
    "dashboard.financial.description": "Monitor rent collected, payouts, expenses, and projections.",

    // Why Choose Us
    "whyChooseUs.title": "Why Choose Us",
    "whyChooseUs.subtitle": "We remove the hassle from property ownership",
    "whyChooseUs.benefit1": "Stable occupancy through strategic tenant onboarding",
    "whyChooseUs.benefit2": "Automated rent collection every month",
    "whyChooseUs.benefit3": "Professional maintenance and vendor coordination",
    "whyChooseUs.benefit4": "Total transparency through a digital dashboard",
    "whyChooseUs.benefit5": "24/7 support for owners and tenants",
    "whyChooseUs.benefit6": "Higher long-term returns with zero operational stress",

    // Pricing
    "pricing.title": "Pricing Plans",
    "pricing.subtitle": "Choose the plan that fits your needs",
    "pricing.basic": "Basic",
    "pricing.standard": "Standard",
    "pricing.premium": "Premium",
    "pricing.popular": "Most Popular",
    "pricing.perMonth": "/month",
    "pricing.selectPlan": "Select Plan",
    "pricing.feature.tenantSearch": "Tenant Search",
    "pricing.feature.rentCollection": "Rent Collection",
    "pricing.feature.maintenanceBasic": "Basic Maintenance Coordination",
    "pricing.feature.maintenanceFull": "Full Maintenance Scheduling",
    "pricing.feature.maintenancePriority": "Priority Maintenance Handling",
    "pricing.feature.digitalContracts": "Digital Contracts",
    "pricing.feature.monthlyReport": "Monthly Report (Email)",
    "pricing.feature.dashboardReport": "Dashboard + Report",
    "pricing.feature.detailedAnalytics": "Detailed + Analytics",
    "pricing.feature.dashboardAccess": "Dashboard Access",
    "pricing.feature.unlimitedDashboard": "Unlimited Dashboard + Analytics",
    "pricing.feature.cleaning1": "1 Cleaning/month",
    "pricing.feature.cleaning3": "3 Cleanings/month",
    "pricing.feature.tenantChat": "Tenant Support Chat",
    "pricing.feature.priorityChat": "Priority Tenant Support",
    "pricing.feature.inspection1": "Monthly Inspection",
    "pricing.feature.inspection2": "2 Inspections/month",
    "pricing.feature.checkInOut": "Check-in/Check-out Handling",
    "pricing.feature.linenService": "Linen Service per new tenant",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with our team",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.inquiryType": "Inquiry Type",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.success": "Thank you! We'll get back to you soon.",
    "contact.inquiry.general": "General Inquiry",
    "contact.inquiry.pricing": "Pricing Question",
    "contact.inquiry.support": "Support",
    "contact.inquiry.partnership": "Partnership",

    // About
    "about.title": "About Brandenbed Living Spaces",
    "about.description": "Brandenbed Living Spaces UG is a modern property management company dedicated to delivering seamless rental operations, stable occupancy, and automated services for property owners.",
    "about.registration": "Registration Number",
    "about.taxId": "Tax ID",
    "about.vatId": "VAT ID",

    // Payment
    "payment.title": "Complete Your Payment",
    "payment.step1": "Customer Details",
    "payment.step2": "Property Information",
    "payment.step3": "Plan Selection",
    "payment.step4": "Payment Details",
    "payment.name": "Full Name",
    "payment.email": "Email Address",
    "payment.phone": "Phone Number",
    "payment.address": "Property Address",
    "payment.propertyType": "Property Type",
    "payment.propertySize": "Property Size (sqm)",
    "payment.selectPlan": "Select Your Plan",
    "payment.cardNumber": "Card Number",
    "payment.expiry": "Expiry Date",
    "payment.cvv": "CVV",
    "payment.summary": "Payment Summary",
    "payment.total": "Total",
    "payment.payNow": "Pay Now",
    "payment.next": "Next",
    "payment.back": "Back",
    "payment.success.title": "Payment Successful!",
    "payment.success.message": "Thank you for choosing Brandenbed Living Spaces. We'll be in touch shortly.",
    "payment.success.close": "Close",
    "payment.propertyType.apartment": "Apartment",
    "payment.propertyType.house": "House",
    "payment.propertyType.commercial": "Commercial",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.legal": "Legal Information",
  },
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.whatWeDo": "Unsere Leistungen",
    "nav.dashboard": "Eigentümer-Dashboard",
    "nav.whyChooseUs": "Warum Wir",
    "nav.pricing": "Preise",
    "nav.contact": "Kontakt",
    "nav.about": "Über Uns",
    "nav.payment": "Zahlung",

    // Hero Section
    "hero.heading": "Intelligente, Einfache, Stressfreie Immobilienverwaltung",
    "hero.subheading": "Ein vollständig verwalteter Immobilienservice, der Stabilität, Transparenz und Seelenfrieden bietet.",
    "hero.cta.explore": "Pläne Entdecken",
    "hero.cta.contact": "Kontaktieren Sie Uns",

    // Home Page
    "home.solutions.title": "Intelligente Lösungen für Moderne Immobilienbesitzer",
    "home.solutions.description": "Erleben Sie automatisierte Mieteinzüge, professionelles Mietermanagement und vollständige Transparenz durch unser digitales Dashboard.",
    "home.features.title": "Unsere Dienstleistungen",

    // What We Do
    "whatWeDo.title": "Unsere Leistungen",
    "whatWeDo.subtitle": "Umfassende Immobilienverwaltungslösungen",
    "whatWeDo.tenant.title": "Komplettes Mietermanagement",
    "whatWeDo.tenant.description": "Wir vermarkten Ihre Immobilie, prüfen Mieter, führen Besichtigungen durch und sorgen für schnelle Belegung mit zuverlässigen Mietern.",
    "whatWeDo.rent.title": "Garantierte & Konstante Miete",
    "whatWeDo.rent.description": "Unser System gewährleistet pünktliche Mieteinzüge mit transparenten Auszahlungen jeden Monat.",
    "whatWeDo.maintenance.title": "Wartung & Instandhaltung",
    "whatWeDo.maintenance.description": "Wir verwalten Reparaturen, Inspektionen, Beschwerden und Lieferantenkoordination, um Ihre Immobilie in Top-Zustand zu halten.",
    "whatWeDo.legal.title": "Rechtliche & Dokumentenverwaltung",
    "whatWeDo.legal.description": "Wir erstellen Mietverträge, überprüfen Mieterdokumente und kümmern uns um die Compliance.",
    "whatWeDo.support.title": "24/7 Support",
    "whatWeDo.support.description": "Sowohl Eigentümer als auch Mieter erhalten schnelle, zuverlässige Unterstützung bei jedem Problem.",

    // Owner Dashboard
    "dashboard.title": "Eigentümer-Dashboard",
    "dashboard.subtitle": "Volle Transparenz. Volle Kontrolle. Von Überall.",
    "dashboard.properties.title": "Alle Immobilien auf Einen Blick",
    "dashboard.properties.description": "Verfolgen Sie alle Einheiten, Mieter und Leistungen in Echtzeit.",
    "dashboard.tickets.title": "Wartungsticket-Verfolgung",
    "dashboard.tickets.description": "Sehen Sie alle Service-Tickets mit Status (ausstehend, in Bearbeitung, gelöst).",
    "dashboard.documents.title": "Dokumente & Berichte",
    "dashboard.documents.description": "Greifen Sie einfach auf Verträge, Inspektionsberichte, Rechnungen und Fotos zu.",
    "dashboard.financial.title": "Finanzielle Einblicke",
    "dashboard.financial.description": "Überwachen Sie eingezogene Mieten, Auszahlungen, Ausgaben und Prognosen.",

    // Why Choose Us
    "whyChooseUs.title": "Warum Wir",
    "whyChooseUs.subtitle": "Wir nehmen Ihnen den Stress der Immobilienverwaltung ab",
    "whyChooseUs.benefit1": "Stabile Belegung durch strategisches Mieter-Onboarding",
    "whyChooseUs.benefit2": "Automatisierter Mieteinzug jeden Monat",
    "whyChooseUs.benefit3": "Professionelle Wartung und Lieferantenkoordination",
    "whyChooseUs.benefit4": "Vollständige Transparenz durch ein digitales Dashboard",
    "whyChooseUs.benefit5": "24/7 Support für Eigentümer und Mieter",
    "whyChooseUs.benefit6": "Höhere langfristige Renditen ohne operativen Stress",

    // Pricing
    "pricing.title": "Preispläne",
    "pricing.subtitle": "Wählen Sie den Plan, der zu Ihnen passt",
    "pricing.basic": "Basis",
    "pricing.standard": "Standard",
    "pricing.premium": "Premium",
    "pricing.popular": "Beliebteste",
    "pricing.perMonth": "/Monat",
    "pricing.selectPlan": "Plan Wählen",
    "pricing.feature.tenantSearch": "Mietersuche",
    "pricing.feature.rentCollection": "Mieteinzug",
    "pricing.feature.maintenanceBasic": "Basis Wartungskoordination",
    "pricing.feature.maintenanceFull": "Vollständige Wartungsplanung",
    "pricing.feature.maintenancePriority": "Prioritäts-Wartungsbehandlung",
    "pricing.feature.digitalContracts": "Digitale Verträge",
    "pricing.feature.monthlyReport": "Monatlicher Bericht (E-Mail)",
    "pricing.feature.dashboardReport": "Dashboard + Bericht",
    "pricing.feature.detailedAnalytics": "Detailliert + Analysen",
    "pricing.feature.dashboardAccess": "Dashboard-Zugang",
    "pricing.feature.unlimitedDashboard": "Unbegrenztes Dashboard + Analysen",
    "pricing.feature.cleaning1": "1 Reinigung/Monat",
    "pricing.feature.cleaning3": "3 Reinigungen/Monat",
    "pricing.feature.tenantChat": "Mieter-Support-Chat",
    "pricing.feature.priorityChat": "Prioritäts-Mieter-Support",
    "pricing.feature.inspection1": "Monatliche Inspektion",
    "pricing.feature.inspection2": "2 Inspektionen/Monat",
    "pricing.feature.checkInOut": "Check-in/Check-out Abwicklung",
    "pricing.feature.linenService": "Wäscheservice pro neuem Mieter",

    // Contact
    "contact.title": "Kontaktieren Sie Uns",
    "contact.subtitle": "Nehmen Sie Kontakt mit unserem Team auf",
    "contact.name": "Name",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.inquiryType": "Anfragetyp",
    "contact.message": "Nachricht",
    "contact.submit": "Nachricht Senden",
    "contact.success": "Vielen Dank! Wir melden uns bald bei Ihnen.",
    "contact.inquiry.general": "Allgemeine Anfrage",
    "contact.inquiry.pricing": "Preisfrage",
    "contact.inquiry.support": "Support",
    "contact.inquiry.partnership": "Partnerschaft",

    // About
    "about.title": "Über Brandenbed Living Spaces",
    "about.description": "Brandenbed Living Spaces UG ist ein modernes Immobilienverwaltungsunternehmen, das sich der Bereitstellung nahtloser Mietoperationen, stabiler Belegung und automatisierter Dienstleistungen für Immobilienbesitzer widmet.",
    "about.registration": "Registrierungsnummer",
    "about.taxId": "Steuer-ID",
    "about.vatId": "USt-IdNr.",

    // Payment
    "payment.title": "Zahlung Abschließen",
    "payment.step1": "Kundendaten",
    "payment.step2": "Immobilieninformationen",
    "payment.step3": "Planauswahl",
    "payment.step4": "Zahlungsdetails",
    "payment.name": "Vollständiger Name",
    "payment.email": "E-Mail-Adresse",
    "payment.phone": "Telefonnummer",
    "payment.address": "Immobilienadresse",
    "payment.propertyType": "Immobilientyp",
    "payment.propertySize": "Immobiliengröße (qm)",
    "payment.selectPlan": "Wählen Sie Ihren Plan",
    "payment.cardNumber": "Kartennummer",
    "payment.expiry": "Ablaufdatum",
    "payment.cvv": "CVV",
    "payment.summary": "Zahlungsübersicht",
    "payment.total": "Gesamt",
    "payment.payNow": "Jetzt Bezahlen",
    "payment.next": "Weiter",
    "payment.back": "Zurück",
    "payment.success.title": "Zahlung Erfolgreich!",
    "payment.success.message": "Vielen Dank, dass Sie sich für Brandenbed Living Spaces entschieden haben. Wir werden uns in Kürze bei Ihnen melden.",
    "payment.success.close": "Schließen",
    "payment.propertyType.apartment": "Wohnung",
    "payment.propertyType.house": "Haus",
    "payment.propertyType.commercial": "Gewerbe",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.quickLinks": "Schnelllinks",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliche Informationen",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "de" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
