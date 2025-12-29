import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FacultyCarousel from "@/components/FacultyCarousel"
import Branches from "@/components/Branches"
import About from "@/components/About"
import Contact from "@/components/Contact"
import SocialBar from "@/components/SocialBar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FacultyCarousel />
      <Branches />
      <About />
      <Contact />
      <SocialBar />
      <Footer />
    </>
  )
}

