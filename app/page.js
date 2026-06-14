import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import SolarSystems from "@/components/home/SolarSystems";
import Brands from "@/components/home/Brands";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <SolarSystems />
      <Brands />
      <Projects />
      <Testimonials />
      <CTASection />
    </main>
  );
}