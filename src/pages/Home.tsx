import React from "react";
import Hero from "../features/Home/hero/components/Hero";
import Projet from "../features/Home/project/components/Projet";
import ContactSection from "../features/Home/footer/components/Explorer";
import { ScrollBasedVelocityImagesDemo } from "../features/Home/velocitySection/components/VelocitySection";
// import PathFullPage from "../components/layout/scrollingDessin";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Projet />
      <ScrollBasedVelocityImagesDemo />
      <ContactSection />
      {/* <PathFullPage /> */}
    </>
  );
};

export default Home;
