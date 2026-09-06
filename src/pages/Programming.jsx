import React, { useEffect, useRef, useState,useMemo } from "react";
import {
  ArrowRight,
  BookOpen,
  Braces,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Sparkles,
  Terminal,
  Boxes,
  Binary,
  Globe2,
  Rocket,
  BriefcaseBusiness,
  Compass,
  ArrowUpRight,
} from "lucide-react";

/* =============================================================
   THEME — navy + orange, nothing else added to the core palette
============================================================= */
const COLORS = {
  navy: "#0B2A4A",
  navyDeep: "#071D34",
  navyPanel: "#0A2440",
  orange: "#F56B0A",
  orangeLight: "#FDBA74",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",
  white: "#FFFFFF",
};

const ROADMAP = [
  {
    id: "programming",
    number: "01",
    title: "Programming",
    description:
      "Build a strong coding foundation and learn how to think like a programmer.",
    topics: [
      "Programming logic",
      "Variables & data types",
      "Conditions & loops",
      "Functions",
      "Object-oriented programming",
    ],
    icon: Code2,
  },
  {
    id: "dsa",
    number: "02",
    title: "DSA",
    description:
      "Master the core data structures and algorithms used to solve real programming problems.",
    topics: [
      "Arrays & Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & Graphs",
      "Searching & Sorting",
      "Dynamic Programming",
    ],
    icon: Layers3,
  },
  {
    id: "fundamentals",
    number: "03",
    title: "CS Fundamentals",
    description:
      "Understand what happens behind the code with the essential concepts every developer needs.",
    topics: [
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "OOP",
      "Computer Architecture",
    ],
    icon: BookOpen,
  },
  {
    id: "git",
    number: "04",
    title: "Git / GitHub",
    description:
      "Learn how professional developers manage, collaborate and ship code.",
    topics: [
      "Git basics",
      "Branches",
      "Merge & Rebase",
      "Pull Requests",
      "GitHub workflow",
      "Collaboration",
    ],
    icon: GitBranch,
  },
  {
    id: "development",
    number: "05",
    title: "Development",
    description:
      "Turn your programming knowledge into real-world applications people can use.",
    topics: [
      "Frontend Development",
      "Backend Development",
      "APIs",
      "Authentication",
      "Deployment",
      "Full Stack Projects",
    ],
    icon: Code2,
  },
  {
    id: "sql",
    number: "06",
    title: "SQL",
    description:
      "Learn how applications store, organize and retrieve the data they depend on.",
    topics: [
      "SQL Queries",
      "Joins",
      "Database Design",
      "Normalization",
      "Indexes",
      "Transactions",
    ],
    icon: Database,
  },
  {
    id: "ai",
    number: "07",
    title: "AI",
    description:
      "Explore modern AI concepts and learn how intelligent applications are built.",
    topics: [
      "AI Fundamentals",
      "Machine Learning Basics",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "AI Applications",
    ],
    icon: Brain,
  },
  {
    id: "cloud",
    number: "08",
    title: "Cloud",
    description:
      "Understand how applications move from your computer to the internet.",
    topics: [
      "Cloud Fundamentals",
      "Servers",
      "Storage",
      "Deployment",
      "CI/CD",
      "Cloud Services",
    ],
    icon: Cloud,
  },
  {
    id: "projects",
    number: "09",
    title: "Projects",
    description:
      "Put everything together and build projects that demonstrate what you can actually do.",
    topics: [
      "Portfolio Projects",
      "Real-world Applications",
      "Team Projects",
      "Open Source",
      "Project Documentation",
    ],
    icon: Sparkles,
  },
  {
    id: "internship",
    number: "10",
    title: "Internship",
    description:
      "Become industry-ready with the skills, portfolio and confidence needed to start your career.",
    topics: [
      "Resume Building",
      "Portfolio",
      "Interview Preparation",
      "Technical Interviews",
      "Mock Interviews",
      "Career Guidance",
    ],
    icon: Briefcase,
  },
];

