import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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
  const [showIntro, setShowIntro] = useState(
    window.location.pathname === "/"
  );

  useEffect(() => {
    document.body.style.overflow = showIntro ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-[#fffdf9]">

      {/* =========================================================
          NAVBAR
          Global — appears on every page
      ========================================================= */}

      <Navbar />

      {/* =========================================================
          PAGE CONTENT
      ========================================================= */}

      <Suspense
        fallback={
          <div className="min-h-screen bg-[#fffdf9]" />
        }
      >
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/teaching"
            element={<Teaching />}
          />

          <Route
            path="/teaching/boards/:boardId"
            element={<BoardDetails />}
          />

          <Route
            path="/programming"
            element={<Programming />}
          />

          <Route
            path="/civil-engineering"
            element={<CivilEngineering />}
          />

          <Route
            path="/robotics"
            element={<Robotics />}
          />

        </Routes>
      </Suspense>

      {/* =========================================================
          FOOTER
          Global — appears on every page
      ========================================================= */}

      <Footer />

      {/* =========================================================
          INTRO OVERLAY
          Only shown on the home page
      ========================================================= */}

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