import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsCounter from "./components/StatsCounter";
import ProblemCards from "./components/ProblemCards";
import InformateSection from "./components/InformateSection";
import VocesSection from "./components/VocesSection";

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

      <VocesSection />
            <InformateSection />
      <MovementSection />
      <CTASection />
      <Footer />
    </main>
  );
}
