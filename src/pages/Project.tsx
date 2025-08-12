import React from "react";
import Hero from "../features/Projects/hero/components/Hero";
import SkillsSection from "../features/Projects/skills/components/Skills";
import ContactSection from "../features/Projects/footer/components/Explorer";
import { MarqueeDemo } from "../features/Projects/marqee/components/MarqueeSection";

const Project: React.FC = () => {
  return (
    <div className="bg-black min-h-screen p-4 md:p-8">
      <Hero />
      <MarqueeDemo />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Project;
