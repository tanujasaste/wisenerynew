import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Cog,
  CircuitBoard,
  Code2,
  Lightbulb,
  Rocket,
  Wrench,
  Brain,
  Factory,
  GraduationCap,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import RoboticArm from "../components/RoboticArm";

/* =========================================================
   REVEAL ANIMATION
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   CIRCUIT PATTERN
========================================================= */

function CircuitPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
      viewBox="0 0 1200 700"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 160H170V90H330V180H500V100H690V210H850V120H1040V180H1200"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M0 520H120V450H280V560H450V470H620V540H790V430H950V500H1200"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M180 0V90M330 90V250M500 100V300M690 210V380M850 120V280M1040 180V350"
        stroke="currentColor"
        strokeWidth="1"
      />

      <circle cx="170" cy="160" r="4" fill="currentColor" />
      <circle cx="330" cy="90" r="4" fill="currentColor" />
      <circle cx="500" cy="100" r="4" fill="currentColor" />
      <circle cx="690" cy="210" r="4" fill="currentColor" />
      <circle cx="850" cy="120" r="4" fill="currentColor" />
      <circle cx="1040" cy="180" r="4" fill="currentColor" />

      <circle cx="120" cy="520" r="4" fill="currentColor" />
      <circle cx="280" cy="450" r="4" fill="currentColor" />
      <circle cx="450" cy="560" r="4" fill="currentColor" />
      <circle cx="620" cy="470" r="4" fill="currentColor" />
      <circle cx="790" cy="540" r="4" fill="currentColor" />
      <circle cx="950" cy="430" r="4" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   MAIN ROBOTICS PAGE
========================================================= */

