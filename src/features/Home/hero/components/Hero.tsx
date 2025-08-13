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
    <div className="relative min-h-screen bannerImage overflow-hidden">
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
      <header className="relative z-10 flex justify-between items-start p-8 text-gray-600">
        <div className="text-sm font-light">@ Code by Mahery Rakotomalala</div>
        <div className="text-right text-sm font-light max-w-md leading-relaxed">
          Passionate Creative Designer and Developer, dedicated to
          <br />
          crafting innovative solutions and exceptional digital experiences
          <br />
          through modern technologies
        </div>
      </header>

      <div className="p-8">
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[4rem] font-semibold">
              Mahery Rakotomalala <span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Développeur Front-End & Designer UI/UX Full Stack
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                Passionate about creating modern, high-performance, and
                accessible web experiences.
                <br />
                Specialized in React, Typescript, Tailwind CSS, and intuitive
                interface design.
                <br />I support your projects from prototyping to production,
                with a strong attention to detail and user experience.
              </p>
            </div>
          </BoxReveal>

          <InteractiveHoverButton className="mt-[1.6rem] bg-black border-black text-white hover:border-black">
            <a href="/jean_mahery.pdf" target="_blank">
              Download my CV
            </a>
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
