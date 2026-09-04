import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";

const Home = lazy(() => import("./pages/Home"));
const Teaching = lazy(() => import("./pages/Teaching"));
const BoardDetails = lazy(() => import("./pages/BoardDetails"));

function App() {
  const [showIntro, setShowIntro] = useState(
    window.location.pathname === "/"
  );

  return (
    <div className="bg-[#fffdf9]">

      {showIntro && (
        <IntroAnimation
          onComplete={() => setShowIntro(false)}
        />
      )}

      <Navbar />

      <Suspense fallback={null}>
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
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;