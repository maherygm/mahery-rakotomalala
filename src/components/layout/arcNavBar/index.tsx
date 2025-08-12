import {
  ArcTimeline,
  type ArcTimelineItem,
} from "../../../components/common/ArcTimelineItems";
import {
  Rocket,
  Lock,
  Globe,
  Cog,
  Zap,
  Star,
  Wand2,
  ActivityIcon,
} from "lucide-react";

export function ArcTimelineDemo() {
  return (
    <ArcTimeline
      // className={cn(
      //   "[--step-line-active-color:#888888] dark:[--step-line-active-color:#9780ff]",
      //   "[--step-line-inactive-color:#b1b1b1] dark:[--step-line-inactive-color:#737373]",
      //   "[--placeholder-line-color:#a1a1a1] dark:[--placeholder-line-color:#737373]",
      //   "[--icon-active-color:#555555] dark:[--icon-active-color:#d4d4d4]",
      //   "[--icon-inactive-color:#a3a3a3] dark:[--icon-inactive-color:#a3a3a3]",
      //   "[--time-active-color:#555555] dark:[--time-active-color:#d4d4d4]",
      //   "[--time-inactive-color:#a3a3a3] dark:[--time-inactive-color:#a3a3a3]",
      //   "[--description-color:#555555] dark:[--description-color:#d4d4d4]"
      // )}
      data={TIMELINE}
      defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2022",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Founded Visionary Tech, a cutting-edge AI development company.",
      },
      {
        icon: <ActivityIcon size={20} />,
        content:
          "Launched first AI-powered mobile app for personalized recommendations.",
      },
    ],
  },
  {
    time: "2023",
    steps: [
      {
        icon: <Lock size={20} />,
        content: "Raised $3M seed round at a $20M valuation.",
      },
      {
        icon: <Globe size={20} />,
        content:
          "Expanded to global markets with localized app versions in 5 countries.",
      },
      {
        icon: <Cog size={20} />,
        content:
          "Implemented enhanced machine learning algorithms for data prediction.",
      },
    ],
  },
  {
    time: "2024",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Introduced AI-powered virtual assistant for customer service.",
      },
      {
        icon: <Globe size={20} />,
        content:
          "Partnered with several tech giants to enhance app capabilities.",
      },
      {
        icon: <Wand2 size={20} />,
        content:
          "Launched AR-based features for more immersive user experiences.",
      },
    ],
  },
  {
    time: "2025 Q1",
    steps: [
      {
        icon: <Star size={20} />,
        content:
          "Rolled out AI-driven marketplace for personalized product discovery.",
      },
      {
        icon: <Zap size={20} />,
        content: "Introduced blockchain integration for secure transactions.",
      },
      {
        icon: <Rocket size={20} />,
        content:
          "Showcased at CES with revolutionary AI-powered consumer products.",
      },
    ],
  },
  {
    time: "2025 Q2",
    steps: [
      {
        icon: <Cog size={20} />,
        content: "Rebranded company with new logo and visual identity.",
      },
      {
        icon: <Star size={20} />,
        content:
          "Launched AI-driven content creation tool for marketing teams.",
      },
      {
        icon: <ActivityIcon size={20} />,
        content:
          "Acquired a competitor in the AI space to strengthen market position.",
      },
    ],
  },
  {
    time: "2025 Q3",
    steps: [
      {
        icon: <ActivityIcon size={20} />,
        content: "Launched self-driving AI platform for industrial automation.",
      },
      {
        icon: <Wand2 size={20} />,
        content: "Added virtual reality integration to the product suite.",
      },
    ],
  },
  {
    time: "2025 Q4",
    steps: [
      {
        icon: <Star size={20} />,
        content:
          "Introduced AI-driven analytics dashboard for enterprise clients.",
      },
      {
        icon: <Zap size={20} />,
        content:
          "Launched international expansion into Asian and European markets.",
      },
      {
        icon: <Rocket size={20} />,
        content: "Hosted first global conference showcasing AI innovations.",
      },
    ],
  },
  {
    time: "2026 Q1",
    steps: [
      {
        icon: <Cog size={20} />,
        content:
          "Released API for developers to integrate AI into their applications.",
      },
      {
        icon: <Star size={20} />,
        content:
          "Launched new AI-powered voice assistant with multi-language support.",
      },
      {
        icon: <Globe size={20} />,
        content:
          "Partnered with government agencies for AI-driven policy making.",
      },
    ],
  },
  {
    time: "2026 Q2",
    steps: [
      {
        icon: <Cog size={20} />,
        content: "Unveiled new AI-powered robotics platform for manufacturing.",
      },
      {
        icon: <Wand2 size={20} />,
        content:
          "Introduced machine learning models for sustainable energy solutions.",
      },
    ],
  },
];
