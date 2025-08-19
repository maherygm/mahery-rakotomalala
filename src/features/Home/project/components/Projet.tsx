import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import webCup from "../../../../assets/images/superNovaWebCup.png";
import sirius from "../../../../assets/images/sirius.png";
import novawolrd from "../../../../assets/images/novawolrd.png";
import Sentinelle from "../../../../assets/images/Sentinelle.png";
type Particle = {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
};

const Projet = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 10 + 10,
        animationDelay: Math.random() * 2,
      };

      setParticles((prev) => [...prev, particle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, (particle.animationDuration + particle.animationDelay) * 1000);
    };

    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: "webCup2025",
      title: "WEB CUP 2025",
      logo: "",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      img: webCup,
      link: "https://supernova-webcup-2025.vercel.app",
    },
    {
      id: "hiu",
      title: "Nova world Hackaton Inter Universitaire",
      logo: "",
      gradient: "from-cyan-400 to-cyan-600",
      img: novawolrd,
    },
    {
      id: "sentinelle",
      title: "Sentinelle",
      logo: "",
      gradient: "from-green-400 to-emerald-500",
      isCircleLogo: true,
      img: Sentinelle,
    },
    {
      id: "Sirius",
      title: "Sirius Education",
      logo: "",
      gradient: "from-pink-400 to-yellow-400",
      img: sirius,
      link: "https://p4h-sirius.vercel.app",
    },
  ];

  const handleProjectClick = (projectId: string) => {
    console.log("Opening project:", projectId);
    // Ajoutez votre logique de navigation ici
  };

  return (
    <div className="min-h-screen z-50 overflow-hidden relative">
      {/* Particules flottantes */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-1 h-1  bg-opacity-30 rounded-full pointer-events-none animate-bounce"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            top: "100vh",
            transform: "translateY(-100vh)",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Section Hero */}
        <section className="grid lg:grid-cols-3 gap-16 mb-20 items-center">
          <div data-aos="fade-up" className="lg:col-span-2">
            <h1 className="text-4xl lg:text-6xl font-light leading-tight  mb-0 animate-fade-in-left">
              Driven by curiosity and a love for design, I create simple,
              functional, and visually striking digital experiences. As a
              student, I'm always learning and exploring new ideas.
            </h1>
          </div>

          <div
            data-aos="fade-up"
            className="backdrop-blur-xl  border  rounded-3xl p-10  hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-right"
          >
            <p className="leading-relaxed mb-6 text-base">
              The fusion of my passion for design, development, and seamless
              user experiences places me at the intersection of creativity and
              technology in the digital world.
            </p>
            <button className="flex items-center gap-3  font-medium hover:gap-4 transition-all duration-300 group">
              More about me
              <div className="w-6 h-6 border-2  rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>
        </section>

        {/* Section Projets */}
        <section>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 animate-fade-in-up">
            Impressive Works
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg mb-16 max-w-2xl leading-relaxed animate-fade-in-up-delay"
          >
            HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN
            AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {projects.map((project, index) => (
              <div
                data-aos="fade-up"
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className="backdrop-blur-xl  border  rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-3  animate-fade-in-up group"
                style={{
                  animationDelay: `${0.8 + index * 0.2}s`,
                }}
              >
                <div
                  className={`h-80  relative overflow-hidden`}
                  style={{
                    backgroundImage: `url(${project.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                    backgroundBlendMode: "multiply",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.isCircleLogo ? (
                      <div className="w-20 h-20  rounded-full flex items-center justify-center text-2xl font-bold text-gray-800">
                        {project.logo}
                      </div>
                    ) : (
                      <div className=" text-4xl font-bold text-center tracking-wider">
                        {project.logo}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                    <div className="w-6 h-6 border-2  rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    <a href={project.link}>{project.title}</a>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button className="inline-block px-8 py-4 backdrop-blur-xl  border rounded-full font-medium  hover:-translate-y-1 transition-all duration-300 animate-fade-in-up-final">
            Explore more
          </button>
        </section>
      </div>
    </div>
  );
};

export default Projet;
