import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import CameraFocusAnimation from "./CameraFocusAnimation";


/* ============================================================
   TEXT SPLIT HELPERS

   These wrap each word/char in its own span so GSAP can
   animate them individually (mask reveal / stagger wave).
   ============================================================ */

/*
 * Wraps each word in an overflow-hidden "mask" span, with an
 * inner span that actually moves. Animating the inner span's
 * y from 110% -> 0% creates a "shutter" reveal per word.
 */
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

/*
 * Wraps each character in its own span so GSAP can stagger
 * opacity / scale / blur per character (wave effect).
 * Spaces are preserved so words don't collapse together.
 */
function splitChars(text) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className="char-inner inline-block will-change-transform"
      style={{ whiteSpace: char === " " ? "pre" : "normal" }}
    >
      {char}
    </span>
  ));
}


/* ============================================================
   INTRO ANIMATION
   ============================================================ */

function IntroAnimation({
  onComplete,
}) {
  const containerRef = useRef(null);

  const glowRef = useRef(null);


  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const brandRef = useRef(null);
  const taglineRef = useRef(null);
  const gearRef = useRef(null);

  /*
   * Main GSAP timeline.
   *
   * CameraFocusAnimation uses this ref to resume
   * the intro after its own animation finishes.
   */
  const timelineRef = useRef(null);

  /*
   * Controls whether the camera focus component
   * is currently visible.
   */
  const [showCameraFocus, setShowCameraFocus] =
    useState(false);


  /* ==========================================================
     CAMERA COMPLETE
     ========================================================== */

  const handleCameraComplete = () => {
    /*
     * Hide the camera animation.
     */
    setShowCameraFocus(false);

    /*
     * Resume the main intro timeline.
     *
     * This is what allows the WISENERY logo
     * to appear ONLY after the camera animation
     * has completely finished.
     */
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

        const tl =
          gsap.timeline({
            onComplete: () => {
              onComplete?.();
            },
          });

        /*
         * Store timeline so CameraFocusAnimation
         * can resume it later.
         */
        timelineRef.current = tl;


        /* ====================================================
           SPLIT-TEXT TARGETS

           line2 animates via its inner "word" spans (mask
           reveal). line3 animates via its "char" spans
           (staggered wave). Both containers themselves stay
           visible/static — only their children move.
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
            scale: 0.4,
            opacity: 0,
          }
        );





        /*
         * Message 1 — plain blur/rise container.
         */
        gsap.set(
          line1Ref.current,
          {
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }
        );


        /*
         * Message 2 — container stays visible; only the
         * per-word inner spans are hidden (shifted down
         * inside their overflow-hidden mask).
         */
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


        /*
         * Message 3 — container stays visible; per-char
         * spans start hidden/scaled down/blurred for the
         * wave-in effect.
         */
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
          taglineRef.current,
          {
            opacity: 0,
            y: 15,
          }
        );


        /* ====================================================
           1. AMBIENT GLOW
           ==================================================== */

        tl.to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
          }
        )


        /* ====================================================
           2. ORANGE LINE
           ==================================================== */




        /* ====================================================
           3. MESSAGE 1 — blur / rise in & out
           ==================================================== */

        .to(
          line1Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
          }
        )


        .to(
          {},
          {
            duration: 0.7,
          }
        )


        .to(
          line1Ref.current,
          {
            opacity: 0,
            y: -30,
            filter: "blur(6px)",
            duration: 0.5,
            ease: "power2.in",
          }
        )


        /* ====================================================
           4. MESSAGE 2 — word-by-word mask reveal
           ==================================================== */

        .to(
          line2Words,
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power4.out",
            stagger: 0.07,
          }
        )


        .to(
          {},
          {
            duration: 0.6,
          }
        )


        .to(
          line2Words,
          {
            yPercent: -115,
            duration: 0.45,
            ease: "power2.in",
            stagger: 0.04,
          }
        )


        /* ====================================================
           5. MESSAGE 3 — character wave-in
           ==================================================== */

        .to(
          line3Chars,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.55,
            ease: "back.out(1.8)",
            stagger: {
              each: 0.025,
              from: "start",
            },
          }
        )


        .to(
          {},
          {
            duration: 0.7,
          }
        )


        .to(
          line3Ref.current,
          {
            opacity: 0,
            scale: 1.08,
            filter: "blur(8px)",
            duration: 0.6,
            ease: "power2.in",
          }
        )


        /* ====================================================
           6. START CAMERA FOCUS ANIMATION
           ==================================================== */

        /*
         * Show CameraFocusAnimation.
         */
