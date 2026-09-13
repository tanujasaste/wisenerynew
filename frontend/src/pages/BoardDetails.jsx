import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Monitor,
  Cloud,
  FileText,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

const grades = Array.from({ length: 12 }, (_, i) => i + 1);

const subjectData = {
  1: [
    {
      name: "Mathematics",
      description: "Build strong number and problem solving skills",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Develop reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "भाषा, व्याकरण और लेखन कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description: "Explore nature and the world around us",
      icon: Globe2,
    },
  ],

  2: [
    {
      name: "Mathematics",
      description: "Strengthen mathematical thinking and concepts",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Improve reading, writing and vocabulary",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और व्याकरण की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description: "Learn about nature, people and surroundings",
      icon: Globe2,
    },
  ],

  3: [
    {
      name: "Mathematics",
      description: "Develop logical and problem solving skills",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Enhance reading and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description: "Understand our environment and society",
      icon: Globe2,
    },
  ],

  4: [
    {
      name: "Mathematics",
      description: "Build strong mathematical foundations",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Enhance language and communication skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और व्याकरण की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Environmental Studies",
      description: "Discover science and the world around us",
      icon: Globe2,
    },
  ],

  5: [
    {
      name: "Mathematics",
      description: "Build strong problem solving skills",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Explore scientific concepts and experiments",
      icon: FlaskConical,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल विकसित करें",
      icon: Languages,
    },
  ],

  6: [
    {
      name: "Mathematics",
      description: "Build strong mathematical foundations",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Understand fundamental scientific concepts",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description: "Understand our world and societies",
      icon: Globe2,
    },
    {
      name: "English",
      description: "Develop advanced language skills",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और साहित्य को समझें",
      icon: Languages,
    },
    {
      name: "Computer",
      description: "Learn computers and digital fundamentals",
      icon: Monitor,
    },
  ],

  7: [
    {
      name: "Mathematics",
      description: "Develop advanced problem solving skills",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Explore physics, chemistry and biology",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description: "Understand history, geography and society",
      icon: Globe2,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "व्याकरण और साहित्य की समझ विकसित करें",
      icon: Languages,
    },
    {
      name: "Computer",
      description: "Develop digital and computational skills",
      icon: Monitor,
    },
  ],

  8: [
    {
      name: "Mathematics",
      description: "Strengthen logical and analytical thinking",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Explore physics, chemistry and biology",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description: "Understand our world and societies",
      icon: Globe2,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "हिंदी भाषा और साहित्य को बेहतर समझें",
      icon: Languages,
    },
    {
      name: "Computer",
      description: "Learn coding and digital technologies",
      icon: Monitor,
    },
  ],

  9: [
    {
      name: "Mathematics",
      description: "Build strong problem solving skills",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Physics, Chemistry and Biology concepts",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description: "Understand our world and societies",
      icon: Globe2,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Computer Applications",
      description: "Learn coding, tools and digital skills",
      icon: Monitor,
    },
    {
      name: "Information Technology",
      description: "Understand IT concepts and applications",
      icon: Cloud,
    },
  ],

  10: [
    {
      name: "Mathematics",
      description: "Build strong problem solving skills",
      icon: Calculator,
    },
    {
      name: "Science",
      description: "Physics, Chemistry and Biology concepts",
      icon: FlaskConical,
    },
    {
      name: "Social Science",
      description: "Understand our world and societies",
      icon: Globe2,
    },
    {
      name: "English",
      description: "Enhance reading, writing and communication",
      icon: BookOpen,
    },
    {
      name: "Hindi",
      description: "व्याकरण, साहित्य और लेखन कौशल विकसित करें",
      icon: Languages,
    },
    {
      name: "Computer Applications",
      description: "Learn coding, tools and digital skills",
      icon: Monitor,
    },
    {
      name: "Information Technology",
      description: "Understand IT concepts and real-world applications",
      icon: Cloud,
    },
    {
      name: "Sanskrit",
      description: "संस्कृत भाषा और व्याकरण की मूल बातें",
      icon: Languages,
    },
  ],

  11: [
    {
      name: "Physics",
      description: "Explore concepts of mechanics and physics",
      icon: FlaskConical,
    },
    {
      name: "Chemistry",
      description: "Understand chemical reactions and concepts",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description: "Develop advanced mathematical thinking",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Strengthen language and communication",
      icon: BookOpen,
    },
    {
      name: "Computer Science",
      description: "Learn programming and computational concepts",
      icon: Monitor,
    },
  ],

  12: [
    {
      name: "Physics",
      description: "Master important physics concepts",
      icon: FlaskConical,
    },
    {
      name: "Chemistry",
      description: "Build strong chemistry fundamentals",
      icon: FlaskConical,
    },
    {
      name: "Mathematics",
      description: "Prepare for advanced mathematics",
      icon: Calculator,
    },
    {
      name: "English",
      description: "Improve academic writing and communication",
      icon: BookOpen,
    },
    {
      name: "Computer Science",
      description: "Master programming and computer science",
      icon: Monitor,
    },
  ],
};

