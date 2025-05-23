"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = Array.from(
  { length: 12 },
  (_, i) => `/images/slider${i + 1}.jpg`
);

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setDirection(1);
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setDirection(-1);
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const interval = setInterval(() => {
      setDirection(1);
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <section className="bg-gray-100 py-12 px-4" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Work
        </h2>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(1);
                setSelectedIndex(i);
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full aspect-[4/3] rounded overflow-hidden shadow cursor-pointer group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              aria-label={`Open image ${i + 1} in gallery`}
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {hoveredIndex === i && (
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                  initial={{ x: -200 }}
                  animate={{ x: 300 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedIndex(null)}
              aria-hidden="true"
            />

            <motion.div
              className="relative max-w-[90vw] max-h-[80vh] w-full p-4 flex items-center justify-center z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-2 right-2 text-white hover:text-red-400 z-20 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-gray-300 z-20 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedIndex}
                  initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative max-w-full max-h-[80vh] w-full aspect-[4/3] rounded-lg overflow-hidden"
                >
                  <Image
                    src={images[selectedIndex]}
                    alt={`Preview image ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority // показываем сразу
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300 z-20 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
