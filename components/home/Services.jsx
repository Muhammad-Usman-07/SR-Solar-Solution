"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const services = [
  {
    icon: "🏠",
    title: "Residential Solar",
    subtitle: "For Homes & Villas",
    href: "/solutions/residential",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=900&q=85",
    desc: "Transform your home with clean solar energy. Reduce electricity bills by up to 90% with our premium residential solar systems and expert installation across Pakistan.",
    features: ["Net Metering Approved", "Battery Backup Available", "Smart Monitoring App", "10 Year Warranty"],
    color: "#22C55E",
    tag: "Most Popular",
  },
  {
    icon: "🏢",
    title: "Commercial Solar",
    subtitle: "For Offices & Plazas",
    href: "/solutions/commercial",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85",
    desc: "Maximize your business ROI with large-scale solar installations. Perfect for offices, shopping plazas, hotels and commercial buildings with fast 3-4 year payback.",
    features: ["High Capacity Systems", "Fast ROI — 3 to 4 Years", "24/7 After Sales Support", "NEPRA Registered"],
    color: "#1565C0",
    tag: "Best ROI",
  },
  {
    icon: "🏭",
    title: "Industrial Solar",
    subtitle: "For Factories & Plants",
    href: "/solutions/industrial",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=900&q=85",
    desc: "Heavy duty mega-watt scale solar solutions for factories, industrial units and manufacturing plants. Custom engineered for maximum efficiency and output.",
    features: ["Mega Watt Scale", "Custom Engineering", "Grid Tied Systems", "Load Management"],
    color: "#F59E0B",
    tag: "Enterprise",
  },
  {
    icon: "🌾",
    title: "Agricultural Solar",
    subtitle: "For Farms & Tube Wells",
    href: "/solutions/agricultural",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85",
    desc: "Power your farms and tube wells with solar energy. Specially designed for Pakistan's agricultural sector with remote area coverage and government subsidy eligibility.",
    features: ["Solar Tube Wells", "Water Pump Systems", "Remote Area Coverage", "Govt Subsidy Eligible"],
    color: "#22C55E",
    tag: "Rural Special",
  },
];

export default function Services() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0B1120]" : "bg-slate-50"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
            style={{
              background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)",
              border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`,
              color: dark ? "#22C55E" : "#1565C0",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
            Our Services
          </motion.span>

          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-5 leading-tight ${dark ? "text-white" : "text-gray-900"}`}>
            Solar Solutions For
            <br />
            <span style={{ background: "linear-gradient(135deg, #1565C0 0%, #22C55E 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Every Need
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
            From homes to industries — complete solar energy solutions across Pakistan with expert installation and lifetime after-sales support.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="space-y-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`group relative flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                dark
                  ? "bg-[#0F1A2E] border border-[#1a2d4a] hover:border-[#22C55E]/50"
                  : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-200"
              }`}
            >
              {/* Image */}
              <div className="relative lg:w-[55%] h-72 lg:h-auto min-h-[320px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))" }} />

                {/* Tag badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg"
                  style={{ background: `linear-gradient(135deg, #1565C0, ${s.color})` }}
                >
                  ⭐ {s.tag}
                </motion.div>

                {/* Bottom text on image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white/80 text-sm font-medium">{s.subtitle}</p>
                  <h3 className="text-white text-2xl font-extrabold">{s.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center">

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${s.color}20, ${s.color}40)` }}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase" style={{ color: s.color }}>
                      {s.subtitle}
                    </p>
                    <h3 className={`text-xl font-extrabold ${dark ? "text-white" : "text-gray-900"}`}>
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-5 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }} />

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-gray-400" : "text-gray-600"}`}>
                  {s.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {s.features.map((f, fi) => (
                    <motion.div
                      key={fi}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.08 }}
                      className={`flex items-center gap-2.5 text-sm px-3 py-2 rounded-xl ${
                        dark ? "bg-[#0B1120]" : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold"
                        style={{ background: `${s.color}20`, color: s.color }}>✓</span>
                      <span className={dark ? "text-gray-300" : "text-gray-700"}>{f}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm shadow-lg transition-all duration-300 hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, #1565C0, ${s.color})`,
                      boxShadow: `0 4px 20px ${s.color}40`,
                    }}
                  >
                    Explore {s.title} →
                  </Link>
                </motion.div>
              </div>

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 80px ${s.color}08` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}