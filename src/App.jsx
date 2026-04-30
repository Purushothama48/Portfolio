import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosSection from "./components/LogosSection";
import SpreadSection from "./components/spreadSection";
import StatsSection from "./components/statsSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import ServicesSection from "./components/ServiceSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogosSection />
      <SpreadSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <ServicesSection />
      <FooterSection />
    </>
  );
}

export default App;
