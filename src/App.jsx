import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="bg-[#fffdf9]">

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