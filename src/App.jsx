import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Programming from "./pages/Programming";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";
import Home from "./pages/Home";
import CivilEngineering from "./pages/CivilEngineering";

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
          WEBSITE
          Mounted immediately underneath the intro.
          This prevents the white gap after the animation.
      ========================================================= */}

      <Navbar />

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
        </Routes>
      </Suspense>


      {/* =========================================================
          INTRO OVERLAY
          The website is already underneath this.
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