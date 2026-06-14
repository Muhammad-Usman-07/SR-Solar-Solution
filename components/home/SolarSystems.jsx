"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const systems = [
  {
    title: "On-Grid System",
    href: "/system/on-grid",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85",
    desc: "Connected to national grid. Sell excess electricity back through net metering and reduce bills to zero.",
    features: ["Net Metering", "No Battery Needed", "Maximum Savings", "Grid Connected"],
    color: "#22C55E",
    icon: "🔌",
  },
  {
    title: "Hybrid System",
    href: "/system/hybrid",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=85",
    desc: "Best of both worlds. Battery backup plus grid connection for 24/7 uninterrupted power supply.",
    features: ["Battery Backup", "Grid + Solar", "Load Shedding Proof", "Smart Management"],
    color: "#1565C0",
    icon: "⚡",
  },
  {
    title: "Off-Grid System",
    href: "/system/off-grid",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=85",
    desc: "Completely independent from the grid. Perfect for remote areas and locations without electricity.",
    features: ["100% Independent", "Remote Areas", "Battery Storage", "No Grid Required"],
    color: "#F59E0B",
    icon: "🔋",
  },
  {
    title: "Net Metering",
    href: "/system/net-metering",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=85",
    desc: "Sell your surplus solar energy back to WAPDA/LESCO and earn credits on your electricity bill.",
    features: ["Sell to Grid", "NEPRA Approved", "Bill Credits", "Govt Supported"],
    color: "#22C55E",
    icon: "📊",
  },
];

export default function SolarSystems() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0B1120]" : "bg-slate-50"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)", border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`, color: dark ? "#22C55E" : "#1565C0" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
            Solar Systems
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-5 ${dark ? "text-white" : "text-gray-900"}`}>
            Choose Your
            <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> System</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-gray-600"}`}>
            We offer all types of solar systems tailored to your needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 ${
                dark ? "border-[#1a2d4a] hover:border-[#22C55E]/50" : "border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl"
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8))" }} />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `linear-gradient(135deg, #1565C0, ${s.color})` }}>
                  {s.icon}
                </div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">{s.title}</h3>
              </div>
              <div className={`p-5 ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}>
                <p className={`text-sm leading-relaxed mb-4 ${dark ? "text-gray-400" : "text-gray-600"}`}>{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ background: `${s.color}20`, color: s.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-bold transition-colors" style={{ color: s.color }}>
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}