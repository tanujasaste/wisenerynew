import Hero from "./Hero";
import AboutUs from "./AboutUs";

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

    </>
  );
}