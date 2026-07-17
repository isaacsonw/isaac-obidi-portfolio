import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Principles from "@/components/Principles";
import HowIWorkWithAI from "@/components/HowIWorkWithAI";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Marquee />
        <Work />
        <Principles />
        <HowIWorkWithAI />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
