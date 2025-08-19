import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PathFullPage() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    // longueur totale du path
    const length = pathRef.current.getTotalLength();

    // préparation du trait invisible
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length * 100,
    });

    // animation liée AU SCROLL GLOBAL
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom", // correspond à toute la hauteur de la page
        scrub: true, // animation fluide liée au scroll
      },
    });
  }, []);

  return (
    <div className="hidden  absolute top-0 right-1/6 h-auto z-40 w-fit md:flex justify-center">
      <svg
        width="700"
        height="7609"
        viewBox="0 0 700 5609"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[350px] h-auto"
      >
        <path
          ref={pathRef}
          d="M359 0.5C359 0.5 359 120.262 359 197L486 282V437.5L359 372.5L233 437.5V627L359 577.5V1049.5L48 1390V1896L154 2056V2358L359 2088V3036.5L698 3323.5L359 3682L1.5 4036L359 4441L698 4036H416V4619H359V5609"
          stroke="black"
          strokeWidth="10"
        />
      </svg>
    </div>
  );
}
