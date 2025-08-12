// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ou "auto" pour un scroll instantané
    });
  }, [pathname]);

  return null;
}
