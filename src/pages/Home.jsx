import Hero from "@/components/Hero";
import FacultyCarousel from "@/components/FacultyCarousel";
import GallerySection from "@/components/GallerySection";
import Branches from "@/components/Branches";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SocialBar from "@/components/SocialBar";

export default function Home() {
  return (
    <>
      <Hero />
      <FacultyCarousel />
      <Branches />
      <GallerySection />
      <About />
      <Contact />
      <SocialBar />
    </>
  );
}
