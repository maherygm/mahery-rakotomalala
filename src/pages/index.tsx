import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/layout/navbar";
import AnimatedCursor from "react-animated-cursor";
import SpotifyMusicPlayer from "../components/layout/spotifyMusicSplayer";
import { ArrowUp } from "lucide-react";
import { BorderBeam } from "../components/common/BorderBean";

const HomePage: React.FC = () => {
  return (
    <main>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            innerSize: 12,
            outerSize: 12,
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5,
          },
        ]}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
      <NavigationBar />
      <div
        className="fixed right-4 top-4 lg:top-auto flex  flex-col
         justify-center items-end gap-2 lg:bottom-4 transition-all duration-100 z-50
 "
      >
        <ScrollToTop />
        <SpotifyMusicPlayer />
      </div>

      {/* <ArcTimelineDemo /> */}
      <Outlet />
    </main>
  );
};
export default HomePage;

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 300); // apparait après 300px
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className=" p-3 md:p-2 z-50 w-12 h-12 flex relative group hover:w-36   overflow-hidden items-center  justify-center  rounded-full bg-zinc-200 text-zinc-800 shadow-lg hover:bg-zinc-800 hover:text-amber-50  transition-all duration-200 ease-in-out"
          aria-label="Scroll to top"
        >
          <div className="flex items-center justify-center gap-2">
            <ArrowUp size={24} />{" "}
            <p className="hidden text-nowrap group-hover:block transition-all duration-200 ">
              Scroll to top
            </p>
          </div>

          <BorderBeam duration={8} size={100} />
        </button>
      )}
    </>
  );
};