const getCategoryRange = (category) => {
  switch (category) {
    case "Primary":
      return [1, 5];
    case "Middle School":
      return [6, 8];
    case "Secondary":
      return [9, 10];
    case "Senior Secondary":
      return [11, 12];
    default:
      return [];
  }
};

export default function BoardDetails() {
  const [selectedGrade, setSelectedGrade] = useState(10);

  const subjects = subjectData[selectedGrade] || subjectData[10];

  return (
    <main className="min-h-screen bg-white px-4 py-6 text-[#111827] sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-[1450px]">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <section className="mb-7 text-center sm:mb-8">
          <p className="text-sm font-bold tracking-wide text-[#f36f21] sm:text-base">
            CBSE BOARD
          </p>

          <div className="mx-auto mt-3 h-[2px] w-11 bg-[#f36f21]" />

          <h1
            className="
              mt-2
              text-[32px]
              font-bold
              leading-tight
              tracking-tight
              text-[#101318]
              sm:text-5xl
              lg:text-[52px]
            "
          >
            Choose your class
          </h1>

          <p
            className="
              mx-auto mt-3 max-w-[650px]
              text-[14px] leading-6
              text-gray-600
              sm:text-lg
            "
          >
            Select your grade and explore curated CBSE learning content.
          </p>
        </section>

        {/* =====================================================
            GRADE SELECTOR — ORANGE SECTION
        ===================================================== */}
        <section
          className="
            rounded-2xl
            border border-orange-100
            bg-gradient-to-br from-orange-50/50 via-white to-white
            px-4 py-5
            shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            sm:px-7 sm:py-6
          "
        >
          {/* Section heading */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-orange-100/70
                sm:h-11 sm:w-11
              "
            >
              <GraduationCap
                size={23}
                strokeWidth={1.8}
                className="text-[#f36f21]"
              />
            </div>

            <h2 className="text-base font-semibold sm:text-lg">
              1. Select your grade
            </h2>

            <div className="hidden h-px flex-1 bg-orange-100 sm:block" />
          </div>

          {/* Grade selector */}
          <div className="mt-6 overflow-x-auto pb-3 sm:mt-7">
            <div className="min-w-[820px] px-2">

              {/* Grade numbers */}
              <div className="relative flex items-start justify-between">

                {/* Background line */}
                <div className="absolute left-[25px] right-[25px] top-[23px] h-px bg-gray-300" />

                {/* Active orange line */}
                <div
                  className="
                    absolute
                    top-[22px]
                    h-[2px]
                    bg-[#f36f21]
                    transition-all
                    duration-300
                  "
                  style={{
                    left: "25px",
                    width:
                      selectedGrade === 1
                        ? "0%"
                        : `${((selectedGrade - 1) / 11) * 100}%`,
                  }}
                />

                {grades.map((grade) => {
                  const isSelected = selectedGrade === grade;

                  return (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setSelectedGrade(grade)}
                      className="
                        group
                        relative
                        z-10
                        flex
                        min-w-[50px]
                        flex-col
                        items-center
                      "
                    >
                      <span
                        className={`
                          flex h-11 w-11 items-center justify-center
                          rounded-full border
                          text-sm font-medium
                          transition-all duration-200
                          sm:h-12 sm:w-12 sm:text-base
                          ${
                            isSelected
                              ? "scale-105 border-[#f36f21] bg-[#f36f21] text-white shadow-md"
                              : "border-gray-300 bg-white text-gray-800 hover:border-[#f36f21] hover:text-[#f36f21]"
                          }
                        `}
                      >
                        {grade}
                      </span>

                      <span
                        className={`
                          mt-2 whitespace-nowrap text-xs font-medium
                          sm:mt-3 sm:text-sm
                          ${
                            isSelected
                              ? "font-bold text-[#f36f21]"
                              : "text-gray-800"
                          }
                        `}
                      >
                        Class {grade}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Category labels */}
              <div className="mt-7 grid grid-cols-4 gap-4 sm:mt-8 sm:gap-5">
                {[
                  "Primary",
                  "Middle School",
                  "Secondary",
                  "Senior Secondary",
                ].map((category) => {
                  const [start, end] = getCategoryRange(category);

                  const active =
                    selectedGrade >= start && selectedGrade <= end;

                  return (
                    <div
                      key={category}
                      className="flex items-center justify-center gap-2 sm:gap-3"
                    >
                      <span
                        className={`
                          h-px flex-1 border-t border-dotted
                          ${
                            active
                              ? "border-orange-400"
                              : "border-gray-300"
                          }
                        `}
                      />

                      <span
                        className={`
                          whitespace-nowrap text-[10px]
                          sm:text-xs md:text-sm
                          ${
                            active
                              ? "font-semibold text-[#f36f21]"
                              : "text-gray-500"
                          }
                        `}
                      >
                        {category}
                      </span>

                      <span
                        className={`
                          h-px flex-1 border-t border-dotted
                          ${
                            active
                              ? "border-orange-400"
                              : "border-gray-300"
                          }
                        `}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SUBJECT SECTION — BLUE
        ===================================================== */}
        <section
          className="
            relative mt-3
            rounded-2xl
            border border-blue-100
            bg-white
            px-4 py-5
            shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            sm:px-7 sm:py-6
          "
        >
          {/* Blue pointer */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div
              className="
                h-0 w-0
                border-x-[11px]
                border-b-[12px]
                border-x-transparent
                border-b-blue-600
              "
            />
          </div>

          {/* Subjects header */}
          <div
            className="
              flex flex-col gap-4
              sm:flex-row sm:items-center sm:justify-between
              sm:gap-5
            "
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div
                className="
                  flex h-12 w-12 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-blue-50
                  sm:h-14 sm:w-14
                "
              >
                <BookOpen
                  size={26}
                  strokeWidth={1.7}
                  className="text-blue-600 sm:h-7 sm:w-7"
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-bold sm:text-xl">
                  Class {selectedGrade} Subjects
                </h2>

                <p className="mt-1 text-[13px] leading-5 text-gray-600 sm:text-sm">
                  Explore all subjects and start your learning journey.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="
                flex w-full items-center justify-center gap-2.5
                rounded-full
                border border-blue-100
                bg-blue-50/40
                px-4 py-2.5
                text-sm font-semibold
                transition
                hover:border-blue-300
                hover:bg-blue-50
                hover:text-blue-600
                sm:w-fit sm:px-5 sm:py-3
              "
            >
              <FileText
                size={18}
                className="text-blue-600"
              />

              <span>CBSE Curriculum</span>

              <ChevronRight
                size={18}
                className="text-blue-600"
              />
            </button>
          </div>

          {/* Subject cards */}
          <div
            className="
              mt-5
              grid grid-cols-1 gap-3
              sm:mt-6 sm:grid-cols-2 sm:gap-4
              lg:grid-cols-4
            "
          >
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <button
                  key={subject.name}
                  type="button"
                  className="
                    group flex min-h-[100px]
                    items-center gap-3
                    rounded-xl
                    border border-blue-100
                    bg-white
                    px-3.5 py-3.5
                    text-left
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-300
                    hover:bg-blue-50/20
                    hover:shadow-[0_5px_18px_rgba(37,99,235,0.08)]
                    sm:min-h-[110px]
                    sm:gap-4
                    sm:px-4 sm:py-4
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-blue-50
                      sm:h-14 sm:w-14
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.7}
                      className="text-blue-600 sm:h-[29px] sm:w-[29px]"
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[15px] font-semibold text-gray-900 sm:text-base">
                      {subject.name}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[13px] leading-5 text-gray-600 sm:text-sm">
                      {subject.description}
                    </p>
                  </div>

                </button>
              );
            })}
          </div>

          {/* Bottom information */}
          <div
            className="
              mt-4 flex items-start gap-3
              rounded-xl
              bg-blue-50/60
              px-4 py-3.5
              sm:mt-5 sm:items-center sm:gap-4 sm:px-5 sm:py-4
            "
          >
            <Lightbulb
              size={21}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-blue-600 sm:mt-0"
            />

            <p className="text-[13px] leading-5 text-gray-600 sm:text-sm">
              Subjects are as per the latest CBSE curriculum for Class{" "}
              {selectedGrade}.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}