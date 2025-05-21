"use client";

import { motion } from "framer-motion";

export default function InspirationQuote() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          className="text-2xl italic font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          “Renovating not only restores the house but restores the story of the
          home and neighborhood.”
        </motion.blockquote>
        <motion.p
          className="mt-4 text-sm text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          — Peak Renovations PDX
        </motion.p>
      </div>
    </section>
  );
}
