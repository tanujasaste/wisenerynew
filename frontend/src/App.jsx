
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";

/*
 * The two landing routes ("/" intro and "/home") stay in the entry bundle
 * so they never wait on a second chunk request (that would add a network
 * round trip to LCP). Every other route is code-split. Previously
 * Programming, CivilEngineering, Robotics and the chatbot were all in the
 * entry bundle, and three.js was pulled in by the intro.
 */
const importTeaching = () => import("./pages/Teaching");
const importBoardDetails = () => import("./pages/BoardDetails");
const importProgramming = () => import("./pages/Programming");
const importCivilEngineering = () => import("./pages/CivilEngineering");
const importRobotics = () => import("./pages/Robotics");
const importChatbot = () => import("./components/WiseneryChatbot");

const Teaching = lazy(importTeaching);
const BoardDetails = lazy(importBoardDetails);
const Programming = lazy(importProgramming);
const CivilEngineering = lazy(importCivilEngineering);
const Robotics = lazy(importRobotics);
const WiseneryChatbot = lazy(importChatbot);

/*
 * After the first screen is up and the browser is idle, quietly fetch the
 * other route chunks so in-app navigation stays instant (same feel as
 * when everything was bundled together).
 */
const prefetchRoutes = [
  importTeaching,
  importProgramming,
  importCivilEngineering,
  importRobotics,
  importBoardDetails,
];

function runWhenIdle(callback, timeout = 4000) {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout });
    return () => window.cancelIdleCallback(id);
  }
  const id = window.setTimeout(callback, 1500);
  return () => window.clearTimeout(id);
}

function App() {
  const location = useLocation();
  const isIntroRoute = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  // Warm the route chunks once, after first paint, when the browser is idle.
  // The intro route is skipped on purpose: it is running a heavy animation.
  const [idleReady, setIdleReady] = useState(false);

  useEffect(() => {
    if (isIntroRoute) return;
    return runWhenIdle(() => {
      prefetchRoutes.forEach((load) => load());
      importChatbot();
      setIdleReady(true);
    });
  }, [isIntroRoute]);

  useEffect(() => {
    document.body.style.overflow = isIntroRoute ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isIntroRoute]);

  return (
    <div className="min-h-screen bg-[#fffdf9]">
      {!isIntroRoute && <Navbar />}

      <Suspense
        fallback={<div className="min-h-screen bg-[#fffdf9]" />}
      >
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />

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

      {!isIntroRoute && <Footer />}

      {/* Floating chatbot available throughout the website */}
      {!isIntroRoute && idleReady && (
        <Suspense fallback={null}>
          <WiseneryChatbot />
        </Suspense>
      )}
    </div>
  );
}

export default App;
