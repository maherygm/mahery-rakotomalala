import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import ScrollToTop from "../utils/scrollToTop";

const HomePage = lazy(() => import("../pages"));
const Home = lazy(() => import("../pages/Home"));
const Project = lazy(() => import("../pages/Project"));
const Skills = lazy(() => import("../pages/Skills"));

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <img src="/loading.gif" alt="" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="/projet" element={<Skills />} />
            <Route path="/skills" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
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
