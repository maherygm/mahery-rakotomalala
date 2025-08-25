import { useState, useEffect } from "react";

import { BoxReveal } from "../../../../components/common/BoxReveal";
import { InteractiveHoverButton } from "../../../../components/common/InteractiveHoverButton";

export default function Hero() {
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative flex flex-col justify-evenly md:block min-h-screen bannerImage overflow-hidden">
      {/* Header */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-4 p-6 md:p-8 text-gray-600">
        <div className="text-xs sm:text-sm font-light">
          @ Code by Mahery Rakotomalala
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm font-light max-w-lg leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      {/* Hero content */}
      <div className="p-6 sm:p-8">
        <div className="w-full max-w-2xl items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Mahery Rakotomalala <span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              Développeur Front-End & Designer UI/UX Full Stack
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-4 text-sm sm:text-base leading-relaxed">
              <p>
                Passionate about creating modern, high-performance, and
                accessible web experiences.
                <br className="hidden sm:block" />
                Specialized in React, Typescript, Tailwind CSS, and intuitive
                interface design.
                <br className="hidden sm:block" />I support your projects from
                prototyping to production, with a strong attention to detail and
                user experience.
              </p>
            </div>
          </BoxReveal>

          <InteractiveHoverButton className="mt-6 bg-black border-black text-white hover:border-black text-sm sm:text-base px-4 py-2">
            <a
              href="/jean_mahery.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV
            </a>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
