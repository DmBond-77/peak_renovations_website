"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import SocialIcons from "./shared/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-gray-900 border-b border-yellow-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Peak Renovations Logo"
              width={80}
              height={40}
            />
          </a>
          {/* Desktop Menu */}
          <nav className="hidden items-center space-x-6 text-base md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-gray-400 transition-colors text-md xl:text-xl "
              >
                {link.label}
                <span className="underline-hover " />
              </a>
            ))}
          </nav>
          <SocialIcons />

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden text-amber-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Animated Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-gray-900 text-yellow-300 transition-all duration-300 md:hidden",
          {
            "pointer-events-auto translate-y-0 opacity-100": isOpen,
            "pointer-events-none -translate-y-10 opacity-0": !isOpen,
          }
        )}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group relative text-gray-400  transition-colors"
            >
              {link.label}
              <span className="underline-hover" />
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
