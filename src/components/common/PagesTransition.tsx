import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function PageTransition({
  children,
  backgroundColor = "var(--background-color)",
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  const anim = (variants: Variants, custom: number | null = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div
      className="page stairs relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* background fade */}
      <motion.div
        {...anim(opacity)}
        className="transition-background absolute inset-0"
      >
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-5xl md:text-9xl z-50 text-white">
            The Best OF the Design and Development
          </p>
        </div>
      </motion.div>

      {/* Mobile: horizontal (left→right) */}
      <div className="transition-container md:hidden flex absolute inset-0">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim(expandHorizontal, nbOfColumns - i)}
            className="bg-black flex-1"
          />
        ))}
      </div>

      {/* Desktop: vertical (top→bottom) */}
      <div className="transition-container hidden md:flex flex-col absolute inset-0">
        {[...Array(nbOfColumns)].map((_, i) => (
          <motion.div
            key={i}
            {...anim(expandVertical, nbOfColumns - i)}
            className="bg-black flex-1"
          />
        ))}
      </div>

      <div className="relative z-[10]">{children}</div>
    </div>
  );
}

// Desktop (vertical top→bottom)
const expandVertical: Variants = {
  initial: { scaleY: 1 },
  enter: (i: number) => ({
    scaleY: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: number) => ({
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: 0.08 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Mobile (horizontal left→right)
const expandHorizontal: Variants = {
  initial: { scaleX: 1 },
  enter: (i: number) => ({
    scaleX: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.5,
      delay: 0.08 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const opacity: Variants = {
  initial: { opacity: 0.5 },
  enter: { opacity: 0 },
  exit: { opacity: 0.5 },
};
