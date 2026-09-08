import React from "react";

const buildings = [1, 2, 3, 4, 5];
const trees = [1, 2, 3, 4, 5, 6, 7, 8];

function Crane({ number }) {
  return (
    <div className={`cs-crane cs-crane-${number}`}>
      <div className="cs-cable cs-cable-1" />
      <div className="cs-cable cs-cable-2" />
      <div className="cs-cable cs-cable-3" />

      <div className="cs-stand" />
      <div className="cs-weight" />
      <div className="cs-cabin" />
      <div className="cs-arm" />
    </div>
  );
}

function Building({ number }) {
  return (
    <div
      className={`cs-building cs-building-${number}`}
      aria-hidden="true"
    />
  );
}

function Tree({ number }) {
  return (
    <div
      className={`cs-tree cs-tree-${number}`}
      aria-hidden="true"
    >
      <div className="cs-tree-leaves" />
      <div className="cs-tree-trunk" />
    </div>
  );
}

export default function ConstructionScene() {
  return (
    <div className="construction-scene" aria-hidden="true">
      {/* Buildings */}
      <div className="cs-buildings">
        {buildings.map((number) => (
          <Building key={number} number={number} />
        ))}
      </div>

      {/* Trees */}
      <div className="cs-trees">
        {trees.map((number) => (
          <Tree key={number} number={number} />
        ))}
      </div>

      {/* Cranes */}
      <Crane number={1} />
      <Crane number={2} />
      <Crane number={3} />

      <style>{`

        /* =====================================================
           SCENE
        ===================================================== */

        .construction-scene {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          width: 100%;
          height: 390px;

          overflow: hidden;

          pointer-events: none;

          z-index: 1;
        }


        /* =====================================================
           GROUND
        ===================================================== */

        .construction-scene::after {
          content: "";

          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          height: 12px;

          background:
            linear-gradient(
              to bottom,
              #FF6B00 0 2px,
              #10283D 2px 100%
            );
          box-shadow:
            0 -12px 30px rgba(255,107,0,0.05);

          z-index: 20;
        }


        /* =====================================================
           BUILDINGS
        ===================================================== */

        .cs-buildings {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 12px;

          width: 100%;
          height: 200px;

          z-index: 10;
        }

        .cs-building {
          position: absolute;

          bottom: 0;

          background:
            linear-gradient(
              115deg,
              #31566F 0%,
              #29465B 72%,
              #20394B 72%,
              #20394B 100%
            );
          border-top: 2px solid rgba(255,107,0,0.28);
        }

        .cs-building::after {
          content: "";

          position: absolute;

          left: 10%;
          bottom: 10%;

          width: 80%;
          height: 80%;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.16) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            );
          background-size: 12px 12px;
          opacity: 0.48;
        }


        /* Small building */
        .cs-building-1 {
          right: 25%;

          width: 55px;
          height: 115px;

          z-index: 11;
        }


        /* Medium */
        .cs-building-2 {
          right: 35%;

          width: 70px;
          height: 95px;

          z-index: 10;
        }


        /* Tall */
        .cs-building-3 {
          right: 45%;

          width: 70px;
          height: 145px;

          z-index: 10;
        }


        /* Large building */
        .cs-building-4 {
          right: 12%;

          width: 150px;
          height: 155px;

          z-index: 12;
        }

        .cs-building-4::after {
          width: 75%;
          left: 12%;
        }


        /* Small foreground building */
        .cs-building-5 {
          right: 55%;

          width: 42px;
          height: 70px;

          z-index: 13;
        }

        .cs-building-5::after {
          display: none;
        }


        /* =====================================================
           TREES
        ===================================================== */

        .cs-trees {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 12px;

          height: 100px;

          z-index: 14;
        }

        .cs-tree {
          position: absolute;

          bottom: 0;

          width: 12px;
          height: 55px;
        }

        .cs-tree-trunk {
          position: absolute;

          bottom: 0;
          left: 4px;

          width: 4px;
          height: 10px;

          background: #7B6756;
        }

        .cs-tree-leaves {
          position: absolute;

          bottom: 9px;
          left: 0;

          width: 0;
          height: 0;

          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 45px solid #31566F;
        }

        .cs-tree-leaves::after {
          content: "";

          position: absolute;

          left: -6px;

          border-left: 6px solid transparent;
          border-right: 0 solid transparent;
          border-bottom: 45px solid #243F52;
        }


        .cs-tree-1 {
          left: 67%;
        }

        .cs-tree-2 {
          left: 69%;
        }

        .cs-tree-3 {
          left: 73%;
        }

        .cs-tree-4 {
          left: 61%;
        }

        .cs-tree-5 {
          left: 63%;
        }

        .cs-tree-6 {
          left: 65%;
        }

        .cs-tree-7 {
          left: 57%;
        }

        .cs-tree-8 {
          left: 59%;
        }


        /* =====================================================
           CRANE
        ===================================================== */

        .cs-crane {
          position: absolute;

          width: 260px;
          height: 173px;

          bottom: 12px;

          perspective: 600px;

          z-index: 16;
        }


        /* Main arm */

        .cs-arm {
          position: absolute;

          width: 100%;
          height: 12px;

          top: 26px;
          left: 0;

          border-radius: 10px 3px 3px 3px;

          background: #86B7C6;

          transform-origin: 80% center;

          animation:
            cs-crane-movement
            12s
            infinite
            alternate;
        }


        /* Stand */

        .cs-stand {
          position: absolute;

          width: 13px;
          height: 100%;

          right: 65px;
          top: 0;

          background:
            linear-gradient(
              to top,
              #24465C,
              #86B7C6
            );

          z-index: 3;
        }


        /* Cabin */

        .cs-cabin {
          position: absolute;

          width: 31px;
          height: 16px;

          right: 62px;
          top: 35px;

          background: #5D91A6;

          border: 1px solid rgba(255,107,0,0.65);

          z-index: 5;

          transform-origin: 80% center;

          animation:
            cs-crane-movement
            12s
            infinite
            alternate;
        }

        .cs-cabin::after {
          content: "";

          position: absolute;

          left: 0;
          top: 10px;

          width: 100%;
          height: 2px;

          background: white;
        }


        /* Weight */

        .cs-weight {
          position: absolute;

          width: 20px;
          height: 34px;

          right: 10px;
          top: 21px;

          background: #5D91A6;

          border: 1px solid rgba(255,107,0,0.65);

          z-index: 4;

          transform-origin: left center;

          animation:
            cs-weight-movement
            12s
            infinite
            alternate;
        }


        /* Cable 1 */

        .cs-cable-1 {
          position: absolute;

          width: 60%;
          height: 1px;

          top: 0;
          left: 11%;

          background: #FF6B00;

          transform-origin: right center;

          animation:
            cs-cable-1
            12s
            infinite
            alternate;

          z-index: 1;
        }


        /* Cable 2 */

        .cs-cable-2 {
          position: absolute;

          width: 19%;
          height: 1px;

          top: 0;
          right: 8%;

          background: #FF6B00;

          transform-origin: left center;

          animation:
            cs-cable-2
            12s
            infinite
            alternate;
        }


        /* Hanging cable */

        .cs-cable-3 {
          position: absolute;

          width: 1px;
          height: 52px;

          top: 38px;
          left: 9%;

          background: #FF6B00;

          transform-origin: top center;

          animation:
            cs-cable-3
            12s
            ease-in-out
            infinite
            alternate;

          z-index: 2;
        }


        .cs-cable-3::after {
          content: "";

          position: absolute;

          left: -12px;
          bottom: 0;

          width: 25px;
          height: 2px;

          background: #FF6B00;
        }


        /* =====================================================
           CRANE POSITIONS
        ===================================================== */

        .cs-crane-1 {
          left: 18%;
        }

        .cs-crane-2 {
          left: 30%;

          transform:
            scale(.75)
            scaleX(-1);

          opacity: .85;

          z-index: 8;
        }

        .cs-crane-3 {
          left: 42%;

          transform: scale(.8);

          z-index: 9;
        }


        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes cs-crane-movement {

          0%, 20% {
            transform: rotateY(0deg);
          }

          70%, 100% {
            transform: rotateY(45deg);
          }

        }


        @keyframes cs-weight-movement {

          0%, 20% {
            transform:
              rotateY(0deg)
              translateX(0);
          }

          70%, 100% {
            transform:
              rotateY(45deg)
              translateX(-50%);
          }

        }


        @keyframes cs-cable-1 {

          0%, 20% {
            transform:
              rotateY(0deg)
              rotateZ(-10deg);
          }

          70%, 100% {
            transform:
              rotateY(45deg)
              rotateZ(-10deg);
          }

        }


        @keyframes cs-cable-2 {

          0%, 20% {
            transform:
              rotateY(0deg)
              rotateZ(29deg);
          }

          70%, 100% {
            transform:
              rotateY(15deg)
              rotateZ(29deg);
          }

        }


        @keyframes cs-cable-3 {

          0% {
            transform:
              translate(0, 0);
          }

          20% {
            transform:
              translateX(25px)
              translateY(-5px);
          }

          60% {
            transform:
              translateX(110px)
              translateY(-8px);
          }

          90%, 100% {
            height: 100px;

            transform:
              translateX(90px)
              translateY(-5px);
          }

        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

          .cs-crane-2,
          .cs-crane-3 {
            display: none;
          }

          .cs-building-2,
          .cs-building-3 {
            display: none;
          }

          .cs-crane-1 {
            left: 10%;
          }

        }


        @media (max-width: 640px) {

          .construction-scene {
            height: 280px;
          }

          .cs-crane-1 {
            left: 5%;
            transform: scale(.75);
            transform-origin: bottom left;
          }

          .cs-building-4 {
            width: 90px;
            height: 110px;
          }

          .cs-building-1 {
            width: 40px;
            height: 80px;
          }

          .cs-tree-1,
          .cs-tree-2,
          .cs-tree-7,
          .cs-tree-8 {
            display: none;
          }

        }

      `}</style>
    </div>
  );
}