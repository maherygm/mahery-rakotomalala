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
    <div className="page stairs" style={{ backgroundColor }}>
      <motion.div {...anim(opacity)} className="transition-background">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-9xl z-[9999] text-white">
            The Best OF the Design and Development
          </p>
        </div>
      </motion.div>
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </div>
  );
}

const expand: Variants = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const opacity: Variants = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};
