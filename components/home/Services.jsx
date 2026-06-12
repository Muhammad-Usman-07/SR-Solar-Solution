"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const services = [
  {
    icon: "🏠",
    title: "Residential",
    href: "/solutions/residential",
    desc: "Solar systems for homes. Save up to 90% on electricity bills with clean energy.",
    features: ["Net Metering", "Battery Backup", "Smart Monitoring"],
    color: "#22C55E",
  },
  {
    icon: "🏢",
    title: "Commercial",
    href: "/solutions/commercial",
    desc: "Large scale solar solutions for offices, plazas, and commercial buildings.",
    features: ["High Capacity", "ROI Optimized", "24/7 Support"],
    color: "#1565C0",
  },
  {
    icon: "🏭",
    title: "Industrial",
    href: "/solutions/industrial",
    desc: "Heavy duty solar installations for factories and industrial units.",
    features: ["Mega Watt Scale", "Custom Design", "Grid Tied"],
    color: "#F59E0B",
  },
  {
    icon: "🌾",
    title: "Agricultural",
    href: "/solutions/agricultural",
    desc: "Solar tube wells and farm energy solutions for Pakistan's agricultural sector.",
    features: ["Tube Wells", "Water Pumps", "Remote Areas"],
    color: "#22C55E",
  },
];

export default function Services() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-20 transition-colors duration-300 ${dark ? "bg-[#0B1120]" : "bg-gray-50"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(135deg, #1565C020, #22C55E20)", border: "1px solid #22C55E50", color: dark ? "#22C55E" : "#1565C0" }}>
            Our Services
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
            Solar Solutions For
            <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Every Need</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-gray-600"}`}>
            From homes to industries, we provide complete solar energy solutions across Pakistan with expert installation and after-sales support.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                dark
                  ? "bg-[#0F1A2E] border-[#1a2d4a] hover:border-[#22C55E]"
                  : "bg-white border-gray-200 hover:border-[#1565C0] shadow-sm hover:shadow-lg"
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{s.icon}</div>

              {/* Title */}
              <h3 className={`text-lg font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
                {s.title}
              </h3>

              {/* Desc */}
              <p className={`text-sm leading-relaxed mb-4 flex-1 ${dark ? "text-gray-400" : "text-gray-600"}`}>
                {s.desc}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {s.features.map((f, fi) => (
                  <li key={fi} className={`text-xs flex items-center gap-2 ${dark ? "text-gray-400" : "text-gray-600"}`}>
                    <span style={{ color: s.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href={s.href}
                className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300"
                style={{ color: s.color }}
              >
                Learn More →
              </Link>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}