import { SparklesText } from "../../../../components/common/SparleText";

const Hero = () => {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      {/* Background avec effet parallaxe subtil */}
      {/* <div
                       className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300"
                       style={{
                         transform: `translate(${mousePosition.x * 0.01}px, ${
                           mousePosition.y * 0.01
                         }px)`,
                       }}
                     /> */}

      {/* Header */}
      <header className="relative z-10 flex justify-between items-start p-8 ">
        <div className="text-sm  text-black font-light">
          @ Code by Mahery Rakotomalala
        </div>
        <div className="text-right text-black text-sm font-light max-w-md leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      <div className="p-8  flex flex-col gap-6 justify-center items-center">
        <SparklesText>
          <h1 className="text-7xl md:text-9xl text-black w-fit text-center font-bold">
            Experiences That Ignite My Creativity and Drive
          </h1>
        </SparklesText>
        <HeroVideoDialogDemo />
      </div>
    </div>
  );
};

export default Hero;

import { HeroVideoDialog } from "../../../../components/common/HeroHideo";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/ZE9iFZFez4k"
        thumbnailSrc="/codeScreen.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
