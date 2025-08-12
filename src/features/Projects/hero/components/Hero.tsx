import { InteractiveHoverButton } from "../../../../components/common/InteractiveHoverButton";
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
        <div className="text-sm font-light">@ Code by Mahery Rakotomalala</div>
        <div className="text-right text-white text-sm font-light max-w-md leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      <div className="p-8  flex flex-col gap-6 justify-center items-center">
        <SparklesText>
          <h1 className="text-9xl w-fit text-center">
            Skill that Fuel My Passion
          </h1>
        </SparklesText>
        <InteractiveHoverButton>Explore more</InteractiveHoverButton>
      </div>
    </div>
  );
};

export default Hero;
