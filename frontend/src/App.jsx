import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Programming from "./pages/Programming";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";
import CivilEngineering from "./pages/CivilEngineering";
import Robotics from "./pages/Robotics";

const Teaching = lazy(() => import("./pages/Teaching"));
const BoardDetails = lazy(() => import("./pages/BoardDetails"));

function App() {
  const location = useLocation();

  const [showIntro, setShowIntro] = useState(
    window.location.pathname === "/"
  );

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-[#fffdf9]">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#fffdf9]" />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/teaching" element={<Teaching />} />

          <Route
            path="/teaching/boards/:boardId"
            element={<BoardDetails />}
          />

          <Route path="/programming" element={<Programming />} />

          <Route
            path="/civil-engineering"
            element={<CivilEngineering />}
          />

          <Route path="/robotics" element={<Robotics />} />
        </Routes>
      </Suspense>

      {/* FOOTER */}
      <Footer />

      {/* INTRO OVERLAY */}
      {showIntro && (
        <div className="fixed inset-0 z-[9999]">
          <IntroAnimation
            onComplete={() => {
              setShowIntro(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;