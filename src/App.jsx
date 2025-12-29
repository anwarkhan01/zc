import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "@/pages/Home";
import Apply from "@/pages/Apply";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/NotFound";
import RootLayout from "@/components/RootLayout";

/* ---------- Scroll to top on route change ---------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* ---------- Scroll to hash if present ---------- */
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

/* ---------- App ---------- */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
