import {
  ArcTimeline,
  type ArcTimelineItem,
} from "../../../components/common/ArcTimelineItems";
import { Rocket, Globe, Star, ActivityIcon } from "lucide-react";

export function ArcTimelineDemo() {
  return (
    <div className="py-6">
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
    </div>
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2021 - 2022",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Développeur Front-End (Disturb Coder Team) — Conception et développement d'interfaces modernes et intuitives.",
      },
      {
        icon: <ActivityIcon size={20} />,
        content:
          "Refonte UX/UI pour améliorer l’ergonomie et la performance des applications.",
      },
    ],
  },
  {
    time: "2023",
    steps: [
      {
        icon: <Star size={20} />,
        content:
          "Développeur Desktop (Inspection de Travail Fianarantsoa) — Création d'interfaces Java Swing et connexion BDD avec Hibernate/JPA.",
      },
      {
        icon: <Globe size={20} />,
        content:
          "Hackathon Semaine de la Francophonie — Développement d'une plateforme e-learning accessible et ergonomique.",
      },
    ],
  },
  {
    time: "2023 - 2024",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Développeur Front-End / UI UX Designer (SuperNova Team) — Conception et optimisation d’interfaces pour diverses applications.",
      },
      {
        icon: <ActivityIcon size={20} />,
        content:
          "Participation à des hackathons, intégration de nouvelles technologies front-end et UI/UX.",
      },
    ],
  },
  {
    time: "Février 2024",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Full Stack / UI UX Designer (Ny Tananako) — Application de cartographie interactive avec gestion back-end et optimisation des requêtes.",
      },
    ],
  },
  {
    time: "Mars 2024",
    steps: [
      {
        icon: <Star size={20} />,
        content:
          "Full Stack / UI UX Designer (Royal Espace) — Application de gestion de location de salles avec optimisation des réservations et paiements.",
      },
    ],
  },
  {
    time: "2024 - 2025",
    steps: [
      {
        icon: <Globe size={20} />,
        content:
          "Développeur Front-End (Acces Banque Madagascar) — Développement et intégration d’API pour applications comptables et financières internes.",
      },
    ],
  },
  {
    time: "Juillet 2024 - Actuel",
    steps: [
      {
        icon: <Rocket size={20} />,
        content:
          "Optimisation des interfaces et alignement des systèmes avec la réglementation locale et internationale.",
      },
    ],
  },
];
