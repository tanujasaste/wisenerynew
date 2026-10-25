import { ArrowRight } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import CourseCard from "../components/CourseCard";
import { useState } from "react";


import heroIllustration from "../assets/hero-illustration.webp";
import roboticsImage from "../assets/robotics.webp";
import civilImage from "../assets/civil-engineering.webp";
import programmingImage from "../assets/programming.webp";
import teachingImage from "../assets/teaching.webp";
import Reveal from "../components/Reveal";

function Hero() {
const WISENERY_PHONE = "+917498552866";

const [copied, setCopied] = useState(false);

const handlePhoneClick = async () => {
  // Detect actual mobile/tablet-style devices
  const isMobile =
    window.matchMedia("(max-width: 767px)").matches ||
    /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

  // 📱 Mobile → open dialer
  if (isMobile) {
    window.location.assign(`tel:${WISENERY_PHONE}`);
    return;
  }

  // 💻 Desktop → ONLY copy, never redirect
  try {
    await navigator.clipboard.writeText(WISENERY_PHONE);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  } catch (error) {
    console.error("Clipboard failed:", error);

    // Fallback copy method for browsers where clipboard API is unavailable
    const textArea = document.createElement("textarea");
    textArea.value = WISENERY_PHONE;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } finally {
      document.body.removeChild(textArea);
    }
  }
};

  return (
    <main className="relative overflow-hidden bg-[#fffdf9]" id="home">

      {/* FLOATING CONTACT BUTTONS */}
<div className="fixed bottom-[80px] right-5 z-50 flex flex-col gap-3 sm:bottom-[90px] sm:right-6 sm:gap-4">

  {/* WhatsApp */}
  <a
    href="https://wa.me/917498552866?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Wisenery."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Wisenery on WhatsApp"
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
  <button
    type="button"
    onClick={handlePhoneClick}
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
  </button>

</div>

      {/* DESKTOP PHONE COPY NOTIFICATION */}
      {copied && (
        <div
          className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-xl"
          role="status"
        >
          ✓ Phone number copied to your clipboard
        </div>
      )}

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
          <Reveal trigger="mount" delay={50} y={20}>
            <h1 className="mx-auto max-w-[680px] text-[36px] font-extrabold leading-[1.15] tracking-[-1px] text-[#101c29] sm:text-[48px] sm:leading-[1.1] md:text-[58px] lg:mx-0 lg:text-[68px] lg:leading-[1.08] lg:tracking-[-2px]">
              A Smarter Way to
              <br />
              <span className="text-[#f56b0a]">
                Learn, Create & Grow
              </span>
            </h1>
          </Reveal>

          {/* Online Coaching Classes */}
          <Reveal trigger="mount" delay={80} y={12}>
            <p className="mt-4 text-center text-[17px] font-semibold tracking-[-0.3px] text-[#f56b0a] sm:text-[20px] lg:text-left">
              Online Coaching Classes for Every Learner
            </p>
          </Reveal>

          {/* Description */}
          <Reveal trigger="mount" delay={100}>
            <div className="mx-auto mt-6 flex max-w-[590px] gap-4 text-left sm:mt-7 sm:gap-5 lg:mx-0">
              <div className="h-[48px] w-[3px] shrink-0 bg-[#f56b0a]" />

              <p className="text-[15px] leading-[1.55] text-[#606060] sm:text-[17px]">
                You will find all what you want learn, because in Wisenery
                you can learn anything, anywhere, at any time.
              </p>
            </div>
          </Reveal>

        </div>

        {/* RIGHT ILLUSTRATION */}
        <Reveal
          trigger="mount"
          delay={50}
          y={12}
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
      <section className="relative mx-auto mt-0 max-w-[1450px] px-5 sm:px-8 lg:mt-[-20px]" id="courses">

        {/* Navy background */}
        <div className="absolute inset-x-0 bottom-0 top-[40px] rounded-[20px] bg-[#0c1e30] sm:top-[60px] sm:rounded-[30px] lg:top-[80px]" />

        {/* Cards */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 py-8 sm:gap-5 sm:py-10 lg:flex-nowrap lg:py-0">
          {[
            { image: teachingImage, title: "School & Competitive Exams" },
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
              <CourseCard
                image={course.image}
                title={course.title}
              />
            </Reveal>
          ))}
        </div>

        {/* Personalized Learning Section */}
<div className="relative z-10 mx-auto max-w-[1150px] px-5 pb-3 pt-5 sm:px-8 sm:pb-4 sm:pt-6">
<div className="border-t border-white/15 pt-10 sm:pt-12">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[2.5px] text-[#ff9a55] sm:text-base">
                Personalized Learning
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[42px]">
                From Class 1 to Engineering
              </h2>

              <p className="mx-auto mt-4 max-w-[800px] text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                Quality online coaching classes with personalized support
                tailored to every student's goals, subjects, and learning pace.
              </p>
            </div>

            <div className="mx-auto mt-7 grid max-w-[950px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="rounded-xl bg-white/[0.06] px-5 py-6 text-center sm:px-7">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  School to Engineering
                </h3>
                <p className="mx-auto mt-3 max-w-[420px] text-base leading-7 text-gray-300 sm:text-[17px]">
                  Academic support across school grades, subjects, and
                  engineering courses to help learners build confidence.
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.06] px-5 py-6 text-center sm:px-7">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  One-to-One Individual Teaching
                </h3>
                <p className="mx-auto mt-3 max-w-[420px] text-base leading-7 text-gray-300 sm:text-[17px]">
                  Dedicated individual attention, clearer explanations, and
                  lessons adapted to each student's learning pace.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reduced bottom spacing */}
<div className="relative h-1" />
        {/* Bottom spacing */}
        {/* <div className="relative h-[20px] sm:h-[30px] lg:h-[40px]" /> */}

        {/* Bottom spacing */}
        <div className="relative h-[40px] sm:h-[60px] lg:h-[80px]" />

      </section>

    </main>
  );
}

export default Hero;