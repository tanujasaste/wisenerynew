import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="contact">
          {/* Contact */}
        </section>
      </main>

      <Footer />
    </>
  );
}