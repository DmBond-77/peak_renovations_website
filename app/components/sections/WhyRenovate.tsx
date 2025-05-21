"use client";

import { Hammer, DollarSign, Home, Thermometer, Brush } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyRenovate() {
  const reasons = [
    {
      icon: <Hammer className="w-8 h-8 text-gray-800" />,
      title: "Increase Functional Space",
      description:
        "Improve layout and usability by creating more purposeful areas in your home.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-gray-800" />,
      title: "Boost Home Value",
      description:
        "Renovations can significantly raise your property's market value.",
    },
    {
      icon: <Home className="w-8 h-8 text-gray-800" />,
      title: "Avoid the Stress of Moving",
      description:
        "Skip the hassle of buying a new home—upgrade the one you already love.",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-gray-800" />,
      title: "Improve Energy Efficiency",
      description:
        "Modern materials and upgrades can help lower utility bills and reduce energy use.",
    },
    {
      icon: <Brush className="w-8 h-8 text-gray-800" />,
      title: "Add Personal Style",
      description:
        "Transform your space to reflect your unique taste and lifestyle.",
    },
  ];

  // Анимация для каждого элемента — подъём + появление с прозрачностью
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-10" id="why-renovate">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Renovate Your Home?
        </h2>
        <p className="text-lg text-gray-600">
          Five great reasons to improve your space with Peak Renovations
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
