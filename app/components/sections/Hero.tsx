"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/banner1.jpg",
    title: "Portland’s Top Quality Renovation Specialists",
    subtitle: "We bring experience, precision, and integrity to every project.",
  },
  {
    image: "/images/banner2.jpg",
    title: "Renovate for the Future",
    subtitle: "Modernize your space and increase your home’s value.",
  },
  {
    image: "/images/banner3.jpg",
    title: "Transform Your Home with Confidence",
    subtitle: "From concept to completion — we’ve got you covered.",
  },
];

export default function HeroSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    detailsChanged: (s) => setCurrentSlide(s.track.details.rel),
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider relative h-[80vh] overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="keen-slider__slide relative bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <AnimatePresence>
            {currentSlide === i && (
              <motion.div
                key={i}
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="mb-6 text-lg max-w-xl px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="#contact"
                    className="bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
                  >
                    Request a Quote
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Prev/Next buttons */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 p-2 rounded-full hover:bg-white shadow-md hidden sm:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-900 p-2 rounded-full hover:bg-white shadow-md hidden sm:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
