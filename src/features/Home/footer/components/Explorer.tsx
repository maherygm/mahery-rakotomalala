import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="w-full">
      {/* Section Contact Blanche */}
      <div className="bg-white px-6 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="center-center"
            className="mb-12"
          >
            <p className="text-gray-600 text-sm mb-4 font-medium">
              That's all for now.
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
              Got a project in mind?
              <br />
              Let's talk
            </h2>
          </div>

          {/* Ligne de séparation et bouton */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="flex items-center justify-between mb-16"
          >
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-8">
              <button className="w-32 h-32 md:w-40 md:h-40 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get in touch
              </button>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div>
            {/* Player de streaming */}
            <div className="mb-12">
              <Player />
            </div>
          </div>

          {/* Informations de contact */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <p className="text-gray-600 text-sm mb-2 font-medium">Email:</p>
              <a
                href="mailto:maheryrak1234@gmail.com"
                className="text-black text-xl md:text-2xl font-normal hover:text-blue-600 transition-colors duration-300"
              >
                maheryrak1234@gmail.com
              </a>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <p className="text-gray-600 text-sm mb-2 font-medium">Phone:</p>
              <a
                href="tel:+918248669086"
                className="text-black text-xl md:text-2xl font-normal hover:text-blue-600 transition-colors duration-300"
              >
                +261347629334
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section Footer Noire */}
      <div className="bg-black px-6 py-16 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="center-center"
            className="flex items-center justify-between mb-8"
          >
            <p className="text-white text-lg md:text-xl font-light">
              your friendly chaos creator
            </p>
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 group">
              <ArrowUpRight className="w-6 h-6 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Nom géant */}
          <div data-aos="fade-left" className="relative">
            <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-white leading-none tracking-tight">
              Ashhhhhhhhhh
            </h1>
            {/* Effet de débordement */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-30"></div>
          </div>
        </div>

        {/* Motif de fond subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Player() {
  return (
    <div>
      <h1>Streaming Firebase HLS</h1>
      <HlsPlayer
        src="https://livestreamingvideo-71979.web.app/videos/publicite/index.m3u8
"
      />
    </div>
  );
}

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type HlsPlayerProps = {
  src: string;
};

const HlsPlayer: React.FC<HlsPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);

      // Clean-up à la destruction du composant
      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
    }
  }, [src]);

  return <video ref={videoRef} controls style={{ width: "100%" }} />;
};
