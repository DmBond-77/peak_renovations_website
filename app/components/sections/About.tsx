"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section className="bg-white py-16 px-6 md:px-10" id="about">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Image */}
        <motion.div
          className="relative w-full h-64 md:h-96"
          variants={imageVariants}
        >
          <Image
            src="/images/owner.jpg"
            alt="Our team at work"
            fill
            className="object-cover rounded-xl shadow-lg"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div variants={textVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Peak Renovations PDX?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Portland homeowners trust us for top-quality, reliable renovation
            services tailored to their future.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Peak Renovations, we bring years of expertise to every project—
            from residential remodels to commercial upgrades. Our team is
            committed to quality, transparency, and exceeding client
            expectations.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Vitaly Karmanov is a Oregon Licensed Residential Contractor with
            years of experience helping local clients renovate their homes. He
            achieved success due to his commitment to providing top quality
            service, craftsmanship, and transparency.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Request a Quote
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
