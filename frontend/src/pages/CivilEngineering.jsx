import React, { useEffect , useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Calculator,
  Compass,
  Layers3,
  Map,
  Ruler,
  Settings2,
  HardHat,
  ClipboardList,
  BarChart3,
  Boxes,
  CheckCircle2,
} from "lucide-react";
import ConstructionScene from "../components/ConstructionScene";

/* =============================================================
   THEME — same visual language as Programming page
============================================================= */

const COLORS = {
  navy: "#0B2A4A",
  navyDeep: "#071D34",
  navyPanel: "#0A2440",

  orange: "#F56B0A",
  orangeLight: "#FDBA74",

  // Civil Engineering Hero
  constructionDark: "#0D1B2A",
  constructionMid: "#10283D",
  constructionLight: "#16364D",

  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate500: "#64748B",
  slate600: "#475569",

  white: "#FFFFFF",
};

/* =============================================================
   CIVIL ENGINEERING STACK
============================================================= */

const CIVIL_STACK = [
  {
    number: "01",
    title: "CAD & BIM",
    description:
      "Create accurate engineering drawings, building models and coordinated digital construction workflows.",
    topics: ["AutoCAD", "Revit", "BIM", "Civil 3D"],
    icon: Ruler,
    featured: true,
    level: "CORE",
  },
  {
    number: "02",
    title: "Structural Engineering",
    description:
      "Understand structural modelling and analysis using industry-standard engineering software.",
    topics: ["STAAD.Pro", "ETABS", "Structural Design"],
    icon: Building2,
    featured: false,
    level: "ADVANCED",
  },
  {
    number: "03",
    title: "Quantity & Estimation",
    description:
      "Learn how drawings become quantities, estimates and professional bills of quantities.",
    topics: ["Quantity Estimation", "BOQ", "Advanced Excel"],
    icon: Calculator,
    featured: true,
    level: "PRACTICAL",
  },
  {
    number: "04",
    title: "Project Planning",
    description:
      "Plan construction activities, schedules, resources and project execution.",
    topics: ["Primavera P6", "Scheduling", "Planning"],
    icon: BarChart3,
    featured: false,
    level: "INDUSTRY",
  },
  {
    number: "05",
    title: "Geospatial Engineering",
    description:
      "Work with location-based data, mapping and spatial information used in civil projects.",
    topics: ["GIS", "Mapping", "Spatial Data"],
    icon: Map,
    featured: false,
    level: "SPECIALIZED",
  },
];

/* =============================================================
   BLUEPRINT HERO VISUAL
============================================================= */

