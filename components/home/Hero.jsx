"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${dark ? "bg-[#0B1120]" : "bg-gray-50"}`}>

      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80"
          alt="Solar panels background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 ${dark ? "bg-[#0B1120]/80" : "bg-white/75"}`} />
      </div>

      {/* Animated background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 z-0"
        style={{ background: "radial-gradient(circle, #22C55E, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 z-0"
        style={{ background: "radial-gradient(circle, #1565C0, transparent)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "linear-gradient(135deg, #1565C020, #22C55E20)", border: "1px solid #22C55E50" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className={dark ? "text-[#22C55E]" : "text-[#1565C0]"}>
              Pakistan's #1 Solar Solution Company
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${dark ? "text-white" : "text-[#0B1120]"}`}
          >
            Power Your Future
            <br />
            <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              With Solar Energy
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl ${dark ? "text-gray-400" : "text-gray-600"}`}
          >
            SR Solar Solution provides top-quality solar systems for homes, businesses, and industries across Pakistan. Save up to 90% on electricity bills with our expert installations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #1565C0, #22C55E)",
                boxShadow: "0 4px 20px rgba(34,197,94,0.3)",
              }}
            >
              ☀️ Get Free Quote
            </Link>
            <Link
              href="/solutions"
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 border-2 ${
                dark
                  ? "border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-[#0B1120]"
                  : "border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0] hover:text-white"
              }`}
            >
              🔍 Our Solutions
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {[
              "✅ On-Grid Systems",
              "✅ Hybrid Systems",
              "✅ Off-Grid Systems",
              "✅ Net Metering",
              "✅ Free Consultation",
            ].map((f, i) => (
              <span
                key={i}
                className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                  dark
                    ? "bg-white/5 text-gray-300 border border-white/10"
                    : "bg-white text-gray-700 border border-gray-200 shadow-sm"
                }`}
              >
                {f}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className={`text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-5 text-[#22C55E]"
          >
            ▼
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}