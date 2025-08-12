import React from "react";
import Hero from "../features/Home/hero/components/Hero";
import Projet from "../features/Home/project/components/Projet";
import ContactSection from "../features/Home/footer/components/Explorer";
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projet />
      <ContactSection />
    </>
  );
};

export default Home;
