import { useState } from "react";
import { Music2Icon, StopCircle, SkipForward } from "lucide-react";

const SpotifyMusicPlayer = () => {
  const tracks = [
    "6tNQ70jh4OwmPGpYy6R2o9", // Benson Boone – Beautiful Things
    "2UgpPb9Y65fL7OoadjldnB", // Bruno Mars – Just the Way You Are
    "315aBOUD3xtj7sUMXtRgMV",
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  return (
    <div
      className="fixed right-4 top-4 lg:top-auto lg:bottom-4 transition-all duration-100 z-50
 "
    >
      {/* Icône musique si lecteur fermé */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <Music2Icon size={20} />
        </button>
      )}

      {/* Lecteur Spotify avec animation */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-white p-3 rounded-lg shadow-lg w-80 slideUp `}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-sm">🎵 Spotify Player</span>
          <div className="flex gap-2">
            <button
              onClick={handleNext}
              className="text-gray-500 hover:text-blue-500"
              title="Next song"
            >
              <SkipForward />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500"
              title="Close player"
            >
              <StopCircle />
            </button>
          </div>
        </div>

        <iframe
          key={tracks[currentTrack]} // force reload quand on change
          style={{ borderRadius: "12px" }}
          src={`https://open.spotify.com/embed/track/${tracks[currentTrack]}`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyMusicPlayer;
