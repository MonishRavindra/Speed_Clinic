import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClinicSection from "./components/ClinicSection";
import ConsultationSection from "./components/ConsultationSection";
import InternationalSection from "./components/InternationalSection";
import CarouselSection from "./components/CarouselSection";
import ReviewSection from "./components/ReviewSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen  font-sans">
      <HeroSection />
      <AboutSection />
      <ClinicSection />
      <CarouselSection />
      <ConsultationSection />
      <InternationalSection />
      <ReviewSection />
      <Footer /> 
    </div>
  );
}
