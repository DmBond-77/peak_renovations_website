"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";

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
            spaces by removing walls, typically between the kitchen and living
            room, ideal for families and entertaining.
          </li>
          <li>
            <strong>Contemporary:</strong> Combines high functionality and
            streamlined surfaces with traditional elements for a sleek yet
            livable feel.
          </li>
          <li>
            <strong>Traditional:</strong> Features warm and classic elements,
            bringing the outdoors in with patterns like fruits, flowers, and
            butterflies.
          </li>
          <li>
            <strong>French Country:</strong> Evokes a warm, comfortable, and
            beautiful atmosphere, reminiscent of a traditional and simple life.
          </li>
          <li>
            <strong>Vintage:</strong> Offers a classic, playful, throwback look
            for those who appreciate nostalgic designs.
          </li>
          <li>
            <strong>Portable Kitchen Islands:</strong> Adds flexibility with
            movable islands, allowing you to adjust your space as needed.
          </li>
          <li>
            <strong>Wall Treatments:</strong> Enhance character with wood slats
            or designer wallpaper, adding unique textures and patterns.
          </li>
          <li>
            <strong>Fireplace Updates:</strong> Revamp or add fireplaces using
            tile, stacked stone, or concrete to add a cozy feel to your kitchen.
          </li>
          <li>
            <strong>Sturdy Countertops:</strong> Choose from granite, marble,
            butcher block, quartz, concrete, or stainless steel to reflect your
            lifestyle.
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
            <strong>Pet-Friendly Bathrooms:</strong> Incorporate pet washing
            zones and built-in kitty litter boxes for your furry friends.
          </li>
          <li>
            <strong>Mediterranean-Inspired Design:</strong> Bring a touch of the
            Mediterranean with warm colors and elegant fixtures.
          </li>
          <li>
            <strong>Smart Storage:</strong> Utilize vertical space with
            cabinetry that extends up the wall for practical storage solutions.
          </li>
          <li>
            <strong>Classic Whites:</strong> Timeless white subway tiles paired
            with various styles for a clean and versatile look.
          </li>
          <li>
            <strong>Ease of Use:</strong> Features like no-threshold showers and
            comfort-height fixtures for accessibility and convenience.
          </li>
          <li>
            <strong>Media and Music:</strong> Integrate electronics such as
            wireless speakers and Bluetooth devices into your bathroom for
            entertainment and relaxation.
          </li>
          <li>
            <strong>In-Floor Heat and Towel Warmers:</strong> Add luxury and
            comfort with heated floors and towel warmers.
          </li>
        </ul>
      </>
    ),
  },
  // Additional sections can be added here
];

export default function ServicesTabsAccordion() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-4" id="services">
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
                  "pb-2 text-gray-700 font-bold border-b-2 cursor-pointer text-xl",
                  activeTab === index
                    ? "border-gray-800 text-gray-900"
                    : "border-transparent hover:text-black"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="mt-4 text-gray-700 text-md xl:text-xl">
            {sections[activeTab].content}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col gap-4">
          {sections.map((section, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border rounded">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 text-gray-800 font-medium"
                >
                  {section.title}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 py-3 text-gray-700 text-sm">
                    {section.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
