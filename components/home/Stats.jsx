"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed", icon: "⚡" },
  { value: 450, suffix: "+", label: "Happy Clients", icon: "😊" },
  { value: 10, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 90, suffix: "%", label: "Bill Savings", icon: "💰" },
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { darkMode } = useTheme();
  const dark = darkMode;

  return (
    <section className={`py-16 transition-colors duration-300 ${dark ? "bg-[#0F1A2E]" : "bg-white"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                dark
                  ? "bg-[#0B1120] border border-[#1a2d4a] hover:border-[#22C55E]"
                  : "bg-gray-50 border border-gray-200 hover:border-[#1565C0] shadow-sm"
              }`}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="text-4xl font-extrabold mb-2"
                style={{ background: "linear-gradient(135deg, #1565C0, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className={`text-sm font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}