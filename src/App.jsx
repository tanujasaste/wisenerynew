import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";
import { useState } from "react";
import CameraFocusAnimation from "./components/CameraFocusAnimation";
import IntroAnimation from "./components/IntroAnimation";



function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="bg-[#fffdf9]">
      {showIntro && (
        <IntroAnimation
          onComplete={() => setShowIntro(false)}
        />
      )}
      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <AboutUs />
        </section>

        {/* CONTACT */}
        <section id="contact">
          {/* Contact section will come here */}
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;