export default function Robotics() {
  const learningCards = [
    {
      icon: Bot,
      number: "01",
      title: "Robotics Fundamentals",
      text: "Understand how robots work, from mechanical structures and sensors to motors and controllers.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Electronics & Sensors",
      text: "Learn how sensors collect information and how electronic components allow robots to respond.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Programming",
      text: "Write programs that give robots instructions, logic, movement and autonomous behaviour.",
    },
    {
      icon: Cog,
      number: "04",
      title: "Mechanical Design",
      text: "Explore gears, joints, mechanisms and the engineering principles behind robotic systems.",
    },
  ];

  const projects = [
    {
      icon: Bot,
      title: "Obstacle Avoiding Robot",
      text: "Build a robot that detects obstacles and automatically changes its direction.",
      tag: "BEGINNER",
    },
    {
      icon: CircuitBoard,
      title: "Line Following Robot",
      text: "Design a robot that uses sensors to detect and follow a predefined path.",
      tag: "INTERMEDIATE",
    },
    {
      icon: Brain,
      title: "Smart Autonomous Robot",
      text: "Combine sensors, programming and decision-making to create an intelligent robot.",
      tag: "ADVANCED",
    },
  ];

  const applications = [
    {
      icon: Factory,
      title: "Industrial Automation",
      text: "Robots are transforming manufacturing, assembly and quality-control processes.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      text: "Robotics develops problem-solving, creativity and practical engineering skills.",
    },
    {
      icon: Rocket,
      title: "Space & Exploration",
      text: "Robotic systems help humans explore environments that are difficult or dangerous.",
    },
    {
      icon: Wrench,
      title: "Everyday Technology",
      text: "From smart devices to automated machines, robotics is becoming part of daily life.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#111820]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-orange-100/60 blur-[100px]" />

          <div className="absolute right-[-120px] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[110px]" />

          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-orange-50/50 blur-[100px]" />
        </div>

        <CircuitPattern />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">

          {/* LEFT */}
          <Reveal className="max-w-xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold tracking-[0.16em] text-[#F56B0A]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#F56B0A]" />
              ROBOTICS PROGRAM
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">
              Build it.
              <br />
              <span className="text-[#F56B0A]">Program it.</span>
              <br />
              Bring it to life.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Step into the world of robotics where engineering meets
              programming. Learn how machines think, move and interact
              with the world around them.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#robotics-roadmap"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F56B0A] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(245,107,10,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(245,107,10,0.3)]"
              >
                Explore Robotics

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#robotics-projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#0B2A4A] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B2A4A]"
              >
                See Projects
                <ArrowUpRight size={17} />
              </a>

            </div>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-7">

              <div>
                <div className="text-2xl font-black text-[#0B2A4A]">
                  100%
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Hands-on Learning
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#0B2A4A]">
                  4+
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Core Skills
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#0B2A4A]">
                  ∞
                </div>
                <div className="mt-1 text-xs font-medium text-slate-500">
                  Ideas to Build
                </div>
              </div>

            </div>

          </Reveal>

          {/* RIGHT — SEPARATE ROBOTIC ARM COMPONENT */}

          <Reveal
            delay={150}
            className="relative flex min-h-[500px] items-center justify-center lg:min-h-[600px]"
          >
            <div className="absolute right-10 top-10 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-[#F56B0A]">
                  <Bot size={19} />
                </div>

                <div>
                  <div className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    SYSTEM
                  </div>
                  <div className="text-sm font-bold text-[#0B2A4A]">
                    READY TO BUILD
                  </div>
                </div>
              </div>
            </div>

            {/* THIS IS THE IMPORTED COMPONENT */}
            <RoboticArm />

          </Reveal>

        </div>

        {/* Bottom indicator */}

        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-slate-400 sm:flex">
          <span>SCROLL TO EXPLORE</span>

          <span className="h-8 w-px bg-slate-300" />
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative bg-[#0B2A4A] py-24 text-white">

        <div className="pointer-events-none absolute inset-0 opacity-20">
          <CircuitPattern />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <div className="mb-5 text-xs font-bold tracking-[0.25em] text-orange-400">
                WHY ROBOTICS?
              </div>

              <h2 className="max-w-md text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
                Don't just learn
                <span className="text-orange-400"> technology.</span>
                <br />
                Build it.
              </h2>
            </div>

            <div className="max-w-2xl">

              <p className="text-lg leading-8 text-slate-300">
                Robotics is where multiple worlds come together —
                programming, electronics, mechanical engineering,
                mathematics and creativity.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                At Wisenery, students don't simply read about robots.
                They understand the components, write the logic,
                experiment with mechanisms and turn their ideas into
                working machines.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          ROADMAP
      ===================================================== */}

      <section
        id="robotics-roadmap"
        className="relative bg-white py-24"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal className="max-w-2xl">

            <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#F56B0A]">
              LEARNING ROADMAP
            </div>

            <h2 className="text-4xl font-black tracking-[-0.03em] text-[#0B2A4A] sm:text-5xl">
              From curiosity
              <br />
              to creation.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              A structured path that gradually takes students from
              understanding robotic systems to building and programming
              their own machines.
            </p>

          </Reveal>


          <div className="relative mt-16">

            {/* Timeline */}

            <div className="absolute left-[27px] top-5 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-orange-400 via-slate-200 to-orange-400 md:block" />

            <div className="space-y-10">

              {learningCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.number}
                    delay={index * 100}
                    className="relative"
                  >

                    <div className="grid gap-6 md:grid-cols-[56px_1fr]">

                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-white text-[#F56B0A] shadow-[0_8px_25px_rgba(15,23,42,0.08)]">
                        <Icon size={23} />
                      </div>

                      <div className="rounded-3xl border border-slate-200 bg-[#fffdf9] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]">

                        <div className="flex flex-wrap items-center justify-between gap-4">

                          <div>
                            <div className="mb-2 text-xs font-bold tracking-[0.18em] text-orange-500">
                              STEP {item.number}
                            </div>

                            <h3 className="text-2xl font-black text-[#0B2A4A]">
                              {item.title}
                            </h3>
                          </div>

                          <div className="hidden rounded-full bg-orange-50 p-3 text-orange-500 sm:block">
                            <ChevronRight size={20} />
                          </div>

                        </div>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </Reveal>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT STUDENTS LEARN
      ===================================================== */}

      <section className="bg-[#fff7ef] py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal className="text-center">

            <div className="text-xs font-bold tracking-[0.25em] text-[#F56B0A]">
              SKILLS THAT MATTER
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] text-[#0B2A4A] sm:text-5xl">
              More than just robots.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Robotics teaches students how to think, experiment,
              solve problems and turn abstract ideas into something real.
            </p>

          </Reveal>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Lightbulb,
                title: "Creative Thinking",
                text: "Turn ideas into working solutions.",
              },
              {
                icon: Brain,
                title: "Problem Solving",
                text: "Break complex problems into smaller steps.",
              },
              {
                icon: Code2,
                title: "Logical Thinking",
                text: "Develop programming and computational logic.",
              },
              {
                icon: Wrench,
                title: "Engineering Skills",
                text: "Learn by designing, building and testing.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="h-full"
                >

                  <div className="group h-full rounded-3xl border border-orange-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#F56B0A] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-xl font-black text-[#0B2A4A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="robotics-projects"
        className="relative overflow-hidden bg-[#0B2A4A] py-24 text-white"
      >

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <div className="mb-4 text-xs font-bold tracking-[0.25em] text-orange-400">
                  BUILD SOMETHING REAL
                </div>

                <h2 className="text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                  Projects that
                  <br />
                  make learning stick.
                </h2>
              </div>

              <p className="max-w-md leading-7 text-slate-400">
                Students learn faster when they can see their ideas
                physically come alive. That's why projects are at the
                heart of robotics learning.
              </p>

            </div>

          </Reveal>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal
                  key={project.title}
                  delay={index * 100}
                >

                  <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40">

                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-500/10 blur-[60px] transition-opacity duration-500 group-hover:bg-orange-500/20" />

                    <div className="relative z-10">

                      <div className="flex items-start justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
                          <Icon size={25} />
                        </div>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-slate-400">
                          {project.tag}
                        </span>

                      </div>

                      <h3 className="mt-8 text-2xl font-black">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {project.text}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-sm font-bold text-orange-400">
                        BUILD & EXPLORE
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>

                    </div>

                  </div>

                </Reveal>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#F56B0A]">
                BEYOND THE CLASSROOM
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#0B2A4A] sm:text-5xl">
                Robotics is
                <br />
                everywhere.
              </h2>

              <p className="mt-6 max-w-md leading-7 text-slate-600">
                The concepts students learn today are the same ideas
                powering some of the world's most exciting technologies.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {applications.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 80}
                  >

                    <div className="group h-full rounded-3xl border border-slate-200 bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B2A4A] text-white transition-colors duration-300 group-hover:bg-[#F56B0A]">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-5 text-lg font-black text-[#0B2A4A]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>

                    </div>

                  </Reveal>
                );
              })}

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY WISENERY
      ===================================================== */}

      <section className="bg-[#fff7ef] py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <Reveal className="text-center">

            <div className="mb-4 text-xs font-bold tracking-[0.25em] text-[#F56B0A]">
              WHY WISENERY
            </div>

            <h2 className="text-4xl font-black tracking-[-0.03em] text-[#0B2A4A] sm:text-5xl">
              Learn by doing.
              <br />
              <span className="text-[#F56B0A]">Always.</span>
            </h2>

          </Reveal>


          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Understand",
                text: "Learn the concepts behind every component and system.",
              },
              {
                number: "02",
                title: "Experiment",
                text: "Test ideas, make mistakes and discover how things work.",
              },
              {
                number: "03",
                title: "Create",
                text: "Turn your knowledge into robots and real-world projects.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.number}
                delay={index * 100}
              >

                <div className="relative h-full rounded-3xl border border-orange-100 bg-white p-7">

                  <div className="text-5xl font-black tracking-[-0.05em] text-orange-100">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#0B2A4A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.text}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F56B0A] py-24 text-white">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-[90px]" />

          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-300/20 blur-[100px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-8">

          <Reveal>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <Sparkles size={30} />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] sm:text-6xl">
              Ready to build
              <br />
              something amazing?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
              Start exploring robotics with Wisenery and discover what
              you can create when technology becomes your playground.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="#courses"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black text-[#F56B0A] shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Courses

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-white/10"
              >
                Talk to Us
                <ArrowUpRight size={17} />
              </a>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}