/* =============================================================
   CODE WINDOW — the hero's centerpiece. The roadmap, written
   as the code a learner will eventually be able to write.
============================================================= */
const CODE_LINES = [
  [{ t: "const ", c: "kw" }, { t: "careerPath", c: "var" }, { t: " = [", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Programming'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Data Structures & Algorithms'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'CS Fundamentals'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Git & GitHub'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Full-Stack Development'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'SQL'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Applied AI'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Cloud'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "  ", c: "plain" }, { t: "'Projects'", c: "str" }, { t: ",", c: "punc" }],
  [{ t: "];", c: "punc" }],
  [{ t: "", c: "plain" }],
  [{ t: "while", c: "kw" }, { t: " (", c: "punc" }, { t: "!you", c: "var" }, { t: ".ready) ", c: "plain" }, { t: "{", c: "punc" }],
  [{ t: "  you", c: "var" }, { t: ".learn(", c: "fn" }, { t: "careerPath", c: "var" }, { t: ");", c: "punc" }],
  [{ t: "}", c: "punc" }],
  [{ t: "", c: "plain" }],
  [{ t: "launch", c: "fn" }, { t: "(", c: "punc" }, { t: "'internship'", c: "str" }, { t: ");", c: "punc" }],
];

const TOKEN_COLOR = {
  kw: COLORS.orange,
  var: COLORS.slate200,
  str: COLORS.orangeLight,
  fn: COLORS.white,
  punc: COLORS.slate500,
  plain: COLORS.slate300,
};

