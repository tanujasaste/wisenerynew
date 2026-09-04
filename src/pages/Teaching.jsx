import {
  ArrowRight,
  BookOpen,
  Trophy,
  School,
  GraduationCap,
  Map,
  Globe2,
  Medal,
  Rocket,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const schoolBoards = [
  {
    title: "CBSE",
    description: "Central Board of Secondary Education",
    icon: School,
    boardId: "cbse",
  },
  {
    title: "CISCE",
    description: "ICSE / ISC",
    icon: School,
    boardId: "cisce",
  },
  {
    title: "NIOS",
    description: "National Institute of Open Schooling",
    icon: GraduationCap,
    boardId: "nios",
  },
  {
    title: "State Boards",
    description: "Maharashtra, Karnataka, Tamil Nadu, Kerala & more",
    icon: Map,
    boardId: "state-boards",
  },
  {
    title: "International Boards",
    description: "IB, Cambridge & more",
    icon: Globe2,
    boardId: "international",
  },
];

const competitiveExams = [
  {
    title: "Olympiads",
    description: "Classes 1–10 | Maths, Science, English & more",
    icon: Medal,
  },
  {
    title: "School Entrance Exams",
    description: "Classes 5–10 | JNVST, AISSEE & more",
    icon: School,
  },
  {
    title: "Scholarship / Talent Search",
    description: "NMMS, State & National Scholarships",
    icon: Award,
  },
  {
    title: "Competitive Foundation",
    description: "JEE, NEET, UPSC, SSC & more",
    icon: Rocket,
  },
  {
    title: "International School Competitions",
    description: "Math • Science • Computing • English",
    icon: Globe2,
  },
];

const BoardItem = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group flex w-full min-w-0 items-center gap-3
        rounded-[14px]
        border border-blue-100
        bg-white/80
        px-3 py-3
        text-left
        transition-all duration-300
        hover:border-blue-300
        hover:bg-blue-50/40
        hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)]
        cursor-pointer
        sm:gap-4
        sm:px-4
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          text-blue-600
          sm:h-11 sm:w-11
        "
      >
        <Icon
          size={30}
          strokeWidth={1.9}
          className="sm:h-[34px] sm:w-[34px]"
        />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            text-[15px] font-bold leading-tight text-slate-900
            sm:text-[17px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            break-words
            text-[12.5px] leading-[1.35rem] text-slate-600
            sm:text-[13.5px] sm:leading-5
          "
        >
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-full bg-blue-600 text-white
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:bg-blue-700
          sm:h-9 sm:w-9
        "
      >
        <ArrowRight
          size={17}
          strokeWidth={2.2}
          className="sm:h-[19px] sm:w-[19px]"
        />
      </div>
    </button>
  );
};

const ExamItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group flex w-full min-w-0 items-center gap-3
        rounded-[14px]
        border border-orange-100
        bg-white/80
        px-3 py-3
        transition-all duration-300
        hover:border-orange-300
        hover:bg-orange-50/40
        hover:shadow-[0_8px_25px_rgba(249,115,22,0.08)]
        cursor-pointer
        sm:gap-4
        sm:px-4
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-10 w-10 shrink-0 items-center justify-center
          text-orange-500
          sm:h-11 sm:w-11
        "
      >
        <Icon
          size={30}
          strokeWidth={1.9}
          className="sm:h-[34px] sm:w-[34px]"
        />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            text-[15px] font-bold leading-tight text-slate-900
            sm:text-[17px]
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-1
            break-words
            text-[12.5px] leading-[1.35rem] text-slate-700
            sm:text-[13.5px] sm:leading-5
          "
        >
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-full bg-orange-500 text-white
          transition-all duration-300
          group-hover:translate-x-1
          group-hover:bg-orange-600
          sm:h-9 sm:w-9
        "
      >
        <ArrowRight
          size={17}
          strokeWidth={2.2}
          className="sm:h-[19px] sm:w-[19px]"
        />
      </div>
    </div>
  );
};

