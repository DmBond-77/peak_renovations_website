import ContactSection from "./components/sections/ContactSection";
import HeroSlider from "./components/sections/Hero";
import About from "./components/sections/About";
import GallerySection from "./components/sections/GallerySection";
export default function Home() {
  return (
    <>
      <HeroSlider />
      <GallerySection />
      <About />
      <ContactSection />
    </>
  );
}
