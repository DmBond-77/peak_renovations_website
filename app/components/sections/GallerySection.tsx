"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg",
  "/images/slider6.jpg",
  "/images/slider7.jpg",
  "/images/slider8.jpg",
  "/images/slider9.jpg",
  "/images/slider10.jpg",
  "/images/slider11.jpg",
  "/images/slider12.jpg",
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Навигация вперед
  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  // Навигация назад
  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gray-100 py-12 px-4" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Work
        </h2>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="relative w-full aspect-[4/3] rounded overflow-hidden shadow cursor-pointer hover:scale-105 transition"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-[90vw] max-h-[80vh] w-full p-4 flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-2 text-white hover:text-red-400 z-10 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10 cursor-pointer" />
            </button>

            {/* Image container */}
            <div className="relative max-w-full max-h-[80vh] w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={images[selectedIndex]}
                alt={`Preview image ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10 cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
