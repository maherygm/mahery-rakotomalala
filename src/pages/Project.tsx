import React from "react";
import Hero from "../features/Projects/hero/components/Hero";
import SkillsSection from "../features/Projects/skills/components/Skills";

import { MarqueeDemo } from "../features/Projects/marqee/components/MarqueeSection";
import ContactSection from "../features/Home/footer/components/Explorer";

const Project: React.FC = () => {
  return (
    <div className="bg-zinc-100 min-h-screen p-4 md:p-8">
      <Hero />
      <MarqueeDemo />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Project;
