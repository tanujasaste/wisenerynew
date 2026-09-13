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
  const [selectedLevel, setSelectedLevel] = useState(4);

  const levels = [
    { id: 4, label: "Class 4", group: "Primary" },
    { id: 5, label: "Class 5", group: "Primary" },
    { id: 6, label: "Class 6", group: "Middle School" },
    { id: 7, label: "Class 7", group: "Middle School" },
    { id: 8, label: "Class 8", group: "Middle School" },
    { id: 9, label: "Class 9", group: "Secondary" },
    { id: 10, label: "Class 10", group: "Secondary" },
    { id: 11, label: "Class 11", group: "Senior Secondary" },
    { id: 12, label: "Class 12", group: "Senior Secondary" },
    { id: 13, label: "Engineering", group: "Engineering" },
  ];

  const roadmap = {
    4: {
      title: "Class 4 Programming",
      subtitle: "Build curiosity and learn the basics of computational thinking.",
      topics: [
        {
          title: "Computational Thinking",
          description: "Learn how to break problems into simple logical steps.",
          icon: Braces,
        },
        {
          title: "Scratch",
          description: "Create animations, stories and simple games using blocks.",
          icon: Code2,
        },
        {
          title: "Logic & Patterns",
          description: "Develop sequencing, patterns and basic problem-solving skills.",
          icon: Binary,
        },
        {
          title: "Creative Projects",
          description: "Turn ideas into small interactive projects.",
          icon: Rocket,
        },
      ],
    },

    5: {
      title: "Class 5 Programming",
      subtitle: "Move from simple blocks to structured thinking and mini projects.",
      topics: [
        {
          title: "Scratch Projects",
          description: "Build games, animations and interactive stories.",
          icon: Code2,
        },
        {
          title: "Algorithms",
          description: "Understand instructions, sequences and step-by-step solutions.",
          icon: Binary,
        },
        {
          title: "Problem Solving",
          description: "Use logical thinking to solve beginner programming challenges.",
          icon: Braces,
        },
        {
          title: "Digital Skills",
          description: "Learn safe and productive use of computers and technology.",
          icon: Terminal,
        },
      ],
    },

    6: {
      title: "Class 6 Programming",
      subtitle: "Start writing real code while strengthening your logical thinking.",
      topics: [
        {
          title: "Python Basics",
          description: "Write your first programs using Python.",
          icon: Code2,
        },
        {
          title: "Variables",
          description: "Store and work with numbers, text and other values.",
          icon: Braces,
        },
        {
          title: "Conditions",
          description: "Make programs take decisions using if and else.",
          icon: Binary,
        },
        {
          title: "Mini Projects",
          description: "Build calculators, quizzes and simple interactive programs.",
          icon: Rocket,
        },
      ],
    },

    7: {
      title: "Class 7 Programming",
      subtitle: "Go deeper into Python and start building more useful programs.",
      topics: [
        {
          title: "Python",
          description: "Strengthen Python fundamentals through practical programs.",
          icon: Code2,
        },
        {
          title: "Loops",
          description: "Automate repetitive tasks using for and while loops.",
          icon: Binary,
        },
        {
          title: "Functions",
          description: "Create reusable blocks of code to solve problems.",
          icon: Braces,
        },
        {
          title: "Problem Solving",
          description: "Apply programming logic to real-world challenges.",
          icon: Rocket,
        },
      ],
    },

    8: {
      title: "Class 8 Programming",
      subtitle: "Build stronger programming foundations and start exploring the web.",
      topics: [
        {
          title: "Python",
          description: "Work with lists, strings, functions and structured programs.",
          icon: Code2,
        },
        {
          title: "HTML & CSS",
          description: "Create and style your first webpages.",
          icon: Globe2,
        },
        {
          title: "Logic Building",
          description: "Solve increasingly complex programming problems.",
          icon: Binary,
        },
        {
          title: "Projects",
          description: "Build games, websites and useful beginner applications.",
          icon: Rocket,
        },
      ],
    },

    9: {
      title: "Class 9 Programming",
      subtitle: "Move toward text-based development and real-world coding.",
      topics: [
        {
          title: "Python",
          description: "Master core Python concepts and structured programming.",
          icon: Code2,
        },
        {
          title: "HTML & CSS",
          description: "Build responsive webpages and understand web structure.",
          icon: Globe2,
        },
        {
          title: "JavaScript Basics",
          description: "Add interaction and dynamic behaviour to webpages.",
          icon: Braces,
        },
        {
          title: "Problem Solving",
          description: "Develop algorithmic thinking through coding challenges.",
          icon: Binary,
        },
      ],
    },

    10: {
      title: "Class 10 Programming",
      subtitle: "Strengthen your coding foundation before moving into advanced development.",
      topics: [
        {
          title: "Python / Java",
          description: "Learn programming fundamentals through a structured language.",
          icon: Code2,
        },
        {
          title: "Data Structures",
          description: "Understand arrays, strings and basic data organization.",
          icon: Database,
        },
        {
          title: "Web Development",
          description: "Build webpages using HTML, CSS and JavaScript.",
          icon: Globe2,
        },
        {
          title: "Algorithms",
          description: "Learn how to approach problems efficiently.",
          icon: Binary,
        },
      ],
    },

    11: {
      title: "Class 11 Programming",
      subtitle: "Enter serious programming with computer science and development concepts.",
      topics: [
        {
          title: "Python / C++",
          description: "Build strong programming fundamentals with a powerful language.",
          icon: Code2,
        },
        {
          title: "Data Structures",
          description: "Learn arrays, stacks, queues and other core structures.",
          icon: Database,
        },
        {
          title: "OOP",
          description: "Understand classes, objects, inheritance and reusable code.",
          icon: Boxes,
        },
        {
          title: "SQL & Databases",
          description: "Learn how applications store and retrieve structured data.",
          icon: Database,
        },
      ],
    },

    12: {
      title: "Class 12 Programming",
      subtitle: "Prepare for engineering, competitive programming and real-world development.",
      topics: [
        {
          title: "Advanced Programming",
          description: "Strengthen C++, Python or Java through practical problems.",
          icon: Code2,
        },
        {
          title: "DSA",
          description: "Learn important data structures and algorithmic techniques.",
          icon: Binary,
        },
        {
          title: "Web Development",
          description: "Build complete frontend projects using modern web technologies.",
          icon: Globe2,
        },
        {
          title: "Projects & Git",
          description: "Create portfolio projects and learn professional development workflows.",
          icon: GitBranch,
        },
      ],
    },

    13: {
      title: "Engineering Programming",
      subtitle: "Move from learning syntax to becoming a software developer.",
      topics: [
        {
          title: "C / C++ / Java",
          description: "Build strong programming and object-oriented foundations.",
          icon: Code2,
        },
        {
          title: "Data Structures & Algorithms",
          description: "Master DSA for software development and technical interviews.",
          icon: Binary,
        },
        {
          title: "Full-Stack Development",
          description: "Learn HTML, CSS, JavaScript, React, Node.js and APIs.",
          icon: Globe2,
        },
        {
          title: "Databases & Backend",
          description: "Work with SQL, MongoDB, APIs and backend architecture.",
          icon: Database,
        },
        {
          title: "Git & GitHub",
          description: "Use professional version control and collaboration workflows.",
          icon: GitBranch,
        },
        {
          title: "Projects & Deployment",
          description: "Build, deploy and showcase real-world software projects.",
          icon: Rocket,
        },
      ],
    },
  };

  const active = roadmap[selectedLevel];

  const currentIndex = levels.findIndex(
    (level) => level.id === selectedLevel
  );

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      style={{ backgroundColor: COLORS.slate50 }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(245,107,10,0.055)",
          }}
        />

        <div
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(37,99,235,0.045)",
          }}
        />

        {/* Technical grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="programming-grade-grid"
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
            fill="url(#programming-grade-grid)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-10">
          <div
            className="mb-5 h-1 w-12 rounded-full"
            style={{
              backgroundColor: COLORS.orange,
            }}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{
                  borderColor: "rgba(245,107,10,0.25)",
                  backgroundColor: "rgba(245,107,10,0.06)",
                }}
              >
                <Compass
                  size={13}
                  style={{ color: COLORS.orange }}
                />

                <span
                  className="text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: COLORS.orange }}
                >
                  Programming Roadmap
                </span>
              </div>

              <h2
                className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                style={{ color: COLORS.navy }}
              >
                Learn programming,
                <span
                  className="ml-2"
                  style={{ color: COLORS.orange }}
                >
                  step by step.
                </span>
              </h2>

              <p
                className="mt-4 max-w-2xl text-sm leading-6 sm:text-base"
                style={{ color: COLORS.slate500 }}
              >
                Choose your class and discover the programming concepts,
                languages and skills you can learn at each stage.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            GRADE SELECTOR
        ===================================================== */}
        <div
          className="overflow-hidden rounded-2xl border bg-white p-6 sm:p-8"
          style={{
            borderColor: "rgba(245,107,10,0.18)",
          }}
        >
          {/* Selector heading */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: "rgba(245,107,10,0.10)",
                color: COLORS.orange,
              }}
            >
              <Code2 size={23} />
            </div>

            <div className="flex-1">
              <h3
                className="text-xl font-black sm:text-2xl"
                style={{ color: COLORS.navy }}
              >
                1. Select your level
              </h3>

              <div
                className="mt-2 h-px w-full"
                style={{
                  backgroundColor: "rgba(245,107,10,0.18)",
                }}
              />
            </div>
          </div>

          {/* =================================================
              TIMELINE
          ================================================= */}
          <div className="mt-9 overflow-x-auto pb-2">
            <div className="min-w-[850px]">

              {/* Circles + connecting line */}
              <div className="relative flex items-start justify-between">

                {/* Background line */}
                <div
                  className="absolute left-[3.5%] right-[3.5%] top-7 h-0.5"
                  style={{
                    backgroundColor: COLORS.slate200,
                  }}
                />

                {/* Active progress line */}
                <div
                  className="absolute left-[3.5%] top-7 h-0.5 transition-all duration-500"
                  style={{
                    width: `${
                      currentIndex === 0
                        ? 0
                        : (currentIndex / (levels.length - 1)) * 93
                    }%`,
                    backgroundColor: COLORS.orange,
                  }}
                />

                {levels.map((level, index) => {
                  const isActive = selectedLevel === level.id;
                  const isCompleted = index < currentIndex;

                  return (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className="group relative z-10 flex w-20 flex-col items-center outline-none"
                    >
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300"
                        style={{
                          backgroundColor: isActive
                            ? COLORS.orange
                            : "#fff",
                          borderColor:
                            isActive || isCompleted
                              ? COLORS.orange
                              : "#cbd5e1",
                          color: isActive
                            ? "#fff"
                            : COLORS.navy,
                          boxShadow: isActive
                            ? "0 8px 22px rgba(245,107,10,0.25)"
                            : "none",
                          transform: isActive
                            ? "scale(1.08)"
                            : "scale(1)",
                        }}
                      >
                        {level.id === 13 ? "ENG" : level.id}
                      </div>

                      <span
                        className="mt-3 whitespace-nowrap text-xs font-medium transition-colors"
                        style={{
                          color: isActive
                            ? COLORS.orange
                            : COLORS.navy,
                          fontWeight: isActive ? 700 : 500,
                        }}
                      >
                        {level.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Grade group labels */}
              <div className="mt-8 grid grid-cols-5 text-center">
                <div
                  className="border-t pt-3 text-xs"
                  style={{
                    borderColor: COLORS.slate200,
                    color: COLORS.slate500,
                  }}
                >
                  Primary
                </div>

                <div
                  className="border-t pt-3 text-xs"
                  style={{
                    borderColor: COLORS.slate200,
                    color: COLORS.slate500,
                  }}
                >
                  Middle School
                </div>

                <div
                  className="border-t pt-3 text-xs"
                  style={{
                    borderColor: COLORS.orange,
                    color: COLORS.orange,
                    fontWeight: 700,
                  }}
                >
                  Secondary
                </div>

                <div
                  className="border-t pt-3 text-xs"
                  style={{
                    borderColor: COLORS.slate200,
                    color: COLORS.slate500,
                  }}
                >
                  Senior Secondary
                </div>

                <div
                  className="border-t pt-3 text-xs"
                  style={{
                    borderColor: COLORS.slate200,
                    color: COLORS.slate500,
                  }}
                >
                  Engineering
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ACTIVE LEVEL CONTENT
        ===================================================== */}
        <div
          className="relative mt-4 overflow-hidden rounded-2xl border bg-white"
          style={{
            borderColor: "rgba(37,99,235,0.18)",
          }}
        >
          {/* Small active-level pointer */}
          <div
            className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45"
            style={{
              backgroundColor: "#2563eb",
            }}
          />

          {/* Header */}
          <div className="relative flex flex-col gap-5 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#eff6ff",
                  color: "#2563eb",
                }}
              >
                <Code2 size={27} />
              </div>

              <div>
                <h3
                  className="text-2xl font-black sm:text-3xl"
                  style={{ color: COLORS.navy }}
                >
                  {active.title}
                </h3>

                <p
                  className="mt-1 text-sm leading-6"
                  style={{ color: COLORS.slate500 }}
                >
                  {active.subtitle}
                </p>
              </div>
            </div>

            <div
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-4 py-2 text-xs font-bold md:self-center"
              style={{
                borderColor: "#dbeafe",
                backgroundColor: "#eff6ff",
                color: "#2563eb",
              }}
            >
              {selectedLevel === 13
                ? "Software Development"
                : `Class ${selectedLevel} Curriculum`}
            </div>
          </div>

          {/* =================================================
              TOPICS
          ================================================= */}
          <div className="grid gap-4 px-6 pb-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {active.topics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.title}
                  className="group rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(7,29,52,0.08)]"
                  style={{
                    borderColor: "#dbeafe",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: "#eff6ff",
                        color: "#2563eb",
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0">
                      <div
                        className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                        style={{
                          color: COLORS.orange,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h4
                        className="text-base font-black"
                        style={{
                          color: COLORS.navy,
                        }}
                      >
                        {topic.title}
                      </h4>

                      <p
                        className="mt-2 text-sm leading-5"
                        style={{
                          color: COLORS.slate500,
                        }}
                      >
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Footer */}
          <div
            className="flex flex-col gap-3 border-t px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
            style={{
              borderColor: COLORS.slate100,
              backgroundColor: "#fafcff",
            }}
          >
            <span
              className="text-xs font-semibold"
              style={{
                color: COLORS.slate400,
              }}
            >
              {selectedLevel === 13
                ? "From fundamentals to industry-ready development"
                : `Recommended programming path for ${active.title}`}
            </span>

            <span
              className="font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{
                color: COLORS.orange,
              }}
            >
              Learn • Build • Grow
            </span>
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
    </div>
  );
}