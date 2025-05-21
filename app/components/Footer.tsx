"use client";

import Container from "./shared/Container";
import SocialIcons from "./shared/SocialIcons";
import Image from "next/image";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "Services", href: "#services" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 text-white py-4 border-t border-yellow-600"
    >
      <Container>
        <div className="flex flex-col xl:flex-row sm:justify-between gap-6 items-center">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center xl:items-start"
          >
            <a href="/">
              <Image
                src="/images/logo.png"
                alt="Peak Renovations Logo"
                width={100}
                height={40}
              />
            </a>
            <p className="text-gray-400">Portland, Oregon</p>
            <p className="text-gray-400">Oregon CCB #123456</p>
            <div className="text-sm text-gray-400 mt-4">
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 mt-0.5 text-gray-400 xl:block" />
                <p>Hours: Mon–Fri 9AM–5PM</p>
              </div>
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 mt-0.5 text-gray-400 xl:block" />
                <p>Saturday | Sunday Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.nav
            variants={itemVariants}
            className="flex items-center space-x-6 text-base"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-gray-400 transition-colors text-md xl:text-xl"
              >
                {link.label}
                <span className="underline-hover" />
              </a>
            ))}
          </motion.nav>

          <motion.div variants={itemVariants}>
            <SocialIcons />
          </motion.div>
        </div>

        <motion.p
          variants={itemVariants}
          className="text-xs text-gray-500 mt-8 text-center md:text-left"
        >
          © {new Date().getFullYear()} Peak Renovations PDX. All rights
          reserved.
        </motion.p>
      </Container>
    </motion.footer>
  );
}
