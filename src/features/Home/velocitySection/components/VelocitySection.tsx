import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../../../components/common/ScrollVelocity";
import supernova1 from "../../../../assets/images/supernova_1.jpg";
import novaworld from "../../../../assets/images/novawolrd.png";
import superNovaWebCup from "../../../../assets/images/superNovaWebCup.png";
import webcup from "../../../../assets/images/webcup.jpg";
import { TextAnimate } from "../../../../components/common/BLurIn";
import { h1 } from "framer-motion/client";

const IMAGES_ROW_A = [supernova1, novaworld];

const IMAGES_ROW_B = [superNovaWebCup, webcup];

export function ScrollBasedVelocityImagesDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <TextAnimate
        animation="slideUp"
        by="word"
        as={h1}
        className="text-center text-5xl md:text-9xl font-bold py-10"
        delay={0.5}
        duration={0.8}
      >
        Lets do this
      </TextAnimate>
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Unsplash sample"
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Unsplash sample"
              width={240}
              height={160}
              loading="lazy"
              decoding="async"
              className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <TextAnimate
        animation="fadeIn"
        by="line"
        as="p"
        delay={0.4}
        duration={1}
        className="mt-8 text-center text-lg md:text-2xl text-gray-600 font-medium"
      >
        {` Discover my projects illustrated above, created with passion and
        creativity. \n Each image represents a unique journey in web development, showcasing \n my skills and dedication to crafting exceptional digital experiences.`}
      </TextAnimate>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
