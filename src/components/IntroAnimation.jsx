import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import CameraFocusAnimation from "./CameraFocusAnimation";


/* ============================================================
   TEXT SPLIT HELPERS
   ============================================================ */

function splitWords(text) {
  return text.split(" ").map((word, i) => (
    <span
      key={i}
      className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0 pb-[0.1em]"
    >
      <span className="word-inner inline-block will-change-transform">
        {word}
      </span>
    </span>
  ));
}


function splitChars(text) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="char-inner inline-block will-change-transform"
      style={{
        whiteSpace: char === " " ? "pre" : "normal",
      }}
    >
      {char}
    </span>
  ));
}


/* ============================================================
   CORNER GEAR GLYPH

   A larger, softer echo of the wordmark's gear icon, tucked
   into the frame's corners and blurred so it reads as ambient
   machinery rather than a second logo.
   ============================================================ */

function GearGlyph() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-full w-full"
    >
      <g fill="#FF7A29">
        <rect x="17" y="1" width="6" height="8" rx="1" />
        <rect x="17" y="31" width="6" height="8" rx="1" />
        <rect x="1" y="17" width="8" height="6" rx="1" />
        <rect x="31" y="17" width="8" height="6" rx="1" />
        <rect x="5" y="5" width="6" height="8" rx="1" transform="rotate(45 8 9)" />
        <rect x="29" y="27" width="6" height="8" rx="1" transform="rotate(45 32 31)" />
        <rect x="5" y="27" width="6" height="8" rx="1" transform="rotate(-45 8 31)" />
        <rect x="29" y="5" width="6" height="8" rx="1" transform="rotate(-45 32 9)" />
        <circle cx="20" cy="20" r="13" fill="none" stroke="#FF7A29" strokeWidth="3" />
        <circle cx="20" cy="20" r="5" fill="none" stroke="#FF7A29" strokeWidth="2" />
      </g>
    </svg>
  );
}


/* ============================================================
   INTRO ANIMATION
   ============================================================ */

