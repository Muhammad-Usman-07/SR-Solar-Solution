"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const projects = [
  { title: "10KW Residential System", location: "Lahore", kw: "10 KW", type: "On-Grid", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80" },
  { title: "50KW Commercial Plaza", location: "Karachi", kw: "50 KW", type: "Hybrid", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" },
  { title: "100KW Factory Plant", location: "Faisalabad", kw: "100 KW", type: "On-Grid", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80" },
  { title: "5KW Home System", location: "Islamabad", kw: "5 KW", type: "Hybrid", image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80" },
  { title: "Solar Tube Well", location: "Multan", kw: "7.5 KW", type: "Off-Grid", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" },
  { title: "200KW Industrial Unit", location: "Sialkot", kw: "200 KW", type: "On-Grid", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80" },
];

export default function Projects() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0B1120]" : "bg-slate-50"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
            style={{ background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)", border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`, color: dark ? "#22C55E" : "#1565C0" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
            Our Projects
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-5 ${dark ? "text-white" : "text-gray-900"}`}>
            Recent
            <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Installations</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-gray-400" : "text-gray-600"}`}>
            Hundreds of successful solar installations across Pakistan. Here are some of our recent projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 ${
                dark ? "border-[#1a2d4a] hover:border-[#22C55E]/50" : "border-gray-200 shadow-md hover:shadow-xl"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85))" }} />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)" }}>
                  {p.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/70 text-xs mb-1">📍 {p.location}</p>
                  <h3 className="text-white font-bold text-base">{p.title}</h3>
                </div>
              </div>
              <div className={`px-5 py-4 flex items-center justify-between ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <span className="font-bold text-sm" style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {p.kw}
                  </span>
                </div>
                <span className={`text-xs ${dark ? "text-gray-500" : "text-gray-500"}`}>Solar System</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm hover:scale-105 transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", boxShadow: "0 4px 20px rgba(34,197,94,0.3)" }}>
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}