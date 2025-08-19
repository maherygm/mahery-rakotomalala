import { useEffect, useState } from "react";
import "./assets/css/index.css";
import AppRoutes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/common/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 100);

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500); // attendre un petit peu pour l'animation
    };

    // Si la page est déjà chargée
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return loading ? <Loader progress={progress} /> : <AppRoutes />;
}

export default App;
