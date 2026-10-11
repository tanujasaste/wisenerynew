
import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Programming from "./pages/Programming";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import IntroPage from "./pages/IntroPage";
import CivilEngineering from "./pages/CivilEngineering";
import Robotics from "./pages/Robotics";
import WiseneryChatbot from "./components/WiseneryChatbot";

const Teaching = lazy(() => import("./pages/Teaching"));
const BoardDetails = lazy(() => import("./pages/BoardDetails"));

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
      {!isIntroRoute && <WiseneryChatbot />}
    </div>
  );
}

export default App;
