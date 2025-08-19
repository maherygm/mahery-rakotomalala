import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
import { lazy } from "react";
import ScrollToTop from "../utils/scrollToTop";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/common/PagesTransition";

const HomePage = lazy(() => import("../pages"));
const Home = lazy(() => import("../pages/Home"));
const Project = lazy(() => import("../pages/Project"));
const Skills = lazy(() => import("../pages/Skills"));

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

// 👉 On crée un composant séparé qui gère AnimatePresence + useLocation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        >
          <Route
            index
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="projet"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="skills"
            element={
              <PageTransition>
                <Project />
              </PageTransition>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-10 flex flex-col items-center gap-4 border border-gray-200 dark:border-gray-700 bento">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};
