"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./shared/SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("/");

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
    { label: "Services", href: "#services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "/";
      for (const link of links) {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
          if (section instanceof HTMLElement) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
              current = link.href;
              break;
            }
          }
        } else if (link.href === "/") {
          if (window.scrollY < 100) current = "/";
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-gray-900 border-b border-yellow-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Peak Renovations Logo"
              width={80}
              height={40}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-base">
            {links.map((link) => {
              const isActive =
                activeSection === link.href ||
                (link.href === "/" &&
                  (activeSection === "/" || activeSection === ""));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={clsx(
                    "group relative transition-colors text-md xl:text-xl",
                    {
                      "text-yellow-300": isActive,
                      "text-gray-400": !isActive,
                    }
                  )}
                >
                  {link.label}
                  <span
                    className={clsx(
                      "underline-hover absolute -bottom-1 left-0 h-[2px] bg-yellow-300 transition-all duration-300",
                      {
                        "w-0 group-hover:w-full": !isActive,
                        "w-full": isActive,
                      }
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <SocialIcons />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer md:hidden text-amber-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
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
          {links.map((link) => {
            const isActive =
              activeSection === link.href ||
              (link.href === "/" &&
                (activeSection === "/" || activeSection === ""));

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx("group relative transition-colors", {
                  "text-yellow-300": isActive,
                  "text-gray-400": !isActive,
                })}
              >
                {link.label}
                <span
                  className={clsx(
                    "underline-hover absolute -bottom-1 left-0 h-[2px] bg-yellow-300 transition-all duration-300",
                    {
                      "w-0 group-hover:w-full": !isActive,
                      "w-full": isActive,
                    }
                  )}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
