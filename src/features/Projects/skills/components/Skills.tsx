import { h1 } from "framer-motion/client";
import { TextAnimate } from "../../../../components/common/BLurIn";

const SkillsSection = () => {
  const skillCards: SkillCard[] = [
    {
      title: "Front-End Development",
      description:
        "Building modern, high-performance, and intuitive user interfaces using advanced frameworks.",
      icons: [
        { name: "React", color: "#61DAFB", symbol: "⚛" },
        { name: "Angular", color: "#DD0031", symbol: "A" },
        { name: "Next.js", color: "#000000", symbol: "N" }, // black instead of white
        { name: "Redux", color: "#764ABC", symbol: "R" },
        { name: "Zustand", color: "#764ABC", symbol: "Z" },
        { name: "RxJS", color: "#B7178C", symbol: "RX" },
        { name: "TailwindCSS", color: "#06B6D4", symbol: "T" },
        { name: "Sass", color: "#CF649A", symbol: "Sass" },
        { name: "Webpack", color: "#8DD6F9", symbol: "W" },
      ],
      size: "large",
      fadeDirection: "up",
    },
    {
      title: "Back-End Development",
      description:
        "Designing and implementing scalable APIs and back-end architectures.",
      icons: [
        { name: "Node.js", color: "#339933", symbol: "Node" },
        { name: "Express", color: "#000000", symbol: "EX" }, // black for visibility
        { name: "NestJS", color: "#E0234E", symbol: "N" },
        { name: "Spring Boot", color: "#6DB33F", symbol: "S" },
        { name: "Next.js SSR", color: "#000000", symbol: "SSR" },
      ],
      size: "large",
      fadeDirection: "down",
    },
    {
      title: "Database Management",
      description:
        "Designing and managing relational and NoSQL databases for secure and efficient data handling.",
      icons: [
        { name: "PostgreSQL", color: "#336791", symbol: "🐘" },
        { name: "MySQL", color: "#4479A1", symbol: "MySQL" },
        { name: "MSSQL", color: "#CC2927", symbol: "MS" },
        { name: "MongoDB", color: "#47A248", symbol: "🍃" },
        { name: "Firebase", color: "#FFCA28", symbol: "🔥" },
      ],
      size: "large",
      fadeDirection: "up",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Implementing CI/CD pipelines and deploying applications to modern cloud environments.",
      icons: [
        { name: "Docker", color: "#2496ED", symbol: "🐳" },
        { name: "Kubernetes", color: "#326CE5", symbol: "K8S" },
        { name: "GitHub Actions", color: "#2088FF", symbol: "GH" },
        { name: "GitLab CI", color: "#FC6D26", symbol: "GL" },
        { name: "Jenkins", color: "#D24939", symbol: "J" },
        { name: "Vercel", color: "#000000", symbol: "▲" },
        { name: "Render", color: "#46E3B7", symbol: "R" },
        { name: "Nginx", color: "#009639", symbol: "N" },
        { name: "Apache", color: "#D22128", symbol: "A" },
        { name: "Tomcat", color: "#F8DC75", symbol: "🐱" },
      ],
      size: "large",
      fadeDirection: "left",
    },
    {
      title: "Programming Languages",
      description:
        "Proficient in multiple languages for software development and problem-solving.",
      icons: [
        { name: "JavaScript", color: "#F7DF1E", symbol: "JS" },
        { name: "TypeScript", color: "#3178C6", symbol: "TS" },
        { name: "Java", color: "#007396", symbol: "☕" },
        { name: "Python", color: "#3776AB", symbol: "🐍" },
        { name: "C", color: "#A8B9CC", symbol: "C" },
        { name: "C++", color: "#00599C", symbol: "C++" },
        { name: "Go", color: "#00ADD8", symbol: "GO" },
      ],
      size: "large",
      fadeDirection: "right",
    },
    {
      title: "UI/UX & Design",
      description:
        "Designing intuitive, modern, and user-centered digital experiences.",
      icons: [
        { name: "Figma", color: "#F24E1E", symbol: "🎨" },
        { name: "Adobe XD", color: "#FF61F6", symbol: "XD" },
      ],
      size: "medium",
      fadeDirection: "down",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Ensuring code reliability with automated and manual testing.",
      icons: [
        { name: "Jest", color: "#C21325", symbol: "J" },
        { name: "Mocha", color: "#8D6748", symbol: "M" },
        { name: "Cypress", color: "#17202C", symbol: "CYP" },
      ],
      size: "medium",
      fadeDirection: "right",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Managing codebases and collaborating effectively with teams.",
      icons: [
        { name: "Git", color: "#F05032", symbol: "📁" },
        { name: "GitHub", color: "#181717", symbol: "🐙" },
        { name: "GitLab", color: "#FC6D26", symbol: "GL" },
        { name: "BitBucket", color: "#0052CC", symbol: "B" },
        { name: "Jira", color: "#0052CC", symbol: "J" },
      ],
      size: "medium",
      fadeDirection: "up",
    },
    {
      title: "Other Skills",
      description:
        "Strong foundation in operating systems, agile methodologies, and system design.",
      tags: [
        "Agile (Scrum, Kanban)",
        "OS: Linux (Arch, Kali, Ubuntu), Windows",
        "System Design",
        "Networking",
      ],
      size: "large",
      fadeDirection: "left",
    },
  ];

  interface SkillIcon {
    name: string;
    color: string;
    symbol: string;
  }

  interface SkillCard {
    title: string;
    description: string;
    icons?: SkillIcon[];
    tags?: string[];
    size: "large" | "medium";
    fadeDirection?: "up" | "down" | "left" | "right";
    fadeDelay?: number;
  }

  // ✅ Adapter le grid span en fonction du responsive
  const getGridClass = (size: SkillCard["size"]): string => {
    switch (size) {
      case "large":
        return "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const TechIcon = ({ icon }: { icon: SkillIcon }) => {
    const isEmoji =
      /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u.test(
        icon.symbol
      );

    return (
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: isEmoji ? "rgba(255,255,255,0.1)" : icon.color,
        }}
      >
        {isEmoji ? (
          <span className="text-xl sm:text-2xl">{icon.symbol}</span>
        ) : (
          <span
            className={`${
              icon.color === "#FFFFFF" || icon.color === "#F7DF1E"
                ? "text-gray-900"
                : "text-white"
            } font-bold`}
          >
            {icon.symbol}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="  min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <TextAnimate
          animation="fadeIn"
          by="word"
          as={h1}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-10"
          delay={0.2}
          duration={0.5}
        >
          My Skills
        </TextAnimate>
        {/* ✅ Grid responsive : 1 col sur mobile, 2 en sm, 4 en md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {skillCards.map((card, index) => (
            <div
              data-aos={`fade-${card.fadeDirection || "up"}`}
              data-aos-delay={`${card.fadeDelay || 50}`}
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="top-center"
              key={index}
              className={`${getGridClass(
                card.size
              )} rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 transition-all duration-300 group bg-white`}
            >
              {/* Icons */}
              {card.icons && (
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {card.icons.map((icon, iconIndex) => (
                    <TechIcon key={iconIndex} icon={icon} />
                  ))}
                </div>
              )}

              {/* Title */}
              <h3 className="text-black text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-800 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                {card.description}
              </p>

              {/* Tags */}
              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-600 hover:border-blue-500 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