export default function Teaching() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="relative overflow-hidden">

        {/* =====================================================
            DECORATIVE DOTS
        ===================================================== */}
        <div
          className="
            pointer-events-none absolute
            right-[7%] top-[68px]
            hidden h-[165px] w-[330px]
            opacity-50
            lg:block
          "
        >
          <div
            className="
              h-full w-full
              bg-[radial-gradient(circle,#f7a477_2px,transparent_2.5px)]
              [background-size:25px_25px]
            "
          />
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}
        <section
          className="
            mx-auto max-w-[1500px]
            px-4 pb-8 pt-6
            sm:px-6 sm:pb-9 sm:pt-7
            lg:px-12 lg:pb-7 lg:pt-8
          "
        >
          {/* Pill */}
          <div
            className="
              inline-flex items-center gap-1.5
              rounded-full
              bg-blue-100/70
              px-4 py-1.5
              text-[13px] font-medium
              text-blue-600
              sm:gap-2 sm:px-5 sm:py-2 sm:text-[15px]
            "
          >
            <span>Learn</span>
            <span>•</span>
            <span>Prepare</span>
            <span>•</span>
            <span>Excel</span>
          </div>

          {/* Heading */}
          <div
            className="
              mt-4
              max-w-[900px]
              sm:mt-5
            "
          >
            <h1
              className="
                text-[34px]
                font-extrabold
                leading-[1.08]
                tracking-[-1px]
                text-slate-900
                sm:text-[44px]
                sm:tracking-[-1.3px]
                md:text-[54px]
                lg:text-[62px]
                lg:tracking-[-1.5px]
              "
            >
              Your Complete Learning
              <br className="hidden sm:block" />

              <span className="text-orange-500">
                {" "}&amp; Exam Preparation Hub
              </span>
            </h1>

            <p
              className="
                mt-3
                max-w-[700px]
                text-[16px]
                leading-6
                text-slate-700
                sm:mt-4 sm:text-[18px] sm:leading-7
                md:text-[21px]
              "
            >
              Choose your path. Build your knowledge. Achieve your goals.
            </p>
          </div>
        </section>

        {/* =====================================================
            TWO MAIN CATEGORIES
        ===================================================== */}
        <section
          className="
            mx-auto max-w-[1500px]
            px-4 pb-10
            sm:px-6 sm:pb-12
            lg:px-12 lg:pb-16
          "
        >
          <div
            className="
              grid grid-cols-1 gap-5
              sm:gap-6
              lg:grid-cols-2 lg:gap-7
            "
          >
            {/* =================================================
                SCHOOL BOARDS
            ================================================= */}
            <div
              className="
                rounded-[18px]
                border border-blue-200
                bg-gradient-to-br
                from-blue-50/50
                via-white
                to-white
                p-4
                sm:rounded-[20px] sm:p-5
                md:p-7
              "
            >
              {/* Header */}
              <div
                className="
                  mb-5 flex items-center gap-4
                  sm:mb-6 sm:gap-5
                  md:mb-7 md:items-start md:gap-6
                "
              >
                <div
                  className="
                    flex h-[68px] w-[72px]
                    shrink-0 items-center justify-center
                    rounded-[14px]
                    bg-blue-100/70
                    text-blue-600
                    sm:h-[80px] sm:w-[84px]
                    sm:rounded-[16px]
                    md:h-[94px] md:w-[100px]
                    md:rounded-[17px]
                  "
                >
                  <BookOpen
                    size={42}
                    strokeWidth={1.7}
                    className="sm:h-[48px] sm:w-[48px] md:h-[54px] md:w-[54px]"
                  />
                </div>

                <div className="min-w-0 pt-0 md:pt-1">
                  <h2
                    className="
                      text-[23px]
                      font-extrabold
                      leading-tight
                      tracking-[-0.5px]
                      text-slate-900
                      sm:text-[27px]
                      md:text-[30px]
                      md:tracking-[-0.7px]
                    "
                  >
                    School Boards
                  </h2>

                  <p
                    className="
                      mt-1
                      max-w-[310px]
                      text-[14px]
                      leading-5
                      text-slate-700
                      sm:text-[15.5px] sm:leading-6
                      md:mt-1.5 md:text-[17px] md:leading-7
                    "
                  >
                    Explore all major boards and international curricula
                  </p>
                </div>
              </div>

              {/* Board list */}
              <div className="space-y-2">
                {schoolBoards.map((item) => (
                  <BoardItem
                    key={item.title}
                    item={item}
                    onClick={() =>
                      navigate(`/teaching/boards/${item.boardId}`)
                    }
                  />
                ))}
              </div>
            </div>

            {/* =================================================
                COMPETITIVE EXAMS
            ================================================= */}
            <div
              className="
                rounded-[18px]
                border border-orange-200
                bg-gradient-to-br
                from-orange-50/40
                via-white
                to-white
                p-4
                sm:rounded-[20px] sm:p-5
                md:p-7
              "
            >
              {/* Header */}
              <div
                className="
                  mb-5 flex items-center gap-4
                  sm:mb-6 sm:gap-5
                  md:mb-7 md:items-start md:gap-6
                "
              >
                <div
                  className="
                    flex h-[68px] w-[72px]
                    shrink-0 items-center justify-center
                    rounded-[14px]
                    bg-orange-100/60
                    text-orange-500
                    sm:h-[80px] sm:w-[84px]
                    sm:rounded-[16px]
                    md:h-[94px] md:w-[100px]
                    md:rounded-[17px]
                  "
                >
                  <Trophy
                    size={42}
                    strokeWidth={1.7}
                    className="sm:h-[48px] sm:w-[48px] md:h-[54px] md:w-[54px]"
                  />
                </div>

                <div className="min-w-0 pt-0 md:pt-1">
                  <h2
                    className="
                      text-[23px]
                      font-extrabold
                      leading-tight
                      tracking-[-0.5px]
                      text-slate-900
                      sm:text-[27px]
                      md:text-[30px]
                      md:tracking-[-0.7px]
                    "
                  >
                    Competitive Exams
                  </h2>

                  <p
                    className="
                      mt-1
                      max-w-[310px]
                      text-[14px]
                      leading-5
                      text-slate-700
                      sm:text-[15.5px] sm:leading-6
                      md:mt-1.5 md:text-[17px] md:leading-7
                    "
                  >
                    Choose your category and start preparing
                  </p>
                </div>
              </div>

              {/* Exam list */}
              <div className="space-y-2">
                {competitiveExams.map((item) => (
                  <ExamItem
                    key={item.title}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}