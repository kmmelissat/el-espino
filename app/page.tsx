import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsCounter from "./components/StatsCounter";
import ProblemCards from "./components/ProblemCards";
import VocesSection from "./components/VocesSection";
import ImpactSection from "./components/ImpactSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import MovementSection from "./components/MovementSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsCounter />
      <ProblemCards />
      <ImpactSection />
            <VocesSection />
      <MovementSection />
      <CTASection />
      <Footer />
    </main>
  );
}
