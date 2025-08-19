import { useState } from "react";
import { Home, Shield, FileText, Github } from "lucide-react";
import { useNavigate } from "react-router";

export default function NavigationBar() {
  const [activeIndex, setActiveIndex] = useState(3); // Avatar actif par défaut

  const navItems = [
    { icon: Home, label: "Accueil", link: "/" },
    // { icon: Terminal, label: "Terminal" },
    { icon: Shield, label: "Sécurité", link: "/skills" },
    { icon: null, label: "Profile", isAvatar: true }, // Avatar spécial
    { icon: FileText, label: "Documents", link: "projet" },
    { icon: Github, label: "GitHub" },
    // { icon: RotateCcw, label: "Actualiser" },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-fit fixed z-[100] bottom-2.5 left-1/2 transform -translate-x-1/2">
      <nav className="bg-gray-900 rounded-3xl px-4 py-3 shadow-xl">
        <div className="flex items-center space-x-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                navigate(item.link || "/");
              }}
              className={`
                relative w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-200 ease-in-out
                ${
                  activeIndex === index
                    ? item.isAvatar
                      ? "bg-blue-400"
                      : "bg-gray-200 text-gray-900"
                    : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                }
              `}
              aria-label={item.label}
            >
              {item.isAvatar ? (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              ) : item.icon ? (
                <item.icon size={20} />
              ) : null}

              {/* Indicateur actif pour les icônes normales */}
              {activeIndex === index && !item.isAvatar && (
                <div className="absolute inset-0 rounded-full border-2 border-gray-200 opacity-50"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
