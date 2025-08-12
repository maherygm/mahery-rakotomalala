import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../pages"));
const Home = lazy(() => import("../pages/Home"));
const Project = lazy(() => import("../pages/Project"));
const Skills = lazy(() => import("../pages/Skills"));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Home />} />
            <Route path="/projet" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
