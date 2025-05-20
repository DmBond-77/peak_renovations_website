import ContactSection from "./components/sections/ContactSection";
import HeroSlider from "./components/sections/Hero";
import About from "./components/sections/About";
import GallerySection from "./components/sections/GallerySection";
import WhyRenovate from "./components/sections/WhyRenovate";
import InspirationQuote from "./components/sections/InspirationQuote";
import Testimonials from "./components/sections/Testimonials";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <GallerySection />
      <InspirationQuote />
      <WhyRenovate />
      <Testimonials />
      <About />
      <ContactSection />
    </>
  );
}
