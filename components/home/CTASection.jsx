"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function CTASection() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0B1120]" : "bg-slate-50"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #0F2A5E 0%, #0B4D2E 100%)" }}
        >
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #22C55E, transparent)" }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #1565C0, transparent)" }} />

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-6xl mb-6"
          >
            ☀️
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Switch to
            <br />
            <span style={{ background: "linear-gradient(135deg, #22C55E, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Solar Energy?
            </span>
          </h2>

          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Get a free consultation and custom quote from Pakistan's most trusted solar company. Save up to 90% on your electricity bills.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold text-sm shadow-2xl hover:shadow-white/20 transition-all"
                style={{ color: "#1565C0" }}>
                ☀️ Get Free Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a href="https://wa.me/923244029816?text=${encodeURIComponent('Hello SR Solar Solution! I want a free consultation.')}"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all">
                💬 WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Bottom stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/10">
            {[
              { value: "500+", label: "Projects Done" },
              { value: "450+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
              { value: "90%", label: "Bill Savings" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}