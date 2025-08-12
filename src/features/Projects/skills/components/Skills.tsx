const SkillsSection = () => {
  const skillCards: SkillCard[] = [
    {
      title: "Front-End Development",
      description:
        "Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.",
      icons: [
        { name: "HTML5", color: "#E34F26", symbol: "HTML5" },
        { name: "JavaScript", color: "#F7DF1E", symbol: "JS" },
        { name: "TypeScript", color: "#3178C6", symbol: "TS" },
        { name: "Next.js", color: "#FFFFFF", symbol: "N" },
        { name: "Nuxt.js", color: "#00DC82", symbol: "NUXT" },
        { name: "React", color: "#61DAFB", symbol: "⚛" },
      ],
      size: "large",
    },
    {
      title: "Back-End Development",
      description:
        "Developing robust server-side logic and APIs to power dynamic and scalable web applications.",
      icons: [
        { name: "Node.js", color: "#339933", symbol: "node.js" },
        { name: "Express", color: "#FFFFFF", symbol: "express" },
        { name: "Django", color: "#092E20", symbol: "django" },
        { name: "Ruby on Rails", color: "#CC0000", symbol: "RAILS" },
      ],
      size: "large",
    },
    {
      title: "Styling & Design",
      description:
        "Crafting visually appealing and responsive designs with advanced styling tools and frameworks.",
      icons: [
        { name: "CSS3", color: "#1572B6", symbol: "CSS3" },
        { name: "Sass", color: "#CF649A", symbol: "Sass" },
        { name: "Bootstrap", color: "#7952B3", symbol: "B" },
      ],
      size: "medium",
    },
    {
      title: "Web Animations",
      description:
        "Creating seamless animations and transitions to enhance user engagement and interactivity.",
      icons: [
        { name: "Motion", color: "#FF3366", symbol: "M" },
        { name: "Android", color: "#3DDC84", symbol: "🤖" },
        { name: "Framer", color: "#0055FF", symbol: "F" },
      ],
      size: "medium",
    },
    {
      title: "Programming Languages",
      description:
        "Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.",
      icons: [
        { name: "Python", color: "#3776AB", symbol: "🐍" },
        { name: "C", color: "#A8B9CC", symbol: "C" },
        { name: "C++", color: "#00599C", symbol: "C++" },
        { name: "Git", color: "#F05032", symbol: "📁" },
      ],
      size: "large",
    },
    {
      title: "Database Management",
      description:
        "Designing and managing databases to ensure secure and efficient data storage and retrieval.",
      icons: [
        { name: "MySQL", color: "#4479A1", symbol: "MySQL" },
        { name: "PostgreSQL", color: "#336791", symbol: "🐘" },
        { name: "MongoDB", color: "#47A248", symbol: "🍃" },
        { name: "Firebase", color: "#FFCA28", symbol: "🔥" },
      ],
      size: "large",
    },
    {
      title: "Cloud & Deployment",
      description:
        "Experienced in deploying and managing applications using modern cloud platforms and tools.",
      icons: [
        { name: "Docker", color: "#2496ED", symbol: "🐳" },
        { name: "Azure", color: "#0078D4", symbol: "A" },
        { name: "AWS", color: "#FF9900", symbol: "aws" },
        { name: "Google Cloud", color: "#4285F4", symbol: "☁️" },
        { name: "Vercel", color: "#000000", symbol: "▲" },
      ],
      size: "medium",
    },
    {
      title: "Testing & Debugging",
      description:
        "Ensuring code quality and reliability through rigorous testing and debugging processes.",
      icons: [
        { name: "Testing", color: "#FF6B35", symbol: "🧪" },
        { name: "Debug", color: "#FF1744", symbol: "🐛" },
        { name: "Quality", color: "#E91E63", symbol: "✓" },
      ],
      size: "medium",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile apps with sleek designs and robust functionality.",
      icons: [
        { name: "React Native", color: "#61DAFB", symbol: "⚛" },
        { name: "GitHub", color: "#181717", symbol: "🐙" },
        { name: "Git", color: "#F05032", symbol: "📋" },
      ],
      size: "medium",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Effectively managing code and collaborating on projects to ensure seamless teamwork.",
      icons: [
        { name: "GitHub", color: "#181717", symbol: "🐙" },
        { name: "Git", color: "#F05032", symbol: "📋" },
      ],
      size: "medium",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.",
      icons: [{ name: "Figma", color: "#F24E1E", symbol: "🎨" }],
      tags: ["Prototyping", "Wireframing"],
      size: "large",
    },
    {
      title: "Core Computer Science Concepts",
      description:
        "Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques.",
      tags: [
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming",
        "DSA",
        "System Design",
      ],
      size: "large",
    },
    {
      title: "Personal Development",
      description:
        "Committed to continuous learning and personal growth to excel in both professional and collaborative environments.",
      tags: [
        "Time Management",
        "Problem Solving",
        "Communication",
        "Leadership",
      ],
      size: "large",
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
  }

  const getGridClass = (size: SkillCard["size"]): string => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
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
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: isEmoji ? "rgba(255,255,255,0.1)" : icon.color,
        }}
      >
        {isEmoji ? (
          <span className="text-2xl">{icon.symbol}</span>
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
    <div className=" min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={`${getGridClass(
                card.size
              )}  rounded-3xl p-6  transition-all duration-300   group`}
            >
              {/* Icons */}
              {card.icons && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {card.icons.map((icon, iconIndex) => (
                    <TechIcon key={iconIndex} icon={icon} />
                  ))}
                </div>
              )}

              {/* Title */}
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                {card.description}
              </p>

              {/* Tags for certain cards */}
              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-blue-500 transition-colors duration-300"
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
