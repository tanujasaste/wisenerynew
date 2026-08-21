import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Reveal from "./Reveal";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-100px 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // const navItems = [
  //   { name: "Home", id: "home" },
  //   { name: "Courses", id: "courses" },
  //   { name: "About", id: "about" },
  //   { name: "Contact", id: "contact" },
  // ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

return (
    <header className="sticky top-0 z-50 h-[80px] w-full bg-[#fffdf9] sm:h-[90px] lg:h-[100px]">

      <Reveal
        trigger="mount"
        delay={0}
        y={-40}
        className="h-full"
      >
        <div className="mx-auto flex h-full max-w-[1450px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center gap-1.5 sm:gap-2"
            aria-label="Go to Home"
          >

            {/* Wisenery Gear */}
            <svg
              className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <g className="logo-gear">
                <g fill="#FF7A29">

                  <rect x="17" y="1" width="6" height="8" rx="1" />
                  <rect x="17" y="31" width="6" height="8" rx="1" />
                  <rect x="1" y="17" width="8" height="6" rx="1" />
                  <rect x="31" y="17" width="8" height="6" rx="1" />

                  <rect
                    x="5"
                    y="5"
                    width="6"
                    height="8"
                    rx="1"
                    transform="rotate(45 8 9)"
                  />

                  <rect
                    x="29"
                    y="27"
                    width="6"
                    height="8"
                    rx="1"
                    transform="rotate(45 32 31)"
                  />

                  <rect
                    x="5"
                    y="27"
                    width="6"
                    height="8"
                    rx="1"
                    transform="rotate(-45 8 31)"
                  />

                  <rect
                    x="29"
                    y="5"
                    width="6"
                    height="8"
                    rx="1"
                    transform="rotate(-45 32 9)"
                  />

                  <circle
                    cx="20"
                    cy="20"
                    r="13"
                    fill="none"
                    stroke="#FF7A29"
                    strokeWidth="3"
                  />
                </g>
              </g>

              {/* Static W */}
              <text
                x="20"
                y="25.5"
                textAnchor="middle"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="700"
                fontSize="14"
                fill="#FF7A29"
              >
                W
              </text>
            </svg>

            {/* WISENERY WORDMARK */}
            <img
              src={logo}
              alt="Wisenery"
              className="h-[32px] w-auto -translate-y-[4px] object-contain sm:h-[38px] sm:-translate-y-[5px] lg:h-[46px] lg:-translate-y-[6px]"
            />

          </button>

          {/* NAVIGATION */}
          {/* <nav className="flex items-center gap-[58px]">

            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative py-3 text-[17px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#f56b0a]"
                      : "text-[#111820] hover:text-[#f56b0a]"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#f56b0a] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}

          </nav> */}

          {/* CTA */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">

            <div className="cta-wrapper">

              <span className="cta-pulse cta-pulse-one" />
              <span className="cta-pulse cta-pulse-two" />

              <button className="cta-button group flex items-center gap-1.5 whitespace-nowrap px-3 py-2 text-[11px] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[14px] lg:px-6 lg:py-3 lg:text-[15px]">
                <span className="hidden sm:inline">BOOK A FREE DEMO</span>
                <span className="sm:hidden">BOOK DEMO</span>

                <ArrowUpRight
                  size={14}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:hidden"
                />
                <ArrowUpRight
                  size={20}
                  className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                />
              </button>

            </div>

          </div>

        </div>
      </Reveal>
    </header>
  );
}

export default Navbar;