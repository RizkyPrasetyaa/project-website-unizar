import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, state, key } = useLocation();

  useEffect(() => {
    // Memantau perubahan rute, state tab, maupun perulangan klik rute yang sama (key)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Efek scroll halus balik ke atas
    });
  }, [pathname, state, key]);

  return null;
}