function CodeWindow() {
  const [lineCount, setLineCount] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      reducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    if (reducedMotion.current) {
      setLineCount(CODE_LINES.length);
      return;
    }

    let i = 0;
    let timeout;

    const step = () => {
      i += 1;
      setLineCount(i);
      if (i >= CODE_LINES.length) {
        timeout = setTimeout(() => {
          i = 0;
          setLineCount(0);
          timeout = setTimeout(step, 420);
        }, 1800);
      } else {
        timeout = setTimeout(step, 220);
      }
    };

    timeout = setTimeout(step, 420);
    return () => clearTimeout(timeout);
  }, []);

  const isComplete = lineCount >= CODE_LINES.length;

  return (
    <div
      className="code-window w-full max-w-md overflow-hidden rounded-2xl border shadow-2xl"
      style={{
        borderColor: "rgba(255,255,255,0.10)",
        backgroundColor: COLORS.navyPanel,
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* Tab bar */}
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F87171" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#FBBF24" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#34D399" }} />
        <div className="ml-2 flex items-center gap-1.5" style={{ color: COLORS.slate400 }}>
          <Terminal size={12} />
          <span className="font-mono text-[11px]">career.js</span>
        </div>
      </div>

      {/* Code body */}
      <div className="px-5 py-5">
        <pre className="font-mono text-[12.5px] leading-6" style={{ margin: 0 }}>
          {CODE_LINES.map((line, idx) => {
            const visible = idx < lineCount;
            const isLastVisible = idx === lineCount - 1;
            return (
              <div key={idx} className="flex">
                <span
                  className="mr-4 select-none text-right"
                  style={{ width: "1.4rem", color: "rgba(148,163,184,0.35)" }}
                >
                  {idx + 1}
                </span>
                <span>
                  {visible &&
                    line.map((tok, tIdx) => (
                      <span key={tIdx} style={{ color: TOKEN_COLOR[tok.c] }}>
                        {tok.t}
                      </span>
                    ))}
                  {isLastVisible && !isComplete && (
                    <span className="code-caret" style={{ color: COLORS.orange }}>
                      ▍
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </pre>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between border-t px-5 py-3 font-mono text-[11px]"
        style={{ borderColor: "rgba(255,255,255,0.08)", color: COLORS.slate400 }}
      >
        <span>
          {isComplete ? (
            <span style={{ color: "#34D399" }}>✓ build succeeded</span>
          ) : (
            <span>compiling curriculum…</span>
          )}
        </span>
        <span style={{ color: COLORS.orange }}>10 / 10 stages</span>
      </div>
    </div>
  );
}

/* =============================================================
   HERO
============================================================= */
function Hero() {
  return (
    <section
      className="programming-hero relative overflow-hidden"
      style={{ backgroundColor: COLORS.navy }}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pg-grid"
            width="46"
            height="46"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M46 0H0V46"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>

          <radialGradient
            id="pg-glow-orange"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor={COLORS.orange}
              stopOpacity="0.22"
            />
            <stop
              offset="60%"
              stopColor={COLORS.orange}
              stopOpacity="0.05"
            />
            <stop
              offset="100%"
              stopColor={COLORS.orange}
              stopOpacity="0"
            />
          </radialGradient>

          <linearGradient
            id="pg-depth"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={COLORS.navyDeep}
              stopOpacity="0"
            />
            <stop
              offset="100%"
              stopColor={COLORS.navyDeep}
              stopOpacity="0.55"
            />
          </linearGradient>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#pg-grid)"
        />

        <ellipse
          cx="1220"
          cy="260"
          rx="520"
          ry="400"
          fill="url(#pg-glow-orange)"
        />

        <rect
          width="100%"
          height="100%"
          fill="url(#pg-depth)"
        />
      </svg>

      {/* =====================================================
          FLOATING CODE SYMBOLS
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="code-float code-float-1">
          {"{ }"}
        </span>

        <span className="code-float code-float-2">
          {"</>"}
        </span>

        <span className="code-float code-float-3">
          {"=>"}
        </span>

        <span className="code-float code-float-4">
          {"&&"}
        </span>

        <span className="code-float code-float-5">
          {"[ ]"}
        </span>

        <span className="code-float code-float-6">
          {"while()"}
        </span>
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT — COPY
          ================================================= */}
          <div className="relative z-10">

            {/* Stage badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{
                borderColor: "rgba(245,107,10,0.35)",
                backgroundColor: "rgba(245,107,10,0.08)",
              }}
            >
              <Braces
                size={13}
                style={{ color: COLORS.orange }}
              />

              <span
                className="text-xs font-semibold"
                style={{ color: COLORS.orangeLight }}
              >
                Stage 01 of 10 — Programming
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              From your first variable to your first internship.
            </h1>

            {/* Description */}
            <p
              className="mt-6 max-w-lg text-base leading-7 sm:text-lg"
              style={{ color: COLORS.slate300 }}
            >
              A structured programming journey that takes you from
              zero to shipping real projects, working like a
              developer, and starting your career.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#roadmap"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: COLORS.orange,
                  boxShadow:
                    "0 10px 30px rgba(245,107,10,0.25)",
                }}
              >
                Start the roadmap

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#build"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/5"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                See what you'll build
              </a>

            </div>

            {/* Stats */}
            <div
              className="mt-14 grid max-w-md grid-cols-2 gap-8 border-t pt-7"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div>
                <div className="text-3xl font-black text-white">
                  10
                </div>

                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.slate400 }}
                >
                  Stages, start to internship
                </div>
              </div>

              <div>
                <div className="text-3xl font-black text-white">
                  30+
                </div>

                <div
                  className="mt-1 text-xs"
                  style={{ color: COLORS.slate400 }}
                >
                  Topics you'll actually use
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — STATIC CODE WINDOW
          ================================================= */}
          <div className="relative z-10 flex min-w-0 justify-center lg:justify-end">

            {/* 
              IMPORTANT:
              This frame NEVER changes size while CodeWindow
              types. The code lives inside this fixed area.
            */}
            <div
              className="
                code-window-wrap
                relative
                h-[380px]
                w-full
                max-w-[560px]
                overflow-hidden
                sm:h-[400px]
                lg:h-[420px]
                lg:w-[560px]
                lg:max-w-[560px]
                shrink-0
              "
            >
              <div className="h-full w-full overflow-hidden">
                <CodeWindow />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(7,29,52,0.4))",
        }}
      />

      {/* =====================================================
          HERO ANIMATIONS
      ===================================================== */}
      <style>{`
        .code-float {
          position: absolute;
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Consolas,
            monospace;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.10);
          animation: pg-float 9s ease-in-out infinite;
        }

        .code-float-1 {
          top: 14%;
          left: 6%;
          animation-delay: 0s;
        }

        .code-float-2 {
          top: 68%;
          left: 10%;
          animation-delay: 1.4s;
        }

        .code-float-3 {
          top: 30%;
          left: 88%;
          animation-delay: 2.6s;
        }

        .code-float-4 {
          top: 80%;
          left: 82%;
          animation-delay: 0.7s;
        }

        .code-float-5 {
          top: 8%;
          left: 92%;
          animation-delay: 3.2s;
        }

        .code-float-6 {
          top: 52%;
          left: 3%;
          animation-delay: 4.1s;
        }

        @keyframes pg-float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.10;
          }

          50% {
            transform: translateY(-14px);
            opacity: 0.22;
          }
        }

        .code-caret {
          display: inline-block;
          animation: pg-blink 1s steps(1) infinite;
        }

        @keyframes pg-blink {
          0%, 49% {
            opacity: 1;
          }

          50%, 100% {
            opacity: 0;
          }
        }

        /*
          The code frame itself has a fixed footprint.
          Typing inside CodeWindow must not resize this area.
        */
        .code-window-wrap {
          animation:
            pg-rise
            0.9s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;

          contain: layout;
        }

        .code-window-wrap > div {
          width: 100%;
          height: 100%;
          min-width: 0;
          min-height: 0;
        }

        /*
          Prevent CodeWindow content from changing
          the dimensions of the hero grid.
        */
        .code-window-wrap * {
          box-sizing: border-box;
        }

        @keyframes pg-rise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .code-float,
          .code-caret,
          .code-window-wrap {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =============================================================
   ROADMAP TIMELINE
============================================================= */
function StageCard({ stage, align }) {
  return (
    <div
      className="stage-card rounded-2xl border p-6"
      style={{ borderColor: COLORS.slate200, backgroundColor: COLORS.white }}
    >
      <span className="font-mono text-xs font-bold" style={{ color: COLORS.orange }}>
        {stage.number}
      </span>
      <h3 className="mt-2 text-lg font-black" style={{ color: COLORS.navy }}>
        {stage.title}
      </h3>
      <p className="mt-2 text-sm leading-6" style={{ color: COLORS.slate500 }}>
        {stage.description}
      </p>
      <div className={`mt-4 flex flex-wrap gap-1.5 ${align === "right" ? "lg:justify-end" : ""}`}>
        {stage.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full px-2.5 py-1 text-xs font-semibold"
            style={{ backgroundColor: COLORS.slate50, color: COLORS.slate600 }}
          >
            {topic}
          </span>
        ))}
      </div>

      <style>{`
        .stage-card { transition: border-color 200ms ease; }
        .stage-card:hover { border-color: ${COLORS.orange}; }
      `}</style>
    </div>
  );
}

function TimelineRow({ stage, index, side, onFocus, active }) {
  const isLeft = side === "left";
  return (
    <div
      className={`relative flex w-full items-center ${isLeft ? "justify-start lg:pr-[54%]" : "justify-start lg:justify-end lg:pl-[54%]"}`}
    >
      <button
        onClick={() => onFocus(index)}
        className="group w-full rounded-2xl px-6 py-5 text-left transition-colors sm:w-[420px] lg:w-full"
        style={{
          backgroundColor: COLORS.white,
          border: `1px solid ${active ? COLORS.navy : COLORS.slate200}`,
        }}
      >
        <div className="flex items-baseline gap-3">
          <span
            className="text-xs font-semibold tabular-nums"
            style={{ color: active ? COLORS.navy : COLORS.slate500 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold" style={{ color: COLORS.navy }}>
            {stage.title}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-6" style={{ color: COLORS.slate500 }}>
          {stage.description}
        </p>
      </button>
    </div>
  );
}







// ─────────────────────────────────────────────────────────
// Geometry: build one smooth S-curve that visits every node,
// alternating which side of the section it swings toward.
// ─────────────────────────────────────────────────────────
function buildPath(count, rowHeight, width) {
  const leftX = width * 0.22;
  const rightX = width * 0.78;
  const points = Array.from({ length: count }, (_, i) => ({
    x: i % 2 === 0 ? leftX : rightX,
    y: rowHeight * i + rowHeight / 2,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  return { d, points };
}



function RoadmapSection() {
  const courses = [
    {
      id: 1,
      number: "01",
      title: "Programming Fundamentals",
      description:
        "Build the mental model behind programming. Learn variables, conditions, loops, functions and problem-solving.",
      topics: ["Variables", "Loops", "Functions", "Logic"],
      level: "BEGINNER",
      duration: "4 weeks",
      progress: "Start here",
      icon: Braces,
      featured: true,
    },
    {
      id: 2,
      number: "02",
      title: "Programming with JavaScript",
      description:
        "Turn programming concepts into working applications and start writing code like a developer.",
      topics: ["JavaScript", "ES6", "Arrays", "Functions"],
      level: "BEGINNER",
      duration: "5 weeks",
      progress: "Core skill",
      icon: Code2,
    },
    {
      id: 3,
      number: "03",
      title: "Object-Oriented Programming",
      description:
        "Understand how larger applications are structured using objects, classes and reusable code.",
      topics: ["Objects", "Classes", "Inheritance", "Patterns"],
      level: "INTERMEDIATE",
      duration: "3 weeks",
      progress: "Level up",
      icon: Boxes,
    },
    {
      id: 4,
      number: "04",
      title: "Git & GitHub",
      description:
        "Learn the workflow real developers use to manage code, collaborate and ship projects.",
      topics: ["Git", "GitHub", "Branches", "Pull Requests"],
      level: "BEGINNER",
      duration: "2 weeks",
      progress: "Developer tool",
      icon: GitBranch,
    },
    {
      id: 5,
      number: "05",
      title: "Data Structures & Algorithms",
      description:
        "Train your problem-solving skills and learn the foundations behind efficient software.",
      topics: ["Arrays", "Stacks", "Trees", "Algorithms"],
      level: "INTERMEDIATE",
      duration: "6 weeks",
      progress: "Deep dive",
      icon: Binary,
    },
    {
      id: 6,
      number: "06",
      title: "Web Development",
      description:
        "Bring your programming skills to the browser and start building interfaces people can use.",
      topics: ["HTML", "CSS", "React", "APIs"],
      level: "INTERMEDIATE",
      duration: "6 weeks",
      progress: "Build things",
      icon: Globe2,
    },
    {
      id: 7,
      number: "07",
      title: "Databases",
      description:
        "Learn how applications store, query and organize the data behind the interface.",
      topics: ["SQL", "PostgreSQL", "Queries", "Schema"],
      level: "INTERMEDIATE",
      duration: "4 weeks",
      progress: "Backend",
      icon: Database,
    },
    {
      id: 8,
      number: "08",
      title: "Real-World Projects",
      description:
        "Stop following tutorials. Plan, build, debug and ship projects you can actually show.",
      topics: ["Planning", "APIs", "Debugging", "Projects"],
      level: "ADVANCED",
      duration: "6 weeks",
      progress: "Portfolio",
      icon: Rocket,
      featured: true,
    },
    {
      id: 9,
      number: "09",
      title: "Deployment & Tools",
      description:
        "Learn what happens after your code works — environments, deployment and developer tooling.",
      topics: ["Deploy", "CLI", "Docker", "CI/CD"],
      level: "ADVANCED",
      duration: "3 weeks",
      progress: "Ship it",
      icon: Terminal,
    },
    {
      id: 10,
      number: "10",
      title: "Career Launch",
      description:
        "Turn your skills and projects into a portfolio, interview preparation and your first opportunity.",
      topics: ["Portfolio", "Resume", "Interviews", "Internships"],
      level: "CAREER",
      duration: "4 weeks",
      progress: "Get hired",
      icon: BriefcaseBusiness,
      featured: true,
    },
  ];

  const filters = [
    "All topics",
    "Foundations",
    "Development",
    "Data",
    "Tools",
    "Career",
  ];

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      style={{ backgroundColor: COLORS.slate50 }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Orange ambient glow */}
        <div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(245,107,10,0.07)",
          }}
        />

        <div
          className="absolute -right-32 top-[35%] h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(245,107,10,0.045)",
          }}
        />

        {/* Technical grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-50"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="programming-grid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M44 0H0V44"
                fill="none"
                stroke={COLORS.slate200}
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect
            width="100%"
            height="100%"
            fill="url(#programming-grid)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}
        <div className="relative">

          {/* Orange accent line */}
          <div
            className="mb-7 h-1 w-12 rounded-full"
            style={{
              backgroundColor: COLORS.orange,
            }}
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl">

              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{
                  borderColor: "rgba(245,107,10,0.28)",
                  backgroundColor: "rgba(245,107,10,0.07)",
                }}
              >
                <Compass
                  size={13}
                  style={{ color: COLORS.orange }}
                />

                <span
                  className="text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{
                    color: COLORS.orange,
                  }}
                >
                  Programming Explorer
                </span>
              </div>

              <h2
                className="mt-5 text-4xl font-black tracking-tight sm:text-5xl"
                style={{ color: COLORS.navy }}
              >
                Explore the
                <span
                  className="ml-2"
                  style={{ color: COLORS.orange }}
                >
                  programming world.
                </span>
              </h2>

              <p
                className="mt-5 max-w-xl text-base leading-7"
                style={{
                  color: COLORS.slate500,
                }}
              >
                Programming isn't one skill. It's a whole world of
                concepts, tools and technologies. Explore the areas
                that turn you from someone who writes code into
                someone who can build with it.
              </p>
            </div>

            {/* Explorer counter */}
            <div
              className="relative overflow-hidden rounded-2xl border bg-white px-6 py-5 shadow-sm"
              style={{
                borderColor: COLORS.slate200,
              }}
            >
              {/* Orange corner */}
              <div
                className="absolute right-0 top-0 h-12 w-12"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 50%, rgba(245,107,10,0.12) 50%)",
                }}
              />

              <div className="flex items-center gap-4">

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: COLORS.navy,
                    color: COLORS.orange,
                  }}
                >
                  <Compass size={21} />
                </div>

                <div>
                  <div
                    className="font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      color: COLORS.orange,
                    }}
                  >
                    Explore
                  </div>

                  <div
                    className="mt-1 text-sm font-black"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    10 learning areas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FILTER BAR
        ================================================= */}
        <div className="mt-12 flex flex-wrap items-center gap-2">

          {filters.map((filter, index) => (
            <button
              key={filter}
              className="group rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200"
              style={{
                backgroundColor:
                  index === 0 ? COLORS.orange : "#fff",
                borderColor:
                  index === 0
                    ? COLORS.orange
                    : COLORS.slate200,
                color:
                  index === 0
                    ? "#fff"
                    : COLORS.slate500,
                boxShadow:
                  index === 0
                    ? "0 6px 18px rgba(245,107,10,0.18)"
                    : "none",
              }}
            >
              {filter}
            </button>
          ))}

          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: COLORS.orange,
                boxShadow: "0 0 0 4px rgba(245,107,10,0.10)",
              }}
            />

            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-wider"
              style={{
                color: COLORS.slate400,
              }}
            >
              30+ practical topics
            </span>
          </div>
        </div>

        {/* =================================================
            COURSE GRID
        ================================================= */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article
                key={course.id}
                className={`
                  group relative overflow-hidden rounded-2xl
                  border bg-white
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(7,29,52,0.10)]
                  ${course.featured ? "lg:col-span-1" : ""}
                `}
                style={{
                  borderColor: course.featured
                    ? "rgba(245,107,10,0.25)"
                    : COLORS.slate200,
                }}
              >
                {/* Orange top accent */}
                <div
                  className="absolute left-0 right-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{
                    backgroundColor: course.featured
                      ? COLORS.orange
                      : "rgba(245,107,10,0.16)",
                  }}
                />

                {/* Background number */}
                <div
                  className="pointer-events-none absolute -bottom-8 -right-2 select-none font-mono text-8xl font-black transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    color: course.featured
                      ? "rgba(245,107,10,0.055)"
                      : "rgba(7,29,52,0.035)",
                  }}
                >
                  {course.number}
                </div>

                <div className="relative p-6 sm:p-7">

                  {/* Card header */}
                  <div className="flex items-start justify-between">

                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: course.featured
                          ? "rgba(245,107,10,0.10)"
                          : COLORS.slate50,
                        color: course.featured
                          ? COLORS.orange
                          : COLORS.navy,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="text-right">

                      <div
                        className="font-mono text-xs font-black"
                        style={{
                          color: course.featured
                            ? COLORS.orange
                            : COLORS.slate300,
                        }}
                      >
                        {course.number}
                      </div>

                      <div
                        className="mt-1 text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          color: COLORS.slate300,
                        }}
                      >
                        {course.progress}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-6 text-xl font-black tracking-tight"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 text-sm leading-6"
                    style={{
                      color: COLORS.slate500,
                    }}
                  >
                    {course.description}
                  </p>

                  {/* Topics */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {course.topics.map((topic, topicIndex) => (
                      <span
                        key={topic}
                        className="rounded-md border px-2.5 py-1 font-mono text-[10px] font-semibold"
                        style={{
                          borderColor:
                            topicIndex === 0 && course.featured
                              ? "rgba(245,107,10,0.20)"
                              : COLORS.slate200,
                          backgroundColor:
                            topicIndex === 0 && course.featured
                              ? "rgba(245,107,10,0.06)"
                              : COLORS.slate50,
                          color:
                            topicIndex === 0 && course.featured
                              ? COLORS.orange
                              : COLORS.slate500,
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Progress line */}
                  <div className="mt-7">

                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          color: COLORS.slate400,
                        }}
                      >
                        Skill path
                      </span>

                      <span
                        className="font-mono text-[9px] font-bold"
                        style={{
                          color: course.featured
                            ? COLORS.orange
                            : COLORS.slate400,
                        }}
                      >
                        {course.number} / 10
                      </span>
                    </div>

                    <div
                      className="h-1 overflow-hidden rounded-full"
                      style={{
                        backgroundColor: COLORS.slate100,
                      }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-500 group-hover:w-full"
                        style={{
                          width: `${course.id * 10}%`,
                          backgroundColor: course.featured
                            ? COLORS.orange
                            : "rgba(245,107,10,0.45)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="mt-6 flex items-center justify-between border-t pt-5"
                    style={{
                      borderColor: COLORS.slate100,
                    }}
                  >
                    <div className="flex items-center gap-3">

                      <span
                        className="text-[10px] font-black tracking-wider"
                        style={{
                          color:
                            course.level === "ADVANCED" ||
                            course.level === "CAREER"
                              ? COLORS.orange
                              : COLORS.slate400,
                        }}
                      >
                        {course.level}
                      </span>

                      <span
                        className="h-1 w-1 rounded-full"
                        style={{
                          backgroundColor: COLORS.slate300,
                        }}
                      />

                      <span
                        className="text-[10px] font-semibold"
                        style={{
                          color: COLORS.slate400,
                        }}
                      >
                        {course.duration}
                      </span>
                    </div>

                    {/* Explore */}
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        borderColor: course.featured
                          ? "rgba(245,107,10,0.25)"
                          : COLORS.slate200,
                        backgroundColor: course.featured
                          ? "rgba(245,107,10,0.05)"
                          : "transparent",
                        color: course.featured
                          ? COLORS.orange
                          : COLORS.slate400,
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}
        <div
          className="relative mt-8 overflow-hidden rounded-2xl"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          {/* Orange glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: "rgba(245,107,10,0.18)",
            }}
          />

          {/* Decorative code */}
          <div
            className="pointer-events-none absolute right-8 top-6 hidden font-mono text-xs leading-6 opacity-20 md:block"
            style={{
              color: COLORS.orangeLight,
            }}
          >
            <div>{"const skills = ["}</div>
            <div className="pl-4">"build",</div>
            <div className="pl-4">"ship",</div>
            <div className="pl-4">"grow"</div>
            <div>{"];"}</div>
          </div>

          <div className="relative flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: COLORS.orangeLight,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: COLORS.orange,
                  }}
                />
                Your programming journey
              </div>

              <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Learn the skill. Build the thing.
              </h3>

              <p
                className="mt-2 max-w-xl text-sm leading-6"
                style={{
                  color: COLORS.slate300,
                }}
              >
                Explore a topic, build something with it, then move
                deeper. That's how programming starts to click.
              </p>
            </div>

            <a
              href="#build"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: COLORS.orange,
                boxShadow:
                  "0 10px 30px rgba(245,107,10,0.22)",
              }}
            >
              Start building

              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   LEARN LOOP + BUILD SECTION
============================================================= */
function LearnLoop() {
  const steps = [
    { label: "Learn", icon: BookOpen },
    { label: "Practice", icon: Code2 },
    { label: "Build", icon: Layers3 },
    { label: "Ship", icon: Sparkles },
  ];

  return (
    <div className="rounded-3xl p-8" style={{ backgroundColor: COLORS.navy }}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.label}>
              <div className="flex flex-col items-center gap-3 text-center sm:flex-1">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border"
                  style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-sm font-bold text-white">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={18} className="hidden shrink-0 sm:block" style={{ color: COLORS.orange }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div>
          <div className="text-2xl font-black text-white">09</div>
          <div className="mt-1 text-xs" style={{ color: COLORS.slate400 }}>
            Projects
          </div>
        </div>
        <div>
          <div className="text-2xl font-black" style={{ color: COLORS.orange }}>
            10
          </div>
          <div className="mt-1 text-xs" style={{ color: COLORS.slate400 }}>
            Internship
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildSection() {
  const items = [
    "Ship a project after every major concept",
    "Work with real tools: Git, APIs, deployment",
    "Build a portfolio that proves what you can do",
    "Practice explaining your work like an engineer",
  ];

  return (
    <section id="build" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl" style={{ color: COLORS.navy }}>
              Knowledge only counts once you've built something with it.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7" style={{ color: COLORS.slate500 }}>
              Every stage in the roadmap loops back into the same cycle:
              learn it, practice it, build with it, ship it.
            </p>

            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: COLORS.orange }}
                  />
                  <span className="text-sm font-medium leading-6" style={{ color: COLORS.slate600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <LearnLoop />
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   FINAL CTA
============================================================= */
function InternshipCTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl px-7 py-16 text-center sm:px-14"
          style={{ backgroundColor: COLORS.navy }}
        >
          <span
            className="pointer-events-none absolute -right-6 -top-10 select-none text-9xl font-black"
            style={{ color: "rgba(255,255,255,0.05)" }}
          >
            10
          </span>

          <div className="relative mx-auto max-w-2xl">
            <div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: COLORS.orange }}
            >
              <Briefcase size={24} className="text-white" />
            </div>

            <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Stage ten is a job, not a certificate.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7" style={{ color: COLORS.slate300 }}>
              Follow the roadmap, ship the projects, and walk into your first
              internship ready to contribute from day one.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: COLORS.orange }}
              >
                Start your journey
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-bold text-white transition hover:opacity-80"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                Explore courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   PAGE
============================================================= */
export default function Programming() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: COLORS.navy }}>
      <Hero />
      <RoadmapSection />
      <BuildSection />
      <InternshipCTA />
    </div>
  );
}