function BlueprintPanel() {
  return (
    <div
      className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border shadow-2xl"
      style={{
        borderColor: "rgba(255,255,255,0.10)",
        backgroundColor: COLORS.navyPanel,
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between border-b px-5 py-3"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: COLORS.orange }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          />

          <span
            className="ml-2 font-mono text-[11px]"
            style={{ color: COLORS.slate400 }}
          >
            CIVIL_PROJECT.dwg
          </span>
        </div>

        <span
          className="font-mono text-[9px] uppercase tracking-widest"
          style={{ color: COLORS.orange }}
        >
          CAD MODEL
        </span>
      </div>

      {/* Blueprint */}
      <div className="relative h-[330px] overflow-hidden sm:h-[370px]">
        <svg
          viewBox="0 0 600 400"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="cadGrid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0H0V24"
                fill="none"
                stroke="rgba(255,255,255,0.055)"
                strokeWidth="1"
              />
            </pattern>

            <pattern
              id="cadSmallGrid"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M6 0H0V6"
                fill="none"
                stroke="rgba(255,255,255,0.025)"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>

          <rect width="600" height="400" fill="url(#cadSmallGrid)" />
          <rect width="600" height="400" fill="url(#cadGrid)" />

          {/* Building outline */}
          <g
            fill="none"
            stroke="rgba(253,186,116,0.85)"
            strokeWidth="2"
          >
            <rect x="120" y="85" width="330" height="210" />
            <rect x="145" y="110" width="115" height="75" />
            <rect x="285" y="110" width="140" height="75" />
            <rect x="145" y="210" width="115" height="60" />
            <rect x="285" y="210" width="140" height="60" />

            <line x1="260" y1="110" x2="260" y2="270" />
            <line x1="285" y1="185" x2="425" y2="185" />
          </g>

          {/* Doors */}
          <g
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1"
          >
            <path d="M195 185 A35 35 0 0 1 230 220" />
            <path d="M195 185 L195 220" />

            <path d="M285 250 A35 35 0 0 1 320 285" />
            <path d="M285 250 L285 285" />
          </g>

          {/* Dimensions */}
          <g
            fill="none"
            stroke={COLORS.orange}
            strokeWidth="1"
          >
            <line x1="120" y1="58" x2="450" y2="58" />
            <line x1="120" y1="52" x2="120" y2="65" />
            <line x1="450" y1="52" x2="450" y2="65" />

            <line x1="90" y1="85" x2="90" y2="295" />
            <line x1="84" y1="85" x2="96" y2="85" />
            <line x1="84" y1="295" x2="96" y2="295" />
          </g>

          {/* Dimension labels */}
          <g
            fill={COLORS.orangeLight}
            fontFamily="monospace"
            fontSize="10"
          >
            <text x="275" y="50">
              12.00 m
            </text>
            <text x="53" y="195" transform="rotate(-90 53 195)">
              8.00 m
            </text>

            <text x="135" y="330">
              GROUND FLOOR PLAN
            </text>

            <text x="430" y="75">
              A-01
            </text>
          </g>

          {/* Center marker */}
          <g
            stroke={COLORS.orange}
            strokeWidth="1"
            opacity="0.8"
          >
            <line x1="300" y1="40" x2="300" y2="360" />
            <line x1="55" y1="190" x2="545" y2="190" />
          </g>
        </svg>

        {/* Floating CAD labels */}
        <div
          className="absolute left-5 top-5 rounded-md border px-3 py-2 font-mono text-[9px]"
          style={{
            borderColor: "rgba(245,107,10,0.25)",
            backgroundColor: "rgba(7,29,52,0.78)",
            color: COLORS.orangeLight,
          }}
        >
          X: 124.52
          <br />
          Y: 084.20
        </div>

        <div
          className="absolute bottom-5 right-5 rounded-md border px-3 py-2 font-mono text-[9px]"
          style={{
            borderColor: "rgba(255,255,255,0.10)",
            backgroundColor: "rgba(7,29,52,0.78)",
            color: COLORS.slate300,
          }}
        >
          SCALE 1:100
          <br />
          UNITS: METRIC
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between border-t px-5 py-3 font-mono text-[10px]"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          color: COLORS.slate400,
        }}
      >
        <span className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#34D399" }}
          />
          MODEL COORDINATED
        </span>

        <span style={{ color: COLORS.orange }}>
          CAD / BIM / STRUCTURAL
        </span>
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
      className="relative isolate min-h-[710px] overflow-hidden lg:min-h-[730px]"
      style={{
        background:
          "linear-gradient(180deg, #061522 0%, #081D31 45%, #0B2A4A 100%)",
      }}
    >
      {/* =====================================================
          ARCHITECTURAL / BLUEPRINT BACKGROUND
      ====================================================== */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Very subtle drafting grid */}
          <pattern
            id="civilHeroGridV2"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M64 0H0V64"
              fill="none"
              stroke="rgba(174,214,230,0.028)"
              strokeWidth="1"
            />
          </pattern>

          {/* Larger architectural grid */}
          <pattern
            id="civilHeroMajorGridV2"
            width="320"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M320 0H0V320"
              fill="none"
              stroke="rgba(174,214,230,0.042)"
              strokeWidth="1"
            />
          </pattern>

          {/* Controlled Wisenery orange atmosphere */}
          <radialGradient
            id="civilHeroOrangeGlowV2"
            cx="74%"
            cy="58%"
            r="48%"
          >
            <stop
              offset="0%"
              stopColor={COLORS.orange}
              stopOpacity="0.075"
            />
            <stop
              offset="48%"
              stopColor={COLORS.orange}
              stopOpacity="0.018"
            />
            <stop
              offset="100%"
              stopColor={COLORS.orange}
              stopOpacity="0"
            />
          </radialGradient>

          {/* Soft blue depth behind the headline */}
          <radialGradient
            id="civilHeroBlueGlowV2"
            cx="50%"
            cy="30%"
            r="62%"
          >
            <stop
              offset="0%"
              stopColor="#245274"
              stopOpacity="0.24"
            />
            <stop
              offset="58%"
              stopColor="#163A56"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="#061522"
              stopOpacity="0"
            />
          </radialGradient>

          {/* Dark lower fade to merge the scene into the hero */}
          <linearGradient
            id="civilHeroBottomFadeV2"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#071A2B" stopOpacity="0" />
            <stop offset="62%" stopColor="#071A2B" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#061522" stopOpacity="0.72" />
          </linearGradient>

          {/* Edge vignette */}
          <radialGradient id="civilHeroVignetteV2" cx="50%" cy="45%" r="72%">
            <stop offset="58%" stopColor="#061522" stopOpacity="0" />
            <stop offset="100%" stopColor="#020B13" stopOpacity="0.34" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#civilHeroGridV2)" />
        <rect width="100%" height="100%" fill="url(#civilHeroMajorGridV2)" />
        <rect width="100%" height="100%" fill="url(#civilHeroBlueGlowV2)" />
        <rect width="100%" height="100%" fill="url(#civilHeroOrangeGlowV2)" />

        {/* =================================================
            LARGE ARCHITECTURAL GUIDE LINES
        ================================================== */}
        <g
          fill="none"
          stroke="#9BC0D1"
          strokeWidth="1"
          opacity="0.085"
        >
          {/* Main vertical datum */}
          <path d="M184 0V900" />
          <path d="M1416 0V900" />

          {/* Horizontal floor / level references */}
          <path d="M0 650H1600" />
          <path d="M0 720H1600" />

          {/* Perspective construction guides */}
          <path d="M800 430L210 900" />
          <path d="M800 430L1390 900" />
          <path d="M800 430L470 900" />
          <path d="M800 430L1130 900" />
        </g>

        {/* Orange technical datum marks */}
        <g
          fill="none"
          stroke={COLORS.orange}
          strokeWidth="2"
          opacity="0.25"
        >
          <path d="M184 146H230" />
          <path d="M1370 146H1416" />
          <path d="M184 650H224" />
          <path d="M1376 650H1416" />
        </g>

        {/* Small drafting crosshair */}
        <g
          fill="none"
          stroke="#A9C9D8"
          strokeWidth="1"
          opacity="0.10"
        >
          <circle cx="800" cy="430" r="13" />
          <path d="M778 430H822M800 408V452" />
        </g>

        <rect
          width="100%"
          height="100%"
          fill="url(#civilHeroBottomFadeV2)"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#civilHeroVignetteV2)"
        />
      </svg>

      {/* =====================================================
          SUBTLE ENGINEERING ANNOTATIONS
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="civil-float civil-float-1">A-101 / STRUCTURAL</span>
        <span className="civil-float civil-float-2">12.00 m</span>
        <span className="civil-float civil-float-3">∠ 90°</span>
        <span className="civil-float civil-float-4">GRID A-4</span>
        <span className="civil-float civil-float-5">R.C.C.</span>
        <span className="civil-float civil-float-6">LEVEL +3.600</span>
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="relative z-10 mx-auto flex min-h-[710px] max-w-7xl flex-col px-5 pb-[275px] pt-14 sm:px-8 sm:pb-[280px] sm:pt-16 lg:min-h-[730px] lg:px-10 lg:pb-[285px] lg:pt-[72px]"
      >
        <div className="mx-auto w-full text-center">
          {/* Badge */}
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "rgba(245,107,10,0.42)",
                background:
                  "linear-gradient(180deg, rgba(245,107,10,0.10), rgba(245,107,10,0.035))",
                boxShadow: "0 0 0 1px rgba(245,107,10,0.025)",
              }}
            >
              <HardHat size={13} style={{ color: COLORS.orange }} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.10em] sm:text-xs"
                style={{ color: COLORS.orangeLight }}
              >
                CIVIL ENGINEERING • INDUSTRY SKILLS
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="mx-auto mt-6 w-full max-w-[1240px] text-center text-[2.45rem] font-black uppercase leading-[0.96] tracking-[-0.045em] text-white sm:mt-7 sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.55rem] 2xl:text-[4.8rem]"
          >
            <span className="block whitespace-nowrap">
              FROM TECHNICAL DRAWINGS
            </span>
            <span
              className="mt-1 block whitespace-nowrap"
              style={{ color: COLORS.orange }}
            >
              REAL-WORLD STRUCTURES.
            </span>
          </h1>

          {/* Description */}
          <p
            className="mx-auto mt-7 max-w-4xl text-xs font-medium uppercase leading-6 tracking-[0.015em] sm:mt-8 sm:text-sm sm:leading-7 md:text-base"
            style={{ color: "rgba(226,232,240,0.78)" }}
          >
            BUILD PRACTICAL CIVIL ENGINEERING SKILLS ACROSS CAD, BIM,
            STRUCTURAL DESIGN, ESTIMATION, PROJECT PLANNING AND GIS — USING
            THE TOOLS PROFESSIONALS WORK WITH.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex justify-center gap-3 sm:mt-8">
            <a
              href="#roadmap"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-sm"
              style={{
                backgroundColor: COLORS.orange,
                boxShadow: "0 12px 32px rgba(245,107,10,0.20)",
              }}
            >
              EXPLORE THE ROADMAP
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#tools"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 sm:px-6 sm:py-3.5 sm:text-sm"
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
            >
              EXPLORE THE TOOLS
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONSTRUCTION SCENE
          Integrated into the lower hero instead of taking
          normal document space.
      ====================================================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[390px] sm:h-[390px]">
        {/* Soft transition behind the buildings */}
        <div
          className="absolute inset-x-0 bottom-0 h-[72%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,21,34,0) 0%, rgba(6,21,34,0.16) 42%, rgba(6,21,34,0.48) 100%)",
          }}
        />
        <ConstructionScene />
      </div>

      {/* =====================================================
          HERO CSS
      ====================================================== */}
      <style>{`
        .civil-float {
          position: absolute;
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Consolas,
            monospace;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(174,214,230,0.12);
          animation: civilFloat 10s ease-in-out infinite;
          white-space: nowrap;
        }

        .civil-float-1 {
          top: 17%;
          left: 5%;
        }

        .civil-float-2 {
          top: 62%;
          left: 8%;
          animation-delay: 1.5s;
        }

        .civil-float-3 {
          top: 27%;
          right: 5%;
          left: auto;
          animation-delay: 2.5s;
        }

        .civil-float-4 {
          top: 72%;
          right: 8%;
          left: auto;
          animation-delay: 3s;
        }

        .civil-float-5 {
          top: 12%;
          right: 10%;
          left: auto;
          animation-delay: 1s;
        }

        .civil-float-6 {
          top: 50%;
          left: 3%;
          animation-delay: 4s;
        }

        @keyframes civilFloat {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.10;
          }

          50% {
            transform: translateY(-6px);
            opacity: 0.16;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .civil-float {
            animation: none !important;
          }
        }

        @media (max-width: 767px) {
          .civil-float-1,
          .civil-float-4,
          .civil-float-5,
          .civil-float-6 {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .civil-float-2,
          .civil-float-3 {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =============================================================
   TOOLCHAIN / ROADMAP
============================================================= */

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
      title: "Class 4 Civil Engineering",
      subtitle:
        "Discover how buildings, roads and bridges are designed and built.",
      topics: [
        {
          title: "Amazing Structures",
          description:
            "Explore buildings, bridges, towers and other structures around us.",
          icon: Building2,
        },
        {
          title: "Shapes & Structures",
          description:
            "Understand how basic shapes are used to create strong structures.",
          icon: Boxes,
        },
        {
          title: "Measurement",
          description:
            "Learn basic length, height, distance and measurement concepts.",
          icon: Ruler,
        },
        {
          title: "Build & Create",
          description:
            "Design simple structures through fun hands-on activities.",
          icon: HardHat,
        },
      ],
    },

    5: {
      title: "Class 5 Civil Engineering",
      subtitle:
        "Start understanding the science behind the structures we see every day.",
      topics: [
        {
          title: "Buildings",
          description:
            "Learn the basic parts of a building and how they work together.",
          icon: Building2,
        },
        {
          title: "Bridges",
          description:
            "Discover different bridge types and why their shapes matter.",
          icon: Layers3,
        },
        {
          title: "Measurement",
          description:
            "Practice measurements, dimensions and simple scale concepts.",
          icon: Ruler,
        },
        {
          title: "Construction Basics",
          description:
            "Explore materials such as concrete, steel, bricks and wood.",
          icon: Boxes,
        },
      ],
    },

    6: {
      title: "Class 6 Civil Engineering",
      subtitle:
        "Build a foundation in geometry, materials and construction concepts.",
      topics: [
        {
          title: "Engineering Geometry",
          description:
            "Use lines, angles, shapes and measurements in engineering problems.",
          icon: Compass,
        },
        {
          title: "Construction Materials",
          description:
            "Understand common materials used to construct buildings and roads.",
          icon: Boxes,
        },
        {
          title: "Plans & Drawings",
          description:
            "Learn how simple drawings can represent real-world structures.",
          icon: Ruler,
        },
        {
          title: "Structures",
          description:
            "Explore how loads are transferred through simple structures.",
          icon: Building2,
        },
      ],
    },

    7: {
      title: "Class 7 Civil Engineering",
      subtitle:
        "Understand how engineers plan, measure and represent structures.",
      topics: [
        {
          title: "Technical Drawing",
          description:
            "Learn basic technical drawing, dimensions and visual representation.",
          icon: Ruler,
        },
        {
          title: "Forces & Loads",
          description:
            "Discover how forces act on buildings, bridges and other structures.",
          icon: Layers3,
        },
        {
          title: "Surveying Basics",
          description:
            "Understand how engineers measure land and determine locations.",
          icon: Map,
        },
        {
          title: "Construction Process",
          description:
            "Follow the basic stages involved in constructing a building.",
          icon: HardHat,
        },
      ],
    },

    8: {
      title: "Class 8 Civil Engineering",
      subtitle:
        "Move from basic concepts toward real engineering drawings and design.",
      topics: [
        {
          title: "Engineering Drawing",
          description:
            "Read and create basic technical drawings and plans.",
          icon: Ruler,
        },
        {
          title: "Structural Concepts",
          description:
            "Understand beams, columns, slabs and foundations.",
          icon: Building2,
        },
        {
          title: "Surveying",
          description:
            "Learn the purpose of surveying in construction and land development.",
          icon: Map,
        },
        {
          title: "AutoCAD Introduction",
          description:
            "Get introduced to computer-aided drafting and digital drawings.",
          icon: Compass,
        },
      ],
    },

    9: {
      title: "Class 9 Civil Engineering",
      subtitle:
        "Begin exploring the tools and principles used by real civil engineers.",
      topics: [
        {
          title: "AutoCAD Basics",
          description:
            "Create basic 2D drawings, plans and engineering layouts.",
          icon: Ruler,
        },
        {
          title: "Building Components",
          description:
            "Understand foundations, walls, columns, beams, slabs and roofs.",
          icon: Building2,
        },
        {
          title: "Surveying Concepts",
          description:
            "Learn basic instruments, measurements and site surveying.",
          icon: Map,
        },
        {
          title: "Construction Materials",
          description:
            "Study concrete, cement, steel, aggregates and their applications.",
          icon: Boxes,
        },
      ],
    },

    10: {
      title: "Class 10 Civil Engineering",
      subtitle:
        "Develop practical engineering awareness through drawings, structures and estimation.",
      topics: [
        {
          title: "AutoCAD 2D",
          description:
            "Create floor plans, elevations and basic construction drawings.",
          icon: Ruler,
        },
        {
          title: "Structural Basics",
          description:
            "Understand how beams, columns and slabs carry loads.",
          icon: Building2,
        },
        {
          title: "Quantity Estimation",
          description:
            "Learn the basics of measuring construction quantities and materials.",
          icon: Calculator,
        },
        {
          title: "Site Planning",
          description:
            "Understand basic site layouts, dimensions and construction planning.",
          icon: ClipboardList,
        },
      ],
    },

    11: {
      title: "Class 11 Civil Engineering",
      subtitle:
        "Start thinking like an engineer with mathematics, mechanics and technical drawing.",
      topics: [
        {
          title: "Engineering Drawing",
          description:
            "Develop technical drawing and visualization skills.",
          icon: Ruler,
        },
        {
          title: "Engineering Mechanics",
          description:
            "Understand forces, equilibrium, moments and basic mechanics.",
          icon: Settings2,
        },
        {
          title: "Surveying",
          description:
            "Learn fundamental surveying methods and measurements.",
          icon: Map,
        },
        {
          title: "Construction Materials",
          description:
            "Study properties and applications of concrete, steel and other materials.",
          icon: Boxes,
        },
      ],
    },

    12: {
      title: "Class 12 Civil Engineering",
      subtitle:
        "Prepare for civil engineering with structures, surveying and construction fundamentals.",
      topics: [
        {
          title: "Structural Engineering",
          description:
            "Understand fundamental concepts of structural behaviour and design.",
          icon: Building2,
        },
        {
          title: "Surveying & Mapping",
          description:
            "Explore surveying, mapping and digital representation of land.",
          icon: Map,
        },
        {
          title: "Estimation & Costing",
          description:
            "Learn how quantities, materials and project costs are estimated.",
          icon: Calculator,
        },
        {
          title: "CAD & BIM Basics",
          description:
            "Get familiar with digital construction drawings and building models.",
          icon: Layers3,
        },
      ],
    },

    13: {
      title: "Civil Engineering",
      subtitle:
        "Build industry-ready skills across design, construction, infrastructure and project management.",
      topics: [
        {
          title: "AutoCAD & Civil 3D",
          description:
            "Create professional 2D drawings and civil infrastructure designs.",
          icon: Ruler,
        },
        {
          title: "Structural Design",
          description:
            "Study structural analysis, RCC, steel structures and design principles.",
          icon: Building2,
        },
        {
          title: "Quantity & Estimation",
          description:
            "Prepare BOQs, quantity estimates and construction cost calculations.",
          icon: Calculator,
        },
        {
          title: "BIM & Revit",
          description:
            "Create intelligent 3D building models and coordinate project information.",
          icon: Layers3,
        },
        {
          title: "Surveying & GIS",
          description:
            "Work with surveying, mapping, GIS and modern land-development tools.",
          icon: Map,
        },
        {
          title: "Project Management",
          description:
            "Learn planning, scheduling, site management and project coordination.",
          icon: ClipboardList,
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
      style={{ backgroundColor: "#FFFCF8" }}
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
            backgroundColor: "rgba(37,99,235,0.04)",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="civil-grade-grid"
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
            fill="url(#civil-grade-grid)"
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
                  style={{
                    color: COLORS.orange,
                  }}
                >
                  Civil Engineering Roadmap
                </span>
              </div>

              <h2
                className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
                style={{
                  color: COLORS.navy,
                }}
              >
                Build your engineering
                <span
                  className="ml-2"
                  style={{
                    color: COLORS.orange,
                  }}
                >
                  journey step by step.
                </span>
              </h2>

              <p
                className="mt-4 max-w-2xl text-sm leading-6 sm:text-base"
                style={{
                  color: COLORS.slate500,
                }}
              >
                Choose your level and discover the civil engineering
                concepts, tools and practical skills you can learn at
                each stage.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            LEVEL SELECTOR
        ===================================================== */}
        <div
          className="overflow-hidden rounded-2xl border bg-white p-6 sm:p-8"
          style={{
            borderColor: "rgba(245,107,10,0.18)",
          }}
        >
          {/* Heading */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: "rgba(245,107,10,0.10)",
                color: COLORS.orange,
              }}
            >
              <Building2 size={23} />
            </div>

            <div className="flex-1">
              <h3
                className="text-xl font-black sm:text-2xl"
                style={{
                  color: COLORS.navy,
                }}
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

              <div className="relative flex items-start justify-between">

                {/* Background line */}
                <div
                  className="absolute left-[3.5%] right-[3.5%] top-7 h-0.5"
                  style={{
                    backgroundColor: COLORS.slate200,
                  }}
                />

                {/* Active progress */}
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
                        className="mt-3 whitespace-nowrap text-xs transition-colors"
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

              {/* Group labels */}
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
          {/* Pointer */}
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
                <Building2 size={27} />
              </div>

              <div>
                <h3
                  className="text-2xl font-black sm:text-3xl"
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  {active.title}
                </h3>

                <p
                  className="mt-1 text-sm leading-6"
                  style={{
                    color: COLORS.slate500,
                  }}
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
                ? "Professional Path"
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
                ? "From construction fundamentals to industry-ready civil engineering"
                : `Recommended civil engineering path for Class ${selectedLevel}`}
            </span>

            <span
              className="font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{
                color: COLORS.orange,
              }}
            >
              Design • Build • Manage
            </span>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING TOOL STRIP
        ===================================================== */}
        <div
          className="mt-8 overflow-hidden rounded-2xl"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-7 py-5">
            {[
              "AutoCAD",
              "Revit",
              "BIM",
              "STAAD.Pro",
              "ETABS",
              "Civil 3D",
              "BOQ",
              "Primavera P6",
              "GIS",
            ].map((tool, index) => (
              <React.Fragment key={tool}>
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    color:
                      index === 0
                        ? COLORS.orangeLight
                        : COLORS.slate300,
                  }}
                >
                  {tool}
                </span>

                {index < 8 && (
                  <span
                    className="hidden h-1 w-1 rounded-full sm:block"
                    style={{
                      backgroundColor: COLORS.orange,
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   CIVIL WORKFLOW
============================================================= */

function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Draft",
      text: "Create precise technical drawings and layouts.",
      icon: Ruler,
    },
    {
      number: "02",
      title: "Model",
      text: "Build coordinated BIM and structural models.",
      icon: Layers3,
    },
    {
      number: "03",
      title: "Estimate",
      text: "Convert design information into quantities and BOQs.",
      icon: ClipboardList,
    },
    {
      number: "04",
      title: "Plan",
      text: "Schedule resources, activities and project delivery.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em]"
              style={{ color: COLORS.orange }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.orange }}
              />
              How the skills connect
            </div>

            <h2
              className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Learn the workflow,
              <br />
              not just the software.
            </h2>

            <p
              className="mt-6 max-w-md text-sm leading-7"
              style={{ color: COLORS.slate500 }}
            >
              Civil engineering is a connected process. A drawing
              becomes a model, the model informs quantities, and
              quantities feed into planning and execution.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand how CAD drawings are created",
                "Connect BIM models with construction workflows",
                "Translate designs into quantities and BOQs",
                "Understand planning and project execution",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0"
                    style={{ color: COLORS.orange }}
                  />

                  <span
                    className="text-sm font-medium leading-6"
                    style={{ color: COLORS.slate600 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div
            className="rounded-3xl p-8"
            style={{ backgroundColor: COLORS.navy }}
          >
            <div className="grid gap-8 sm:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: "rgba(255,255,255,0.12)",
                          backgroundColor:
                            "rgba(255,255,255,0.05)",
                          color: COLORS.orange,
                        }}
                      >
                        <Icon size={20} />
                      </div>

                      <span
                        className="font-mono text-[10px] font-bold"
                        style={{ color: COLORS.orangeLight }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-black text-white">
                      {step.title}
                    </h3>

                    <p
                      className="mt-2 text-sm leading-6"
                      style={{ color: COLORS.slate400 }}
                    >
                      {step.text}
                    </p>

                    {index < 2 && (
                      <div
                        className="absolute -bottom-4 left-0 right-0 hidden h-px sm:block"
                        style={{
                          backgroundColor:
                            "rgba(255,255,255,0.08)",
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className="mt-8 border-t pt-6"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: COLORS.slate400 }}
                >
                  Engineering workflow
                </span>

                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: COLORS.orange }}
                >
                  DRAFT → MODEL → ESTIMATE → PLAN
                </span>
              </div>
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

export default function CivilEngineering() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div
      className="min-h-screen bg-white font-sans"
      style={{ color: COLORS.navy }}
    >
      <Hero />
      <RoadmapSection />
      <WorkflowSection />
    </div>
  );
}