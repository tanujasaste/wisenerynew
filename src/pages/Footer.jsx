import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#fffdf9] px-6 pb-8 pt-20 text-[#111820] md:px-12 lg:px-20">

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#FF7A29]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Top Footer */}
        <div className="grid gap-14 border-b border-[#ece8e3] pb-16 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">

            <a
              href="#home"
              className="group flex w-fit items-center gap-2.5"
              aria-label="Wisenery Home"
            >
              {/* Wisenery Gear */}
              <svg
                className="h-10 w-10 shrink-0"
                viewBox="0 0 40 40"
                aria-hidden="true"
              >
                {/* Rotating Gear */}
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

                {/* Static W — transparent background */}
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

              {/* Wisenery Wordmark */}
              <img
                src={logo}
                alt="Wisenery"
                className="h-[46px] w-auto object-contain -translate-y-[6px]"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#111820]">
              Learn. Build. Create.
              <br />
              Turning ideas into real-world skills.
            </p>

          </div>


          {/* Explore */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.25em] font-bold text-[#FF7A29]">
              Explore
            </p>

            <div className="flex flex-col gap-4">
              {["Home", "About Us", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex w-fit items-center gap-2 text-sm text-[#111820]transition-colors duration-300 hover:text-[#111820]"
                >
                  {item}

                  <ArrowUpRight
                    size={14}
                    className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>


          {/* Programs */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em]font-bold text-[#FF7A29]">
              Programs
            </p>

            <div className="flex flex-col gap-4">
              {["Coding", "Robotics", "AutoCAD"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex w-fit items-center gap-2 text-sm text-[#111820]transition-colors duration-300 hover:text-[#111820]"
                >
                  {item}

                  <ArrowUpRight
                    size={14}
                    className="translate-y-1 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>


          {/* Connect */}
<div>
  <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A29]">
    Connect
  </p>

  <div className="flex flex-col gap-5">

    {/* WhatsApp */}
    <a
      href="#"
      className="group flex items-center gap-3 text-sm text-[#111820] transition-colors duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] shrink-0 text-[#111820] transition-colors duration-300 group-hover:text-[#FF7A29]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.6 2.6l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.3-1.8.1-1.2-.3-2.5-1-3.6-2.1-1.1-1.1-1.8-2.4-2.1-3.6-.2-.7-.1-1.4.1-1.8Z" />
      </svg>

      <span>+91 98765 43210</span>
    </a>


    {/* Instagram */}
    <a
      href="#"
      className="group flex items-center gap-3 text-sm text-[#111820] transition-colors duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] shrink-0 text-[#111820] transition-colors duration-300 group-hover:text-[#FF7A29]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="0.8"
          fill="currentColor"
        />
      </svg>

      <span>@wisenery</span>
    </a>


    {/* Email */}
    <a
      href="mailto:abc@gmail.com"
      className="group flex items-center gap-3 text-sm text-[#111820] transition-colors duration-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[22px] w-[22px] shrink-0 text-[#111820] transition-colors duration-300 group-hover:text-[#FF7A29]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>

      <span>abc@gmail.com</span>
    </a>

  </div>
</div>

        </div>


        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-[#111820]/40 sm:flex-row sm:items-center">

          <p>
            © {new Date().getFullYear()} Wisenery. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.2em]">
            Learn · Build · Create
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;