.call(() => {
  setShowCameraFocus(true);
})

.call(() => {
  tl.pause();
})


        /*
         * IMPORTANT:
         *
         * Nothing related to WISENERY comes here.
         *
         * CameraFocusAnimation will call:
         *
         *     handleCameraComplete()
         *
         * which resumes this timeline.
         *
         * Once resumed, GSAP continues with the
         * WISENERY logo animation below.
         */


        /* ====================================================
           7. GEAR / W LOGO
           ==================================================== */

        .to(
          gearRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
          }
        )


        /* ====================================================
           8. BRAND
           ==================================================== */

        .to(
          brandRef.current,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          }
        )


        /* ====================================================
           9. TAGLINE
           ==================================================== */

        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        )


        /* ====================================================
           10. HOLD LOGO
           ==================================================== */

        .to(
          {},
          {
            duration: 1,
          }
        )


        /* ====================================================
           11. LOGO EXIT
           ==================================================== */

        .to(
          [
            gearRef.current,
            brandRef.current,
            taglineRef.current,
          ],
          {
            scale: 1.15,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in",
          }
        )


        /* ====================================================
           12. FINAL FADE
           ==================================================== */

        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.7,
            ease: "power2.inOut",
          }
        );

      }, containerRef);


    return () => {
      /*
       * Clear timeline ref.
       */
      timelineRef.current = null;

      /*
       * Kill GSAP animations and restore DOM.
       */
      ctx.revert();
    };

  }, [onComplete]);


  /* ==========================================================
     JSX
     ========================================================== */

  return (
    <div
      ref={containerRef}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        <div
          ref={glowRef}
          className="
            absolute
            left-1/2
            top-1/2
            h-[240px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#f56b0a]/10
            blur-[80px]

            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[130px]
          "
        />

      </div>


      {/* =====================================================
          CAMERA FOCUS ANIMATION
          
          This appears AFTER the 3 narration messages
          and BEFORE the WISENERY logo.
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
          
          WISENERY logo + tagline
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

        {/* =================================================
            ORANGE LINE
        ================================================= */}




        {/* =================================================
            NARRATION
        ================================================= */}

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

          {/* -----------------------------------------------
              MESSAGE 1 — blur / rise
          ------------------------------------------------ */}

          <h1
            ref={line1Ref}
            className="
              absolute
              w-[94%]
              text-[22px]
              font-medium
              leading-snug
              tracking-[-0.3px]

              sm:w-[90%]
              sm:text-[32px]
              sm:tracking-[-0.5px]

              md:text-[50px]
              md:tracking-[-1px]
            "
          >
            Learning is changing.
          </h1>


          {/* -----------------------------------------------
              MESSAGE 2 — word mask reveal

              Container itself stays visible; each word
              lives inside an overflow-hidden span so it
              can "shutter" up into view.
          ------------------------------------------------ */}

          <h1
            ref={line2Ref}
            className="
              absolute
              w-[94%]
              text-[22px]
              font-medium
              leading-snug
              tracking-[-0.3px]

              sm:w-[90%]
              sm:text-[32px]
              sm:tracking-[-0.5px]

              md:text-[50px]
              md:tracking-[-1px]
            "
          >
            {splitWords("Technology is evolving.")}
          </h1>


          {/* -----------------------------------------------
              MESSAGE 3 — character wave

              Container itself stays visible; each
              character animates in individually.
          ------------------------------------------------ */}

          <h1
            ref={line3Ref}
            className="
              absolute
              w-[95%]
              text-[21px]
              font-medium
              leading-snug
              tracking-[-0.3px]

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


        {/* =================================================
            WISENERY BRAND
        ================================================= */}

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
          ================================================= */}

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

            <span className="text-white">
              WISE
            </span>

            <span className="text-[#f56b0a]">
              NERY
            </span>

          </h1>


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
              text-white/50

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