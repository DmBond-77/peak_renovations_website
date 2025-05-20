"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Peak Renovations turned our outdated kitchen into a dream space. The craftsmanship was outstanding and the team was super respectful of our home.",
    stars: 5,
  },
  {
    name: "James W.",
    text: "We had a full bathroom remodel done, and it exceeded all expectations. Reliable, communicative, and detail-oriented. Highly recommend!",
    stars: 5,
  },
  {
    name: "Lena R.",
    text: "From the initial quote to the final walkthrough, the process was smooth and professional. Our home feels brand new.",
    stars: 5,
  },
  {
    name: "Derek T.",
    text: "Great experience from start to finish. They offered creative solutions and kept everything on schedule. Will be hiring again!",
    stars: 5,
  },
  {
    name: "Monica H.",
    text: "The quality of work is top-notch. Our new living room is both modern and cozy. Super impressed with their attention to detail.",
    stars: 5,
  },
  {
    name: "Ryan K.",
    text: "Responsive team, transparent pricing, and flawless execution. Definitely one of the best contractors I’ve worked with.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10" id="testimonials">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg">
          Real experiences from homeowners like you
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 text-left flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="flex gap-1 text-yellow-500 mb-2">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{review.text}"</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-900">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
