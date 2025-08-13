import { useEffect } from "react";
import "./assets/css/index.css";
import AppRoutes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return <AppRoutes />;
}

export default App;
