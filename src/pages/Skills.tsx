import React from "react";
import Hero from "../features/Skills/hero/components/Hero";
import { ArcTimelineDemo } from "../components/layout/arcNavBar";
import ContactSection from "../features/Home/footer/components/Explorer";

const Skills: React.FC = () => {
  return (
    <div className="bg-zinc-100">
      <Hero />
      <ArcTimelineDemo />
      <ContactSection />
    </div>
  );
};

export default Skills;
