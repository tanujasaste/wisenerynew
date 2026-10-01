import React, { useEffect, useState } from "react";

const Joint = () => {
  return (
    <div
      className="
        absolute
        -left-[3%]
        -top-[50%]
        z-[10]
        flex
        h-[50px]
        w-[50px]
        items-center
        justify-center

        max-md:h-[40px]
        max-md:w-[40px]

        max-[480px]:h-[36px]
        max-[480px]:w-[36px]
      "
    >
      <div
        className="
          absolute
          h-full
          w-full
          rounded-full
          bg-[#ccc]
        "
      >
        <span
          className="
            absolute
            left-[-10%]
            top-[40%]
            h-[20%]
            w-[120%]
            origin-center
            rotate-0
            bg-[#ccc]
          "
        />

        <span
          className="
            absolute
            left-[-10%]
            top-[40%]
            h-[20%]
            w-[120%]
            origin-center
            rotate-45
            bg-[#ccc]
          "
        />

        <span
          className="
            absolute
            left-[-10%]
            top-[40%]
            h-[20%]
            w-[120%]
            origin-center
            rotate-90
            bg-[#ccc]
          "
        />

        <span
          className="
            absolute
            left-[-10%]
            top-[40%]
            h-[20%]
            w-[120%]
            origin-center
            rotate-[135deg]
            bg-[#ccc]
          "
        />
      </div>
    </div>
  );
};

export default function RoboticArm() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Wait one frame so the browser first renders
    // the arm in its starting position.
    const frame = requestAnimationFrame(() => {
      setAnimate(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
<div
  className="
    absolute
    right-[-200px]
    bottom-[-10px]
    z-[5]
    h-[560px]
    w-[560px]
    overflow-visible
    pointer-events-auto
    origin-bottom-right

    md:scale-[0.85]
    md:right-[-100px]
    md:bottom-[-20px]

    max-md:scale-[0.76]
    max-md:right-1/2
    max-md:translate-x-1/2
    max-md:bottom-[40px]
    max-md:origin-bottom-center

    max-[480px]:scale-[0.70]
    max-[480px]:bottom-[50px]
  "
>
      <div className="relative h-full w-full">

        {/* BASE */}
        <div
          className="
            absolute
            left-[310px]
            top-[395px]
            h-[25px]
            w-[300px]
            bg-[#4d4d4d]
          "
        >

          {/* FIRST ARM */}
          <div
            className={`
              absolute
              left-0
              top-0
              h-[25px]
              w-[300px]
              origin-[15px_15px]
              bg-[#4d4d4d]
              transition-transform
              duration-1000
              ease-[cubic-bezier(0.65,0,0.35,1)]
              will-change-transform

              ${animate ? "rotate-[-90deg]" : "rotate-0"}

              max-md:h-[22px]
              max-md:w-[220px]

              max-[480px]:w-[190px]
            `}
          >
            <Joint />

            {/* SECOND ARM */}
            <div
              className={`
                absolute
                left-[270px]
                top-0
                h-[25px]
                w-[300px]
                origin-[15px_15px]
                bg-[#4d4d4d]
                transition-transform
                duration-1000
                ease-[cubic-bezier(0.65,0,0.35,1)]
                will-change-transform

                ${animate ? "rotate-[-90deg]" : "rotate-0"}

                max-md:left-[190px]
                max-md:h-[22px]
                max-md:w-[220px]

                max-[480px]:left-[165px]
                max-[480px]:w-[190px]
              `}
            >
              <Joint />

              {/* SCREEN HOLDER */}
              <div
                className="
                  absolute
                  bottom-[-80px]
                  left-[60px]
                  z-[2]
                  h-[200px]
                  w-[360px]
                  rounded-[10px]
                  bg-[#999]

                  max-md:bottom-[-60px]
                  max-md:left-[45px]
                  max-md:h-[150px]
                  max-md:w-[280px]

                  max-[480px]:bottom-[-50px]
                  max-[480px]:left-[38px]
                  max-[480px]:h-[125px]
                  max-[480px]:w-[235px]
                "
              >
                {/* SCREEN */}
                <div
                  className="
                    relative
                    top-[6%]
                    mx-auto
                    h-[85%]
                    w-[90%]
                    bg-[#222]
                    flex
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <p
                    className="
                      text-[18px]
                      font-semibold
                      tracking-[0.12em]
                      text-[#F56B0A]

                      max-md:text-[14px]
                      max-[480px]:text-[11px]
                      rotate-180
                    "
                  >
                    BUILD • CREATE • INNOVATE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}