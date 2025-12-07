"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Building2,
  Wrench,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Calendar,
} from "lucide-react";

/* ---------------- Mock Data ---------------- */

const mockProperties = [
  { id: 1, name: "Apartment 1A", address: "Friedrichstraße 123, Berlin", status: "Occupied", rent: 1200 },
  { id: 2, name: "Apartment 2B", address: "Alexanderplatz 45, Berlin", status: "Occupied", rent: 1450 },
  { id: 3, name: "Studio 3C", address: "Prenzlauer Berg 78, Berlin", status: "Vacant", rent: 850 },
];

const mockTickets = [
  { id: 1, property: "Apartment 1A", issue: "Heating repair", status: "In Progress", date: "2024-01-15" },
  { id: 2, property: "Apartment 2B", issue: "Plumbing check", status: "Resolved", date: "2024-01-12" },
  { id: 3, property: "Studio 3C", issue: "Paint touch-up", status: "Pending", date: "2024-01-18" },
];

const mockFinancials = {
  totalRent: 3500,
  collected: 2650,
  pending: 850,
  expenses: 320,
};

/* ---------------- Status Colors ---------------- */

const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
    case "Occupied":
      return "bg-green-100/40 text-green-700 border border-green-300/30";
    case "In Progress":
      return "bg-yellow-100/40 text-yellow-700 border border-yellow-300/30";
    case "Pending":
    case "Vacant":
      return "bg-red-100/40 text-red-700 border border-red-300/30";
    default:
      return "bg-gray-100/40 text-gray-700 border border-gray-300/30";
  }
};

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F5F2EC]">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-gradient-to-br from-[#071E40] via-[#0F3641] to-[#071E40] py-20 overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-3rem] right-[-2rem] w-72 h-72 bg-[#D4C9A1] blur-[110px] rounded-full" />
          <div className="absolute bottom-[-3rem] left-[-2rem] w-80 h-80 bg-[#476A6F] blur-[110px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              {t("dashboard.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/75 leading-relaxed">
              {t("dashboard.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Dashboard Content ---------------- */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* ---------------- Stats Cards ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Total Properties */}
            <DashboardCard 
              title="Properties" 
              value="3" 
              subtitle="Total Units" 
              icon={Building2} 
              iconBg="bg-[#071E40]/20"
            />

            {/* Rent Collected */}
            <DashboardCard 
              title="This Month" 
              value={`€${mockFinancials.collected}`} 
              subtitle="Rent Collected" 
              icon={DollarSign} 
              iconBg="bg-green-200/40 text-green-700"
            />

            {/* Open Tickets */}
            <DashboardCard 
              title="Active" 
              value="2" 
              subtitle="Open Tickets" 
              icon={Wrench} 
              iconBg="bg-yellow-200/40 text-yellow-700"
            />

            {/* Occupancy */}
            <DashboardCard 
              title="Occupancy" 
              value="67%" 
              subtitle="2 of 3 Units" 
              icon={Users} 
              iconBg="bg-[#D4C9A1]/30 text-[#071E40]"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ---------------- Properties ---------------- */}
            <GlassPanel title={t("dashboard.properties.title")} icon={Building2}>
              <div className="space-y-4">
                {mockProperties.map((property) => (
                  <GlassItem key={property.id}>
                    <div>
                      <h3 className="font-semibold text-[#071E40]">{property.name}</h3>
                      <p className="text-sm text-[#476A6F]">{property.address}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                        {property.status}
                      </span>
                      <p className="text-sm font-semibold text-[#071E40] mt-1">€{property.rent}/mo</p>
                    </div>
                  </GlassItem>
                ))}
              </div>
            </GlassPanel>

            {/* ---------------- Tickets ---------------- */}
            <GlassPanel title={t("dashboard.tickets.title")} icon={Wrench}>
              <div className="space-y-4">
                {mockTickets.map((ticket) => (
                  <GlassItem key={ticket.id}>
                    <div className="flex items-center space-x-3">
                      {ticket.status === "Resolved" ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : ticket.status === "In Progress" ? (
                        <Clock className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      )}
                      <div>
                        <h3 className="font-semibold text-[#071E40]">{ticket.issue}</h3>
                        <p className="text-sm text-[#476A6F]">{ticket.property}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                      <p className="text-xs text-[#476A6F] mt-1">{ticket.date}</p>
                    </div>
                  </GlassItem>
                ))}
              </div>
            </GlassPanel>

            {/* ---------------- Financial Overview ---------------- */}
            <GlassPanel title={t("dashboard.financial.title")} icon={TrendingUp}>
              <div className="space-y-4">
                <GlassSummary label="Total Expected Rent" value={`€${mockFinancials.totalRent}`} />
                <GlassSummary label="Collected" value={`€${mockFinancials.collected}`} color="text-green-700" bg="bg-green-50/50" />
                <GlassSummary label="Pending" value={`€${mockFinancials.pending}`} color="text-yellow-700" bg="bg-yellow-50/50" />
                <GlassSummary label="Expenses" value={`-€${mockFinancials.expenses}`} color="text-red-700" bg="bg-red-50/50" />
              </div>
            </GlassPanel>

            {/* ---------------- Documents ---------------- */}
            <GlassPanel title={t("dashboard.documents.title")} icon={FileText}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Rental Contracts", count: 3, icon: FileText },
                  { name: "Inspection Reports", count: 5, icon: CheckCircle },
                  { name: "Invoices", count: 12, icon: DollarSign },
                  { name: "Photos", count: 24, icon: Calendar },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 hover:scale-[1.02] transition-all"
                  >
                    <doc.icon className="w-6 h-6 text-[#476A6F] mb-2" />
                    <h3 className="font-semibold text-[#071E40] text-sm">{doc.name}</h3>
                    <p className="text-xs text-[#476A6F]">{doc.count} files</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

// Dashboard stat card
function DashboardCard({ title, value, subtitle, icon: Icon, iconBg }: any) {
  return (
    <div className="bg-white/40 backdrop-blur-lg border border-white/50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-sm text-[#476A6F]">{title}</span>
      </div>
      <div className="text-3xl font-bold text-[#071E40]">{value}</div>
      <div className="text-sm text-[#476A6F]">{subtitle}</div>
    </div>
  );
}

// Glass panel container
function GlassPanel({ title, icon: Icon, children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#071E40]">{title}</h2>
        <Icon className="w-5 h-5 text-[#476A6F]" />
      </div>

      {children}
    </motion.div>
  );
}

// Glass list item
function GlassItem({ children }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/50 backdrop-blur-md border border-white/50 rounded-xl hover:scale-[1.01] transition-all">
      {children}
    </div>
  );
}

// Summary row
function GlassSummary({ label, value, color = "text-[#071E40]", bg = "bg-[#F5F2EC]" }: any) {
  return (
    <div className={`flex justify-between items-center p-4 rounded-xl ${bg}`}>
      <span className={color}>{label}</span>
      <span className={`font-bold ${color}`}>{value}</span>
    </div>
  );
}
