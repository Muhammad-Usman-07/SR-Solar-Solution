"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const reasons = [
  {
    icon: "🏆",
    title: "10+ Years Experience",
    desc: "Over a decade of expertise in solar installations across Pakistan with thousands of satisfied customers.",
  },
  {
    icon: "⚡",
    title: "Premium Quality Products",
    desc: "We use only top-tier solar panels and inverters from world's leading brands like Longi, Jinko, Growatt.",
  },
  {
    icon: "🔧",
    title: "Expert Installation Team",
    desc: "Our certified engineers ensure safe, efficient and professional installation at every project.",
  },
  {
    icon: "📞",
    title: "24/7 After Sales Support",
    desc: "We don't disappear after installation. Our team is always available for maintenance and support.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Competitive pricing without compromising quality. Get the best solar deal in Pakistan.",
  },
  {
    icon: "📋",
    title: "NEPRA Registered",
    desc: "Fully licensed and registered company. All net metering and grid-tie approvals handled by us.",
  },
];

export default function WhyChooseUs() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-24 transition-colors duration-300 ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 w-full"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=85"
                  alt="Solar installation team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
              </div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl ${dark ? "bg-[#0B1120] border border-[#1a2d4a]" : "bg-white border border-gray-100"}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)" }}>
                    ⚡
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold"
                      style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      500+
                    </p>
                    <p className={`text-xs font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}>Projects Done</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`absolute -top-6 -left-6 p-4 rounded-2xl shadow-2xl ${dark ? "bg-[#0B1120] border border-[#1a2d4a]" : "bg-white border border-gray-100"}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "linear-gradient(135deg, #22C55E, #1565C0)" }}>
                    😊
                  </div>
                  <div>
                    <p className="text-xl font-extrabold"
                      style={{ background: "linear-gradient(135deg, #22C55E, #1565C0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      450+
                    </p>
                    <p className={`text-xs font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}>Happy Clients</p>
                  </div>
                </div>
              </motion.div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ boxShadow: "0 0 80px rgba(34,197,94,0.15)" }} />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="lg:w-3/5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5"
                style={{
                  background: dark ? "rgba(34,197,94,0.1)" : "rgba(21,101,192,0.08)",
                  border: `1px solid ${dark ? "rgba(34,197,94,0.3)" : "rgba(21,101,192,0.2)"}`,
                  color: dark ? "#22C55E" : "#1565C0",
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: dark ? "#22C55E" : "#1565C0" }} />
                Why Choose Us
              </span>

              <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 leading-tight ${dark ? "text-white" : "text-gray-900"}`}>
                Pakistan's Most Trusted
                <span style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {" "}Solar Partner
                </span>
              </h2>
              <p className={`text-base leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
                With over 10 years of experience and 500+ successful installations, SR Solar Solution is the name Pakistan trusts for clean, reliable solar energy.
              </p>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group p-5 rounded-2xl border transition-all duration-300 ${
                    dark
                      ? "bg-[#0B1120] border-[#1a2d4a] hover:border-[#22C55E]/50"
                      : "bg-gray-50 border-gray-100 hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1565C020, #22C55E20)" }}
                    >
                      {r.icon}
                    </motion.div>
                    <div>
                      <h4 className={`font-bold text-sm mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
                        {r.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${dark ? "text-gray-500" : "text-gray-600"}`}>
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}