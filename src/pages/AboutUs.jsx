import { ArrowUpRight, BookOpen, Lightbulb, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================
   REVEAL WRAPPER
   Wrap any block of text/content in this to get a
   scroll-triggered fade-up reveal animation.
========================= */
function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fffdf9] px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION INTRO
        ========================= */}
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">

          <div>
            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A29]">
                About Wisenery
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#111820] md:text-5xl lg:text-6xl">
                Learning that goes
                <span className="text-[#FF7A29]"> beyond the classroom.</span>
              </h2>
            </Reveal>
          </div>

          <div className="max-w-xl md:ml-auto">
            <Reveal delay={200}>
              <p className="text-base leading-7 text-[#111820]/70 md:text-lg">
                Wisenery brings academics and real-world technical learning
                together, helping students understand not only what they learn,
                but how to build with it.
              </p>
            </Reveal>
          </div>

        </div>


        {/* =========================
            CORE MISSION
        ========================= */}
        <div className="mt-24 grid gap-10 border-t border-[#ece8e3] pt-10 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Label */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF7A29]/30 text-[#FF7A29]">
                <Lightbulb size={18} />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A29]">
                  01
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#111820]">
                  Our Core Mission
                </h3>
              </div>
            </div>
          </Reveal>


          {/* Content */}
          <div className="grid gap-10 md:grid-cols-3">

            <Reveal delay={0}>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/40">
                  The Problem
                </p>

                <p className="text-sm leading-6 text-[#111820]/70">
                  Traditional schooling often separates academic theory from
                  practical, hands-on application.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/40">
                  The Solution
                </p>

                <p className="text-sm leading-6 text-[#111820]/70">
                  We bridge that gap through a dual-learning environment where
                  students strengthen school subjects while developing
                  real-world technical skills.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111820]/40">
                  The Goal
                </p>

                <p className="text-sm leading-6 text-[#111820]/70">
                  To empower the next generation of innovators, engineers, and
                  critical thinkers.
                </p>
              </div>
            </Reveal>

          </div>
        </div>


        {/* =========================
            FOUNDER'S VISION
        ========================= */}
        <Reveal y={40}>
          <div className="mt-24 overflow-hidden rounded-[32px] bg-[#111820]">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* Left */}
              <div className="relative p-8 md:p-12 lg:p-16">

                {/* Orange glow */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#FF7A29]/20 blur-[100px]" />

                <div className="relative z-10">

                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A29]">
                    02
                  </p>

                  <h3 className="max-w-md text-3xl font-semibold leading-tight text-white md:text-4xl">
                    The Founder's
                    <span className="text-[#FF7A29]"> Vision.</span>
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                    Education becomes more powerful when students can connect
                    what they learn with the world around them.
                  </p>

                </div>
              </div>


              {/* Right */}
              <div className="border-t border-white/10 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-16">

                <div className="grid gap-10 md:grid-cols-2">

                  <Reveal delay={100}>
                    <div>
                      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A29]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A29]" />
                        Real-World Authority
                      </p>

                      <p className="text-sm leading-7 text-white/65">
                        Our technical curriculum is shaped by practical industry
                        experience, ensuring students learn from real-world
                        applications rather than theory alone.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={220}>
                    <div>
                      <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF7A29]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A29]" />
                        The Origin Story
                      </p>

                      <p className="text-sm leading-7 text-white/65">
                        Wisenery was born from a simple realization: students need
                        opportunities to move beyond memorizing concepts and
                        actually experience what those concepts can create.
                      </p>
                    </div>
                  </Reveal>

                </div>

              </div>

            </div>
          </div>
        </Reveal>


        {/* =========================
            UNIQUE LEARNING APPROACH
        ========================= */}
        <div className="mt-24">

          <div className="mb-12 max-w-2xl">

            <Reveal>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A29]">
                03 · Our Unique Learning Approach
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#111820] md:text-4xl">
                Two ways of learning.
                <br />
                <span className="text-[#FF7A29]">
                  One complete education.
                </span>
              </h3>
            </Reveal>

          </div>


          {/* Approach Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Academics */}
            <Reveal delay={0} y={32}>
              <div className="group rounded-[28px] border border-[#ece8e3] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A29]/30 hover:shadow-[0_20px_50px_rgba(17,24,32,0.07)] md:p-10">

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF7A29]/10 text-[#FF7A29]">
                    <BookOpen size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111820]/30">
                    Group
                  </span>

                </div>

                <h4 className="mt-8 text-2xl font-semibold text-[#111820]">
                  Grade-Wise Academics
                </h4>

                <p className="mt-4 text-sm leading-7 text-[#111820]/65">
                  Students from Grades 1–12 learn through structured,
                  collaborative sessions that strengthen school subjects while
                  encouraging peer-to-peer learning.
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#FF7A29]">
                  Structured learning
                  <ArrowUpRight size={16} />
                </div>

              </div>
            </Reveal>


            {/* Skills */}
            <Reveal delay={150} y={32}>
              <div className="group rounded-[28px] border border-[#ece8e3] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7A29]/30 hover:shadow-[0_20px_50px_rgba(17,24,32,0.07)] md:p-10">

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111820]/5 text-[#111820]">
                    <Wrench size={22} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#111820]/30">
                    1-on-1
                  </span>

                </div>

                <h4 className="mt-8 text-2xl font-semibold text-[#111820]">
                  Skill Building
                </h4>

                <p className="mt-4 text-sm leading-7 text-[#111820]/65">
                  Technical subjects such as electronics, mechanical design,
                  robotics, and programming require personalized guidance.
                  Students work with mentors at their own pace to master
                  complex concepts.
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#FF7A29]">
                  Mentor-led learning
                  <ArrowUpRight size={16} />
                </div>

              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;