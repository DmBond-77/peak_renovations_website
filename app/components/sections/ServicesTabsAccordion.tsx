"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Kitchen Renovations",
    content: (
      <>
        <p className="mb-4 text-xl font-bold">
          We offer a variety of kitchen renovation styles to suit your
          preferences:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Open Concept Kitchens:</strong> Create communal living
            spaces by removing walls.
          </li>
          <li>
            <strong>Contemporary:</strong> Sleek and highly functional with
            traditional elements.
          </li>
          <li>
            <strong>Traditional:</strong> Warm, classic, nature-inspired decor.
          </li>
          <li>
            <strong>French Country:</strong> Cozy and rustic with traditional
            touches.
          </li>
          <li>
            <strong>Vintage:</strong> Playful throwback styles with charm.
          </li>
          <li>
            <strong>Portable Kitchen Islands:</strong> Flexible island layout
            options.
          </li>
          <li>
            <strong>Wall Treatments:</strong> Add texture with slats or
            wallpaper.
          </li>
          <li>
            <strong>Fireplace Updates:</strong> Add warmth with tile or stone
            accents.
          </li>
          <li>
            <strong>Sturdy Countertops:</strong> Choose from quartz, granite,
            butcher block, and more.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Bathroom Renovations",
    content: (
      <>
        <p className="mb-4 font-bold">
          Our bathroom renovation services include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Pet-Friendly Bathrooms:</strong> Add pet washing zones or
            built-in litter boxes.
          </li>
          <li>
            <strong>Mediterranean-Inspired Design:</strong> Warm colors and
            elegant fixtures.
          </li>
          <li>
            <strong>Smart Storage:</strong> Tall cabinetry for extra vertical
            storage.
          </li>
          <li>
            <strong>Classic Whites:</strong> Clean and timeless subway tile
            layouts.
          </li>
          <li>
            <strong>Ease of Use:</strong> No-threshold showers and
            comfort-height fixtures.
          </li>
          <li>
            <strong>Media and Music:</strong> Bluetooth speakers and media
            built-ins.
          </li>
          <li>
            <strong>In-Floor Heat and Towel Warmers:</strong> Add spa-level
            comfort and luxury.
          </li>
        </ul>
      </>
    ),
  },
];

export default function ServicesTabsAccordion() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      className="bg-white py-16 px-4"
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-col gap-6">
          <div className="flex gap-4 overflow-x-auto border-b">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  "pb-2 text-gray-700 font-bold border-b-2 cursor-pointer text-xl whitespace-nowrap",
                  activeTab === index
                    ? "border-gray-800 text-gray-900"
                    : "border-transparent hover:text-black"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-700 text-md xl:text-xl relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative inset-0"
              >
                {sections[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-4 mt-4">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border rounded overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 text-gray-800 font-medium cursor-pointer"
                >
                  {section.title}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-4 py-3 text-gray-700 text-sm overflow-hidden"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