function IntroAnimation({
  onComplete,
}) {
  const containerRef = useRef(null);

  /* Main moving glow */
  const glowRef = useRef(null);

  /* Secondary moving glow */
  const glowSecondaryRef = useRef(null);

  /* Glow trail */
  const glowTrailRef = useRef(null);

  /* Background grid */
  const gridRef = useRef(null);

  /* Radial depth vignette */
  const vignetteRef = useRef(null);

  /* Fine grain texture */
  const grainRef = useRef(null);

  /* Decorative orbit rings */
  const orbitRef = useRef(null);

  /* Comet that travels around the orbit */
  const cometRef = useRef(null);

  /* Blurred engineering gears tucked into the corners */
  const cornerGearRefs = useRef([]);

  /* Floating particles */
  const particlesRef = useRef([]);

  /* Small orange accent */
  const accentRef = useRef(null);

  /* Radar ping rings around the accent */
  const pingRefs = useRef([]);

  /* Text refs */
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  /* Brand refs */
  const brandRef = useRef(null);
  const brandShineRef = useRef(null);
  const taglineRef = useRef(null);
  const dividerRef = useRef(null);
  const gearRef = useRef(null);

  /* Main GSAP timeline */
  const timelineRef = useRef(null);

  /* Camera visibility */
  const [showCameraFocus, setShowCameraFocus] =
    useState(false);


  /* ==========================================================
     CAMERA COMPLETE
     ========================================================== */

  const handleCameraComplete = () => {
    setShowCameraFocus(false);

    if (timelineRef.current) {
      timelineRef.current.resume();
    }
  };


  /* ==========================================================
     MAIN TIMELINE
     ========================================================== */

  useLayoutEffect(() => {
    const ctx =
      gsap.context(() => {

        const tl = gsap.timeline({
          onComplete: () => {
            onComplete?.();
          },
        });

        timelineRef.current = tl;


        /* ====================================================
           SPLIT TEXT TARGETS
           ==================================================== */

        const line2Words =
          line2Ref.current
            ? line2Ref.current.querySelectorAll(".word-inner")
            : [];

        const line3Chars =
          line3Ref.current
            ? line3Ref.current.querySelectorAll(".char-inner")
            : [];


        /* ====================================================
           INITIAL STATES
           ==================================================== */

        gsap.set(
          glowRef.current,
          {
            x: 0,
            y: 0,
            scale: 0.45,
            opacity: 0,
          }
        );


        gsap.set(
          glowSecondaryRef.current,
          {
            x: 0,
            y: 0,
            scale: 0.7,
            opacity: 0,
          }
        );


        gsap.set(
          glowTrailRef.current,
          {
            opacity: 0,
            scale: 0.5,
            rotation: -15,
          }
        );


        gsap.set(
          gridRef.current,
          {
            opacity: 0,
            scale: 1.08,
          }
        );


        gsap.set(
          vignetteRef.current,
          {
            opacity: 0,
          }
        );


        gsap.set(
          orbitRef.current,
          {
            opacity: 0,
            scale: 0.7,
            rotation: -20,
          }
        );

        gsap.set(
          cometRef.current,
          {
            opacity: 0,
            rotation: -60,
          }
        );


        cornerGearRefs.current.forEach((gear, index) => {
          if (!gear) return;

          gsap.set(
            gear,
            {
              opacity: 0,
              scale: 0.82,
              rotation: index % 2 === 0 ? -12 : 12,
            }
          );
        });


        gsap.set(
          accentRef.current,
          {
            opacity: 0,
            scale: 0,
          }
        );


        gsap.set(
          pingRefs.current,
          {
            opacity: 0,
            scale: 1,
          }
        );


        gsap.set(
          line1Ref.current,
          {
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }
        );


        gsap.set(
          line2Ref.current,
          {
            opacity: 1,
          }
        );


        gsap.set(
          line2Words,
          {
            yPercent: 115,
          }
        );


        gsap.set(
          line3Ref.current,
          {
            opacity: 1,
          }
        );


        gsap.set(
          line3Chars,
          {
            opacity: 0,
            scale: 0.4,
            filter: "blur(4px)",
          }
        );


        gsap.set(
          gearRef.current,
          {
            opacity: 0,
            scale: 0.4,
            rotation: -90,
          }
        );


        gsap.set(
          brandRef.current,
          {
            opacity: 0,
            scale: 0.75,
            filter: "blur(10px)",
          }
        );


        gsap.set(
          brandShineRef.current,
          {
            opacity: 0,
            xPercent: -130,
          }
        );


        gsap.set(
          dividerRef.current,
          {
            opacity: 0,
            width: 0,
          }
        );


        gsap.set(
          taglineRef.current,
          {
            opacity: 0,
            y: 15,
          }
        );


        /* ====================================================
           FLOATING PARTICLES INITIAL STATE
           ==================================================== */

        particlesRef.current.forEach((particle) => {
          if (!particle) return;

          gsap.set(
            particle,
            {
              opacity: 0,
              scale: 0,
            }
          );
        });


        /* ====================================================
           GRAIN — quiet ambient flicker
           ==================================================== */

        gsap.set(
          grainRef.current,
          {
            opacity: 0,
          }
        );

        tl.to(
          grainRef.current,
          {
            opacity: 1,
            duration: 1.4,
            ease: "power1.out",
          },
          0.1
        );


        /* ====================================================
           BACKGROUND GRID
           ==================================================== */

        tl.to(
          gridRef.current,
          {
            opacity: 0.38,
            scale: 1,
            duration: 1.1,
            ease: "power2.out",
          },
          0
        );


        tl.to(
          vignetteRef.current,
          {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          0
        );


        /* ====================================================
           MAIN ORANGE GLOW ENTER
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            x: "-12vw",
            y: "-8vh",
            duration: 0.85,
            ease: "power3.out",
          },
          0
        );


        /* ====================================================
           SECONDARY GLOW ENTER
           ==================================================== */

        tl.to(
          glowSecondaryRef.current,
          {
            opacity: 0.9,
            scale: 1,
            x: "13vw",
            y: "8vh",
            duration: 0.95,
            ease: "power3.out",
          },
          0.05
        );


        /* ====================================================
           LIGHT TRAIL ENTER
           ==================================================== */

        tl.to(
          glowTrailRef.current,
          {
            opacity: 0.65,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.1
        );


        /* ====================================================
           ORBIT ENTER
           ==================================================== */

        tl.to(
          orbitRef.current,
          {
            opacity: 0.5,
            scale: 1,
            rotation: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          0
        );


        /* ====================================================
           AURORA RING + COMET ENTER

           A slow conic-gradient ring and a small comet that
           orbits it continuously — the signature premium touch.
           Both tweens run outside the main timeline so they
           keep drifting even while the camera sequence pauses
           everything else.
           ==================================================== */




        tl.to(
          cometRef.current,
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.35
        );


        tl.call(
          () => {

            gsap.to(
              cometRef.current,
              {
                rotation: "+=360",
                duration: 5.5,
                repeat: -1,
                ease: "none",
              }
            );

            cornerGearRefs.current.forEach((gear, index) => {
              if (!gear) return;

              gsap.to(
                gear,
                {
                  rotation: index % 2 === 0 ? "+=360" : "-=360",
                  duration: 26 + index * 6,
                  repeat: -1,
                  ease: "none",
                }
              );
            });
          },
          [],
          0.35
        );


        /* ====================================================
           CORNER GEARS ENTER

           Soft blurred machinery tucked into the frame's
           corners, easing in with the background.
           ==================================================== */

        cornerGearRefs.current.forEach((gear, index) => {
          if (!gear) return;

          tl.to(
            gear,
            {
              opacity: 0.18,
              scale: 1,
              rotation: 0,
              duration: 1.4,
              ease: "power2.out",
            },
            0.1 + index * 0.08
          );
        });


        /* ====================================================
           PARTICLES ENTER
           ==================================================== */

        particlesRef.current.forEach((particle, index) => {
          if (!particle) return;

          tl.to(
            particle,
            {
              opacity: index % 3 === 0 ? 0.55 : 0.3,
              scale: 1,
              duration: 0.45,
              ease: "power2.out",
            },
            0.15 + index * 0.035
          );
        });


        /* ====================================================
           WISENERY GEAR
           ==================================================== */

        tl.to(
          gearRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.65,
            ease: "back.out(1.8)",
          },
          0.1
        );


        /* ====================================================
           WISENERY WORDMARK
           ==================================================== */

        tl.to(
          brandRef.current,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power3.out",
          },
          0.35
        );


        /* ====================================================
           WORDMARK SHINE SWEEP

           A soft diagonal highlight glides once across the
           wordmark right after it lands, like light catching
           brushed metal.
           ==================================================== */

        tl.to(
          brandShineRef.current,
          {
            opacity: 1,
            duration: 0.05,
          },
          0.85
        );

        tl.to(
          brandShineRef.current,
          {
            xPercent: 130,
            duration: 0.85,
            ease: "power2.inOut",
          },
          0.85
        );

        tl.to(
          brandShineRef.current,
          {
            opacity: 0,
            duration: 0.2,
          },
          1.55
        );


        /* ====================================================
           FIRST FAST GLOW MOVEMENT
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            x: "16vw",
            y: "-4vh",
            scale: 1.18,
            duration: 0.65,
            ease: "power3.inOut",
          },
          0.4
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "-12vw",
            y: "7vh",
            scale: 1.15,
            duration: 0.7,
            ease: "power3.inOut",
          },
          0.4
        );


        tl.to(
          glowTrailRef.current,
          {
            x: "10vw",
            y: "-2vh",
            scaleX: 1.4,
            scaleY: 0.8,
            rotation: -8,
            duration: 0.65,
            ease: "power3.inOut",
          },
          0.4
        );


        /* ====================================================
           TAGLINE
           ==================================================== */

        tl.to(
          dividerRef.current,
          {
            opacity: 1,
            width: "64px",
            duration: 0.5,
            ease: "power3.out",
          },
          0.68
        );


        tl.to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          },
          0.72
        );


        /* ====================================================
           ORBIT MOVEMENT
           ==================================================== */

        tl.to(
          orbitRef.current,
          {
            rotation: 18,
            scale: 1.08,
            duration: 0.8,
            ease: "sine.inOut",
          },
          0.5
        );


        /* ====================================================
           ACCENT DOT + RADAR PING
           ==================================================== */

        tl.to(
          accentRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            ease: "back.out(2)",
          },
          0.65
        );


        pingRefs.current.forEach((ping, index) => {
          if (!ping) return;

          tl.fromTo(
            ping,
            {
              opacity: 0.55,
              scale: 1,
            },
            {
              opacity: 0,
              scale: 5.5,
              duration: 1.1,
              ease: "power2.out",
            },
            0.68 + index * 0.22
          );
        });


        /* ====================================================
           SECOND FAST GLOW MOVEMENT
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            x: "-14vw",
            y: "10vh",
            scale: 1.28,
            duration: 0.7,
            ease: "power3.inOut",
          },
          1.05
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "15vw",
            y: "-7vh",
            scale: 1.22,
            duration: 0.75,
            ease: "power3.inOut",
          },
          1.05
        );


        tl.to(
          glowTrailRef.current,
          {
            x: "-12vw",
            y: "8vh",
            scaleX: 1.55,
            rotation: 12,
            duration: 0.7,
            ease: "power3.inOut",
          },
          1.05
        );


        /* ====================================================
           BRAND HOLD — a faint breathing pulse keeps the
           background feeling alive while the logo sits still
           ==================================================== */

        tl.to(
          gridRef.current,
          {
            scale: 1.02,
            duration: 0.7,
            ease: "sine.inOut",
          },
          "<"
        );


        /* ====================================================
           ORANGE PULSE
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            scale: 1.42,
            opacity: 1,
            duration: 0.32,
            ease: "power2.out",
          }
        );


        tl.to(
          glowRef.current,
          {
            scale: 1.22,
            duration: 0.38,
            ease: "power2.inOut",
          }
        );


        /* ====================================================
           BRAND EXIT
           ==================================================== */

        tl.to(
          [
            gearRef.current,
            brandRef.current,
            taglineRef.current,
            dividerRef.current,
          ],
          {
            scale: 0.88,
            opacity: 0,
            filter: "blur(7px)",
            duration: 0.55,
            ease: "power3.in",
          }
        );


        /* ====================================================
           GLOW SHOOTS LEFT
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            x: "-18vw",
            y: "-5vh",
            scale: 1.3,
            duration: 0.55,
            ease: "power4.inOut",
          },
          "-=0.35"
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "18vw",
            y: "10vh",
            scale: 1.1,
            duration: 0.6,
            ease: "power4.inOut",
          },
          "-=0.55"
        );


        /* ====================================================
           MESSAGE 1
           ==================================================== */

        tl.to(
          line1Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          }
        );


        /*
         * Glow immediately moves across the screen while
         * the text appears.
         */
        tl.to(
          glowRef.current,
          {
            x: "18vw",
            y: "-6vh",
            scale: 1.34,
            duration: 0.62,
            ease: "power3.inOut",
          },
          "-=0.48"
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "-15vw",
            y: "5vh",
            scale: 1.25,
            duration: 0.68,
            ease: "power3.inOut",
          },
          "-=0.48"
        );


        tl.to(
          glowTrailRef.current,
          {
            x: "15vw",
            y: "-5vh",
            scaleX: 1.7,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "-=0.48"
        );


        tl.to(
          {},
          {
            duration: 0.45,
          }
        );


        /* ====================================================
           MESSAGE 1 EXIT
           ==================================================== */

        tl.to(
          line1Ref.current,
          {
            opacity: 0,
            y: -30,
            filter: "blur(6px)",
            duration: 0.42,
            ease: "power2.in",
          }
        );


        /* ====================================================
           MESSAGE 2
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            x: "-19vw",
            y: "9vh",
            scale: 1.26,
            duration: 0.62,
            ease: "power4.inOut",
          },
          "-=0.2"
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "17vw",
            y: "-8vh",
            scale: 1.18,
            duration: 0.66,
            ease: "power4.inOut",
          },
          "-=0.58"
        );


        tl.to(
          line2Words,
          {
            yPercent: 0,
            duration: 0.62,
            ease: "power4.out",
            stagger: 0.06,
          }
        );


        /*
         * Small pulse when the second message lands.
         */
        tl.to(
          glowRef.current,
          {
            scale: 1.4,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.15"
        );


        tl.to(
          glowRef.current,
          {
            scale: 1.23,
            duration: 0.3,
            ease: "power2.inOut",
          }
        );


        tl.to(
          {},
          {
            duration: 0.4,
          }
        );


        tl.to(
          line2Words,
          {
            yPercent: -115,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.035,
          }
        );


        /* ====================================================
           MESSAGE 3
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            x: "6vw",
            y: "-15vh",
            scale: 1.42,
            duration: 0.7,
            ease: "power4.inOut",
          },
          "-=0.18"
        );


        tl.to(
          glowSecondaryRef.current,
          {
            x: "-11vw",
            y: "11vh",
            scale: 1.28,
            duration: 0.72,
            ease: "power4.inOut",
          },
          "-=0.65"
        );


        tl.to(
          orbitRef.current,
          {
            rotation: -22,
            scale: 1.16,
            duration: 0.65,
            ease: "power3.inOut",
          },
          "-=0.65"
        );



        tl.to(
          line3Chars,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.48,
            ease: "back.out(1.8)",
            stagger: {
              each: 0.022,
              from: "start",
            },
          }
        );


        /*
         * Final visual pulse.
         */
        tl.to(
          glowRef.current,
          {
            scale: 1.5,
            duration: 0.28,
            ease: "power2.out",
          },
          "-=0.18"
        );


        tl.to(
          glowRef.current,
          {
            scale: 1.28,
            duration: 0.35,
            ease: "power2.inOut",
          }
        );


        tl.to(
          {},
          {
            duration: 0.45,
          }
        );


        /* ====================================================
           MESSAGE 3 EXIT
           ==================================================== */

        tl.to(
          line3Ref.current,
          {
            opacity: 0,
            scale: 1.08,
            filter: "blur(8px)",
            duration: 0.5,
            ease: "power2.in",
          }
        );


        /* ====================================================
           CAMERA
           ==================================================== */

        // Mount the camera before the intro visuals disappear so
        // there is no exposed background between the two animations.
        tl.call(() => {
          setShowCameraFocus(true);
        });

        // Allow React/Three.js to mount the camera layer while the
        // existing intro visuals are still covering the screen.
        tl.to(
          {},
          {
            duration: 0.12,
          }
        );


        /* ====================================================
           ALL DECORATIVE ELEMENTS EXIT
           ==================================================== */

        tl.to(
          [
            gridRef.current,
            orbitRef.current,
            
            cometRef.current,
            glowTrailRef.current,
            accentRef.current,
            vignetteRef.current,
            grainRef.current,
            ...cornerGearRefs.current,
          ],
          {
            opacity: 0,
            duration: 0.45,
            ease: "power2.inOut",
          },
          "-=0.08"
        );


        /* ====================================================
           GLOW EXPANDS + FADES
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            opacity: 0,
            scale: 1.75,
            duration: 0.55,
            ease: "power3.inOut",
          },
          "-=0.35"
        );


        tl.to(
          glowSecondaryRef.current,
          {
            opacity: 0,
            scale: 1.5,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.45"
        );


        /*
         * Pause after camera mounts and the handoff is complete.
         */
        tl.call(() => {
          tl.pause();
        });


        /* ====================================================
           FINAL FADE AFTER CAMERA
           ==================================================== */

        tl.to(
          containerRef.current,
  {
    opacity: 0,
    scale: 1.06,
    y: "-2%",
    filter: "blur(14px)",
    duration: 0.85,
    ease: "power2.inOut",
    transformOrigin: "center center",
  }
        );

      }, containerRef);


    /* ==========================================================
       CLEANUP
       ========================================================== */

    return () => {
      timelineRef.current = null;

      ctx.revert();
    };

  }, [onComplete]);


  /* ==========================================================
     PARTICLE POSITIONS
     ========================================================== */

  const particlePositions = [
    ["12%", "18%"],
    ["23%", "72%"],
    ["78%", "17%"],
    ["87%", "66%"],
    ["8%", "48%"],
    ["92%", "34%"],
    ["32%", "13%"],
    ["67%", "83%"],
    ["48%", "8%"],
    ["56%", "92%"],
    ["18%", "88%"],
    ["82%", "87%"],
    ["38%", "77%"],
    ["72%", "42%"],
    ["28%", "38%"],
    ["61%", "22%"],
  ];


  /* ==========================================================
     JSX
     ========================================================== */

  return (
    <div
      ref={containerRef}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        overflow-hidden

        bg-[#fff8ef]
        text-[#171717]
      "
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* =================================================
            SUBTLE TECH GRID
        ================================================= */}

        <div
          ref={gridRef}
          className="
            absolute
            inset-[-10%]

            opacity-0

            will-change-transform

            bg-[linear-gradient(rgba(255,122,41,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,41,0.055)_1px,transparent_1px)]
            bg-[size:70px_70px]

            [mask-image:radial-gradient(circle_at_center,black_0%,transparent_72%)]
          "
        />


        {/* =================================================
            DEPTH VIGNETTE

            A near-invisible darkening toward the edges that
            gives the flat white field a sense of depth.
        ================================================= */}

        <div
          ref={vignetteRef}
          className="
            absolute
            inset-0

            opacity-0

            [background:radial-gradient(circle_at_50%_50%,transparent_38%,rgba(23,23,23,0.05)_100%)]
          "
        />


        {/* =================================================
            CORNER GEARS

            Blurred, low-opacity machinery anchoring each
            corner of the frame.
        ================================================= */}

        {[
          "-left-16 -top-16 sm:-left-20 sm:-top-20 md:-left-28 md:-top-28",
          "-right-16 -top-20 sm:-right-24 sm:-top-24 md:-right-32 md:-top-32",
          "-left-20 -bottom-24 sm:-left-24 sm:-bottom-28 md:-left-32 md:-bottom-36",
          "-right-16 -bottom-16 sm:-right-20 sm:-bottom-20 md:-right-28 md:-bottom-28",
        ].map((position, index) => (
          <div
            key={index}
            ref={(el) => {
              cornerGearRefs.current[index] = el;
            }}
            className={`
              absolute
              ${position}

              h-[150px]
              w-[150px]

              opacity-0

              blur-[16px]

              will-change-transform

              sm:h-[210px]
              sm:w-[210px]
              sm:blur-[22px]

              md:h-[270px]
              md:w-[270px]
              md:blur-[28px]
            `}
          >
            <GearGlyph />
          </div>
        ))}


        {/* =================================================
            MAIN ORANGE GLOW
        ================================================= */}

        <div
          ref={glowRef}
          className="
            absolute
            left-1/2
            top-1/2

            h-[430px]
            w-[430px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#ff641f]/[0.42]

            blur-[105px]

            will-change-transform

            sm:h-[650px]
            sm:w-[650px]

            sm:bg-[#ff641f]/[0.36]
            sm:blur-[145px]

            md:h-[850px]
            md:w-[850px]

            md:bg-[#ff641f]/[0.32]
            md:blur-[175px]
          "
        />


        {/* =================================================
            SECONDARY ORANGE GLOW
        ================================================= */}

        <div
          ref={glowSecondaryRef}
          className="
            absolute
            left-1/2
            top-1/2

            h-[300px]
            w-[300px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#ff9a5c]/[0.28]

            blur-[90px]

            will-change-transform

            sm:h-[470px]
            sm:w-[470px]

            sm:blur-[120px]

            md:h-[620px]
            md:w-[620px]

            md:blur-[155px]
          "
        />


        {/* =================================================
            LIGHT TRAIL
        ================================================= */}

        <div
          ref={glowTrailRef}
          className="
            absolute

            left-1/2
            top-1/2

            h-[180px]
            w-[520px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#ff7133]/[0.18]

            blur-[75px]

            will-change-transform

            sm:h-[230px]
            sm:w-[700px]

            md:h-[280px]
            md:w-[900px]

            md:blur-[100px]
          "
        />


        {/* =================================================
            ORBIT RINGS
        ================================================= */}

        <div
          ref={orbitRef}
          className="
            absolute

            left-1/2
            top-1/2

            h-[380px]
            w-[380px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            border
            border-[#ff7a29]/[0.12]

            opacity-0

            will-change-transform

            sm:h-[560px]
            sm:w-[560px]

            md:h-[720px]
            md:w-[720px]
          "
        >

          <div
            className="
              absolute
              inset-[12%]

              rounded-full

              border
              border-[#ff7a29]/[0.08]
            "
          />

          <div
            className="
              absolute

              -right-1
              top-1/2

              h-2
              w-2

              -translate-y-1/2

              rounded-full

              bg-[#ff7a29]/40

              blur-[1px]
            "
          />

          <div
            className="
              absolute

              left-[12%]
              top-[18%]

              h-1.5
              w-1.5

              rounded-full

              bg-[#ff7a29]/30
            "
          />

        </div>

        {particlePositions.map(
          ([left, top], index) => (
            <div
              key={index}
              ref={(el) => {
                particlesRef.current[index] = el;
              }}
              className="
                absolute

                h-[3px]
                w-[3px]

                rounded-full

                bg-[#f56b0a]/40

                blur-[0.5px]

                will-change-transform
              "
              style={{
                left,
                top,
              }}
            />
          )
        )}


        {/* =================================================
            SMALL ACCENT + RADAR PING
        ================================================= */}

        <div
          ref={accentRef}
          className="
            absolute

            left-[24%]
            top-[28%]

            h-2
            w-2

            rounded-full

            bg-[#ff7a29]/70

            shadow-[0_0_25px_rgba(255,122,41,0.55)]

            opacity-0
          "
        />

        {[0, 1].map((index) => (
          <div
            key={index}
            ref={(el) => {
              pingRefs.current[index] = el;
            }}
            className="
              absolute

              left-[24%]
              top-[28%]

              h-2
              w-2

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              border
              border-[#ff7a29]/60

              opacity-0
            "
          />
        ))}


        {/* =================================================
            GRAIN

            A whisper of film-like texture so the flat
            gradients don't feel too clean or synthetic.
        ================================================= */}

        <svg
          ref={grainRef}
          className="
            absolute
            inset-0

            h-full
            w-full

            opacity-0

            mix-blend-multiply
          "
        >
          <filter id="wisenery-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="
                0 0 0 0 1
                0 0 0 0 0.42
                0 0 0 0 0.16
                0 0 0 0.05 0
              "
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#wisenery-grain)"
          />
        </svg>

      </div>


      {/* =====================================================
          CAMERA FOCUS ANIMATION

          This remains a completely separate layer.
      ===================================================== */}

      {showCameraFocus && (
        <div
          className="
            absolute
            inset-0
            z-50
          "
        >
          <CameraFocusAnimation
            onComplete={handleCameraComplete}
          />
        </div>
      )}


      {/* =====================================================
          CENTER CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          flex
          w-full

          items-center
          justify-center
        "
      >

        {/* ===================================================
            NARRATION
        =================================================== */}

        <div
          className="
            relative

            flex

            min-h-[110px]
            w-full

            items-center
            justify-center

            px-4

            text-center

            sm:min-h-[90px]
            sm:px-5

            md:min-h-[100px]
          "
        >

          {/* =================================================
              MESSAGE 1
          ================================================= */}

          <h1
            ref={line1Ref}
            className="
              absolute

              w-[94%]

              text-[22px]
              font-medium
              leading-snug
              tracking-[-0.3px]

              text-[#171717]

              sm:w-[90%]
              sm:text-[32px]
              sm:tracking-[-0.5px]

              md:text-[50px]
              md:tracking-[-1px]
            "
          >
            Learning is changing.
          </h1>


          {/* =================================================
              MESSAGE 2
          ================================================= */}

          <h1
            ref={line2Ref}
            className="
              absolute

              w-[94%]

              text-[22px]
              font-medium
              leading-snug
              tracking-[-0.3px]

              text-[#171717]

              sm:w-[90%]
              sm:text-[32px]
              sm:tracking-[-0.5px]

              md:text-[50px]
              md:tracking-[-1px]
            "
          >
            {splitWords("Technology is evolving.")}
          </h1>


          {/* =================================================
              MESSAGE 3
          ================================================= */}

          <h1
            ref={line3Ref}
            className="
              absolute

              w-[95%]

              text-[21px]
              font-medium
              leading-snug
              tracking-[-0.3px]

              text-[#171717]

              sm:w-[92%]
              sm:text-[32px]
              sm:tracking-[-0.5px]

              md:text-[50px]
              md:tracking-[-1px]
            "
          >
            {splitChars("Education should evolve too.")}
          </h1>

        </div>


        {/* ===================================================
            WISENERY BRAND
        =================================================== */}

        <div
          className="
            absolute

            flex

            w-full
            max-w-full

            flex-col
            items-center
            justify-center

            px-4

            text-center
          "
        >

          {/* =================================================
              GEAR / W LOGO
          ================================================= */}

          <div
            ref={gearRef}
            className="
              mb-2

              flex
              h-[42px]
              w-[42px]

              items-center
              justify-center

              sm:mb-3
              sm:h-[60px]
              sm:w-[60px]

              md:h-[82px]
              md:w-[82px]
            "
          >

            <svg
              viewBox="0 0 40 40"
              className="
                h-full
                w-full
              "
            >

              <g
                fill="#FF7A29"
                className="logo-gear"
              >

                <rect
                  x="17"
                  y="1"
                  width="6"
                  height="8"
                  rx="1"
                />

                <rect
                  x="17"
                  y="31"
                  width="6"
                  height="8"
                  rx="1"
                />

                <rect
                  x="1"
                  y="17"
                  width="8"
                  height="6"
                  rx="1"
                />

                <rect
                  x="31"
                  y="17"
                  width="8"
                  height="6"
                  rx="1"
                />

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


              <text
                x="20"
                y="25.5"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="14"
                fill="#FF7A29"
              >
                W
              </text>

            </svg>

          </div>


          {/* =================================================
              WISENERY WORDMARK

              Wrapped so the shine sweep can be clipped to
              exactly the text's footprint.
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
            "
          >

            <h1
              ref={brandRef}
              className="
                text-[34px]
                font-bold
                tracking-[-1px]

                sm:text-[56px]
                sm:tracking-[-2px]

                md:text-[82px]
                md:tracking-[-4px]
              "
            >
              <span className="text-[#171717]">
                WISE
              </span>

              <span className="text-[#f56b0a]">
                NERY
              </span>
            </h1>


            <div
              ref={brandShineRef}
              className="
                pointer-events-none
                absolute
                inset-0

                -skew-x-12

                opacity-0

                will-change-transform
              "
              style={{
                background:
                  "linear-gradient(75deg, transparent 35%, rgba(255,255,255,0.85) 48%, rgba(255,154,92,0.85) 52%, transparent 65%)",
                mixBlendMode: "overlay",
              }}
            />

          </div>


          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            ref={dividerRef}
            className="
              mt-2.5

              h-px
              w-0

              bg-gradient-to-r
              from-transparent
              via-[#ff7a29]/60
              to-transparent

              sm:mt-3.5
            "
          />


          {/* =================================================
              TAGLINE
          ================================================= */}

          <p
            ref={taglineRef}
            className="
              mt-2

              text-[9px]
              font-medium
              uppercase
              tracking-[2px]

              text-black/50

              sm:text-[12px]
              sm:tracking-[6px]
            "
          >
            Learn • Create • Grow
          </p>

        </div>

      </div>

    </div>
  );
}


export default IntroAnimation;