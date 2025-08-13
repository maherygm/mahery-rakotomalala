import React from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/layout/navbar";
import AnimatedCursor from "react-animated-cursor";
import SpotifyMusicPlayer from "../components/layout/spotifyMusicSplayer";

const HomePage: React.FC = () => {
  return (
    <main>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
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
      />
      <NavigationBar />
      <SpotifyMusicPlayer />
      {/* <ArcTimelineDemo /> */}
      <Outlet />
    </main>
  );
};

export default HomePage;
