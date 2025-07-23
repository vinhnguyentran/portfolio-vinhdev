import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* theme toggle - chuyển đổi chủ đề */}
      <ThemeToggle />
      {/* Background Effects - hiệu ứng nền */}
      <StarBackground />
      {/* Navbar - Thanh công cụ */}
      <Navbar />
      {/* Main Content - Nội dung chính */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
};
