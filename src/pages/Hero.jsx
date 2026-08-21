import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
// import { useEffect, useRef, useState } from "react";

import heroIllustration from "../assets/hero-illustration.png";
import roboticsImage from "../assets/robotics.png";
import civilImage from "../assets/civil-engineering.png";
import programmingImage from "../assets/programming.png";
import teachingImage from "../assets/teaching.png";
import Reveal from "../components/Reveal";

/* =========================================================
   REVEAL

   Two triggers:
   - "mount": fires shortly after the component mounts. Use
     this for anything above the fold that's visible on load
     (the hero content) — a page-load sequence reads better
     here than waiting on a scroll observer for content the
     user can already see.
   - "scroll": fires when the element enters the viewport.
     Use this for anything below the fold (the course cards).
========================================================= */
// function Reveal({
//   children,
//   trigger = "scroll",
//   delay = 0,
//   y = 24,
//   className = "",
// }) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (trigger === "mount") {
//       const t = setTimeout(() => setVisible(true), 30);
//       return () => clearTimeout(t);
//     }

//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(el);
//         }
//       },
//       { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [trigger]);

//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
//         transition:
//           "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
//         transitionDelay: `${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

function Hero() {
  return (
    <main className="relative overflow-hidden bg-[#fffdf9]">
      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8 sm:gap-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/YOURNUMBER"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:h-[58px] sm:w-[58px]"
        >
          <FaWhatsapp
            size={26}
            className="transition-transform duration-300 group-hover:scale-110 sm:hidden"
          />
          <FaWhatsapp
            size={32}
            className="hidden transition-transform duration-300 group-hover:scale-110 sm:block"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:YOURNUMBER"
          aria-label="Call Wisenery"
          className="group flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:h-[58px] sm:w-[58px]"
        >
          <FaPhoneAlt
            size={18}
            className="transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 sm:hidden"
          />
          <FaPhoneAlt
            size={23}
            className="hidden transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 sm:block"
          />
        </a>

      </div>

      {/* HERO TOP */}
      <section
        className="mx-auto grid min-h-[600px] max-w-[1350px] grid-cols-1 items-center gap-10 px-5 py-16 text-center sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-0 lg:text-left"
        id="hero"
      >

        {/* LEFT CONTENT */}
        <div className="relative z-10 order-2 lg:order-1">

          {/* Offer */}
          <Reveal trigger="mount" delay={0}>
            <div className="mb-5 flex items-center justify-center gap-4 lg:justify-start">
              <span className="text-[13px] font-bold tracking-[2px] text-[#f56b0a] sm:text-[16px]">
                LEARN FROM TODAY
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal trigger="mount" delay={120} y={30}>
            <h1 className="mx-auto max-w-[680px] text-[36px] font-extrabold leading-[1.15] tracking-[-1px] text-[#101c29] sm:text-[48px] sm:leading-[1.1] md:text-[58px] lg:mx-0 lg:text-[68px] lg:leading-[1.08] lg:tracking-[-2px]">
              A Smarter Way to
              <br />
              <span className="text-[#f56b0a]">
                Learn, Create & Grow
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal trigger="mount" delay={280}>
            <div className="mx-auto mt-6 flex max-w-[590px] gap-4 text-left sm:mt-7 sm:gap-5 lg:mx-0">
              <div className="h-[48px] w-[3px] shrink-0 bg-[#f56b0a]" />
              <p className="text-[15px] leading-[1.55] text-[#606060] sm:text-[17px]">
                You will find all what you want learn, because in Wisenery
                you can learn anything, anywhere, at any time.
              </p>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal trigger="mount" delay={400}>
            <div className="mt-8 flex items-center justify-center gap-10 sm:mt-10 lg:justify-start">
              <button className="flex h-[50px] items-center gap-3 rounded-[10px] bg-[#f56b0a] px-6 text-[15px] font-semibold text-white shadow-sm transition-all hover:-translate-y-1 hover:bg-[#e65f05] sm:h-[58px] sm:px-7 sm:text-[17px]">
                Explore Courses
                <ArrowRight size={19} className="sm:hidden" />
                <ArrowRight size={21} className="hidden sm:block" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <Reveal
          trigger="mount"
          delay={200}
          y={16}
          className="relative order-1 flex h-[280px] items-center justify-center sm:h-[380px] md:h-[450px] lg:order-2 lg:h-[550px]"
        >
          <img
            src={heroIllustration}
            alt="Wisenery learning"
            className="relative z-10 h-full w-full object-contain"
          />
        </Reveal>

      </section>

      {/* COURSE AREA */}
      <section className="relative mx-auto mt-0 max-w-[1450px] px-5 sm:px-8 lg:mt-[-20px]">

        {/* Navy background */}
        <div className="absolute inset-x-0 bottom-0 top-[40px] rounded-[20px] bg-[#0c1e30] sm:top-[60px] sm:rounded-[30px] lg:top-[80px]" />

        {/* Cards */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 py-8 sm:gap-5 sm:py-10 lg:flex-nowrap lg:py-0">
          {[
            { image: teachingImage, title: "Teaching" },
            { image: programmingImage, title: "Programming" },
            { image: civilImage, title: "Civil Engineering" },
            { image: roboticsImage, title: "Robotics" },
          ].map((course, i) => (
<Reveal
  key={course.title}
  trigger="scroll"
  delay={i * 120}
  x={180}
  className="w-full sm:w-[calc(50%-10px)] lg:w-auto"
>
              <CourseCard image={course.image} title={course.title} />
            </Reveal>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="relative h-[40px] sm:h-[60px] lg:h-[80px]" />

      </section>

    </main>
  );
}

export default Hero;