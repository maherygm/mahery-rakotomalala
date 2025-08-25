import { DotPattern } from "../../../../components/common/DotPattern";
import { FlickeringGrid } from "../../../../components/common/FliqueringBackGround";
import { InteractiveHoverButton } from "../../../../components/common/InteractiveHoverButton";
import { SparklesText } from "../../../../components/common/SparleText";
import { cn } from "../../../../utils/cn";

const Hero = () => {
  return (
    <div className="relative  flex flex-col justify-center-safe  md:block  min-h-screen text-black overflow-hidden">
      {/* Background animé */}
      <FlickeringGrid
        className="absolute inset-0 z-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={800}
      />

      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Header responsive */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4 p-4 sm:p-6 md:p-8">
        <div className="text-xs sm:text-sm font-light">
          @ Code by Mahery Rakotomalala
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm text-black font-light max-w-lg leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      {/* Hero content */}
      <div className="relative h-[75vh]  z-10 px-4 sm:px-8 flex flex-col gap-6 justify-center items-center text-center">
        <SparklesText>
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Skill that Fuel My Passion
          </h1>
        </SparklesText>

        <InteractiveHoverButton className="mt-4 sm:mt-6 bg-black border-black text-white hover:border-black text-sm sm:text-base px-4 py-2">
          Explore more
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default Hero;
