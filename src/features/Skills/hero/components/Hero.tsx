import { SparklesText } from "../../../../components/common/SparleText";
import { HeroVideoDialog } from "../../../../components/common/HeroHideo";

const Hero = () => {
  return (
    <div className="relative  flex flex-col justify-evenly md:block min-h-screen text-white overflow-hidden px-4 sm:px-6 md:px-8">
      {/* Header responsive */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4 py-4 sm:py-6 md:py-8">
        <div className="text-xs sm:text-sm text-black font-light">
          @ Code by Mahery Rakotomalala
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm text-black font-light max-w-md leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      {/* Hero content */}
      <div className="flex flex-col gap-6 justify-center items-center text-center py-8">
        <SparklesText>
          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black w-full sm:w-auto">
            Experiences That Ignite My Creativity and Drive
          </h1>
        </SparklesText>

        {/* Video */}
        <div className="w-full sm:w-3/4 md:w-5/6  mt-6">
          <HeroVideoDialogDemo />
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function HeroVideoDialogDemo() {
  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
      <HeroVideoDialog
        className="block dark:hidden w-full h-full"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/ZE9iFZFez4k"
        thumbnailSrc="/codeScreen.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
