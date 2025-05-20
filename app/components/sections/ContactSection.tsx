"use client";

import { Mail, Phone, Clock, MapPin } from "lucide-react";
import SocialIcons from "../shared/SocialIcons";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us to Request a FREE Estimate
        </h2>

        <h3 className="text-xl text-center mb-12 text-gray-700">
          Don’t hesitate to reach out with the contact information below, or
          send a message using the form.
        </h3>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700 text-base">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="font-semibold">Address</p>
                <p>Lake Oswego, OR 97035</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:5031234567" className="underline">
                  503-123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:info@peakrenovationspdx.com"
                  className="underline"
                >
                  info@peakrenovationspdx.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-gray-600" />
              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
                <p>Sat | Sun: Closed</p>
              </div>
            </div>

            <SocialIcons />
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 text-sm mb-4">
              Would you like to send us a message:
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
