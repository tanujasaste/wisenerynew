import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const courses = [
  {
    id: "coding",
    name: "CODING",
    x: 23,
    y: 27,
  },
  {
    id: "robotics",
    name: "ROBOTICS",
    x: 77,
    y: 27,
  },
  {
    id: "engineering",
    name: "ENGINEERING",
    x: 77,
    y: 73,
  },
  {
    id: "autocad",
    name: "AUTOCAD",
    x: 23,
    y: 73,
  },
];

const CameraFocusAnimation = ({ onComplete }) => {
  const [active, setActive] = useState(0);
  const [revealedCourse, setRevealedCourse] = useState(-1);

  /*
   * Cumulative clockwise rotation.
   *
   * We deliberately don't calculate a fresh CSS angle
   * for every target. Every next target is reached by
   * continuing clockwise.
   */

  // Responsive camera angles.
  // Use both width and aspect ratio because two phones can have the same
  // width but very different viewport heights. The tighter angles on
  // unusually tall/narrow phones keep the camera + beam inside the stage.
  const getCameraAngles = () => {
    if (typeof window === "undefined") {
      return [-150, -20, 28, 145];
    }

    const width = window.innerWidth;
    const height = window.innerHeight || 1;
    const aspect = width / height;

    // Very tall / narrow mobile viewport
    if (width <= 390 || aspect < 0.48) {
      return [-132, -35, 35, 132];
    }

    // Tall mobile viewport
    if (width <= 480 || aspect < 0.60) {
      return [-140, -28, 30, 140];
    }

    // Wider mobile / tablet viewport
    if (width <= 768) {
      return [-145, -24, 29, 143];
    }

    return [-150, -20, 28, 145];
  };

  const [cameraAngles, setCameraAngles] = useState(getCameraAngles);
  const [rotation, setRotation] = useState(getCameraAngles()[0]);

  const headRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const nextAngles = getCameraAngles();
      setCameraAngles(nextAngles);
      setRotation(nextAngles[active]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  useEffect(() => {
    // First course: camera/flashlight gets a short moment to appear
    // before CODING is revealed.
    const revealDelay = active === 0 ? 1 : 1000;

    const revealTimer = setTimeout(() => {
      setRevealedCourse(active);
    }, revealDelay);

    const nextTimer = setTimeout(() => {
      if (active < courses.length - 1) {
        const nextIndex = active + 1;

        // Start moving camera toward next course.
        // The next course remains hidden.
        setActive(nextIndex);
        setRotation(cameraAngles[nextIndex]);
      } else {
        setTimeout(() => {
          onComplete?.();
        }, 1100);
      }
    }, 1600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(nextTimer);
    };
  }, [active, onComplete, cameraAngles]);

  useEffect(() => {
    const mount = headRef.current;
    if (!mount) return;

    const W = mount.clientWidth || 108;
    const H = mount.clientHeight || 170;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, W / H, 0.1, 20);
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(W, H);
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x4a4a4a, 0.6);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xfff7ea, 0.9);
    key.position.set(-2, 3, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.25);
    fill.position.set(2, -1, 3);
    scene.add(fill);

    function roundedRectShape(w, h, r) {
      const s = new THREE.Shape();
      const x = -w / 2,
        y = -h / 2;
      s.moveTo(x, y + r);
      s.lineTo(x, y + h - r);
      s.quadraticCurveTo(x, y + h, x + r, y + h);
      s.lineTo(x + w - r, y + h);
      s.quadraticCurveTo(x + w, y + h, x + w, y + h - r);
      s.lineTo(x + w, y + r);
      s.quadraticCurveTo(x + w, y, x + w - r, y);
      s.lineTo(x + r, y);
      s.quadraticCurveTo(x, y, x, y + r);
      return s;
    }



    function createRadialGlowTexture() {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      grad.addColorStop(0, "rgba(255,255,255,0.85)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.3)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    const plateW = 1.3,
      plateH = 2.0,
      plateR = 0.4,
      plateDepth = 0.32;
    const plateGeo = new THREE.ExtrudeGeometry(
      roundedRectShape(plateW, plateH, plateR),
      {
        depth: plateDepth,
        bevelEnabled: true,
        bevelThickness: 0.045,
        bevelSize: 0.045,
        bevelSegments: 8,
        curveSegments: 24,
      },
    );
    plateGeo.translate(0, 0, -plateDepth / 2);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0x2c2d30,
      roughness: 0.5,
      metalness: 0.2,
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    scene.add(plate);


    const haloTex = createRadialGlowTexture();
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.1), haloMat);
    halo.position.set(0, 0, plateDepth / 2 + 0.01);
    scene.add(halo);

    // Render only when Three.js properties actually change.
    // The previous implementation used a permanent requestAnimationFrame loop,
    // which kept the GPU busy even when the scene was visually static.
    const renderScene = () => {
      renderer.render(scene, camera);
    };

    // Some mobile browsers finish laying out an element a moment after mount.
    // Keep the Three.js camera/renderer synced with the actual element size.
    const resizeThree = () => {
      const nextW = mount.clientWidth || W;
      const nextH = mount.clientHeight || H;
      camera.aspect = nextW / nextH;
      camera.updateProjectionMatrix();
      renderer.setSize(nextW, nextH, false);
      renderScene();
    };

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resizeThree)
        : null;

    resizeObserver?.observe(mount);
    window.addEventListener("orientationchange", resizeThree);

    gsap.set(plate.scale, { x: 0.001, y: 0.001, z: 0.001 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(plate.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.9,
      onUpdate: renderScene,
    }, 0)
      .to(haloMat, {
        opacity: 0.5,
        duration: 0.9,
        onUpdate: renderScene,
      }, 0.35)

    // Draw the initial frame once.
    renderScene();

    return () => {
      tl.kill();
      gsap.killTweensOf([plate.scale, plate.rotation, haloMat]);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });

      resizeObserver?.disconnect();
      window.removeEventListener("orientationchange", resizeThree);
      haloTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);


  return (
    <div className="absolute inset-0 h-full w-full max-w-full overflow-hidden bg-[#050505]">
      <div
        className="
          absolute
          left-1/2
          top-1/2
          aspect-square
          h-[min(88vw,78vh)]
          w-[min(88vw,78vh)]
          h-[min(88vw,78dvh)]
          w-[min(88vw,78dvh)]
          max-w-[100%]
          -translate-x-1/2
          -translate-y-1/2

          md:inset-0
          md:left-0
          md:top-0
          md:h-full
          md:w-full
          md:translate-x-0
          md:translate-y-0
          md:aspect-auto
        "
      >
        {/* =====================================================
          COURSES
      ====================================================== */}

        {courses.map((course, index) => {
          const isActive = index === active;
          const isRevealed = index <= revealedCourse;

          return (
            <div
              key={course.id}
              className={`
              absolute
              -translate-x-1/2
              -translate-y-1/2
              transition-all
              duration-700
              ease-out
${
  isActive && isRevealed
    ? "scale-105 opacity-100"
    : isRevealed
      ? "scale-100 opacity-20"
      : "scale-100 opacity-0"
}
            `}
style={{
  left:
    course.id === "coding" || course.id === "autocad"
      ? "23%"
      : "77%",

  top:
    course.id === "coding" || course.id === "robotics"
      ? "27%"
      : "73%",

  width: "clamp(90px, 18vw, 150px)",
}}
            >
              {/* Focus illumination */}

              <div
                className={`
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[150px]
                w-[150px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white
                blur-[50px]
                transition-opacity
                duration-700

                sm:blur-[clamp(55px,8vw,65px)]

                md:blur-[80px]
${isActive && isRevealed ? "opacity-[0.14]" : "opacity-0"}
              `}
              />

              {/* Course */}

              <div
                className={`
                flex
                h-[clamp(42px,11vw,100px)]
                w-[clamp(72px,18vw,150px)]
                items-center
                justify-center
                border
                transition-all
                duration-700

${
  isActive && isRevealed
    ? "border-white/70 bg-white/[0.06]"
    : isRevealed
      ? "border-white/10 bg-white/[0.015]"
      : "border-transparent bg-transparent"
}
              `}
              >
                <span
                  className={`
                  text-[clamp(7px,1.8vw,12px)]
                  font-medium
                  tracking-[clamp(1px,0.45vw,3px)]
                  transition-colors
                  duration-700

${
  isActive && isRevealed
    ? "text-white"
    : isRevealed
      ? "text-white/25"
      : "text-transparent"
}
                `}
                >
                  {course.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* =====================================================
    CAMERA + SPOTLIGHT ASSEMBLY
====================================================== */}

        <div
          className="
    absolute
    left-1/2
    top-1/2
    z-30
    h-[clamp(120px,34vw,220px)]
    w-[clamp(120px,34vw,220px)]
    max-w-[100%]
    transition-transform
    duration-1000
    ease-[cubic-bezier(0.65,0,0.35,1)]

    sm:h-[clamp(145px,28vw,185px)]
    sm:w-[clamp(145px,28vw,185px)]

    md:h-[220px]
    md:w-[220px]
  "
          style={{
            transform: `
      translate(-50%, -50%)
       translateY(clamp(-10px, -2.5vw, -14px))
       translateX(clamp(-10px, -2.5vw, -14px))
      rotate(${rotation}deg)
    `,
          }}
        >
          {/* =================================================
      SPOTLIGHT BEAM

      IMPORTANT:
      This has NO rotation of its own.
      It is positioned relative to the camera body.
  ================================================== */}

          <div
            className="
      pointer-events-none
      absolute
      left-[calc(50%+clamp(60px,17vw,110px))]
      top-1/2
      h-px
      w-[55vw]
      origin-left
      -translate-y-1/2

      sm:left-[calc(50%+clamp(72px,14vw,92px))]

      md:left-[calc(50%+110px)]
    "
          >
            {/* Main soft beam */}

            <div
              className="
        absolute
        left-0
        top-1/2
        h-[160px]
        w-full
        -translate-y-1/2
        bg-gradient-to-r
        from-white/[0.14]
        via-white/[0.065]
        to-transparent
        blur-[26px]

        sm:h-[200px]
        sm:blur-[32px]

        md:h-[240px]
        md:blur-[38px]
      "
            />

            {/* Outer falloff */}

            <div
              className="
        absolute
        left-0
        top-1/2
        h-[280px]
        w-full
        -translate-y-1/2
        bg-gradient-to-r
        from-white/[0.035]
        via-white/[0.015]
        to-transparent
        blur-[50px]

        sm:h-[350px]
        sm:blur-[62px]

        md:h-[420px]
        md:blur-[75px]
      "
            />
          </div>

          {/* =================================================
      SEMICIRCLE NECK

      Straight edge faces the rectangle.
      Curved edge faces outward.
  ================================================== */}

<div
  className="
    absolute
    left-1/2
    top-1/2

    h-[clamp(45px,13vw,128px)]
    w-[clamp(18px,5vw,60px)]

    -translate-y-1/2

    z-[5]

    shadow-[0_14px_30px_rgba(0,0,0,0.35)]

    translate-x-[clamp(23px,7vw,54px)]

    sm:translate-x-[clamp(32px,7vw,47px)]
    md:translate-x-[54px]
  "
  style={{
    borderRadius: "999px 0 0 999px",
    background: "linear-gradient(135deg, #3a3d43, #202226)",
  }}
/>

          {/* =================================================
      CAMERA RECTANGLE
  ================================================== */}

          <div
            className="
  absolute
  left-1/2
  top-1/2
  z-10

  h-[clamp(76px,21vw,172px)]
  w-[clamp(48px,14vw,108px)]
  -translate-x-1/2
  -translate-y-1/2

  overflow-hidden
  rounded-[clamp(10px,3vw,15px)]
  bg-[#2c2d30]
  shadow-[0_18px_40px_rgba(0,0,0,0.45)]

  rounded-[clamp(13px,3.5vw,28px)]
"
          >
            {/* Three.js spotlight body */}

            <div
              ref={headRef}
              className="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
            />

            {/* Surface highlight */}

            <div
              className="
        pointer-events-none
        absolute
        inset-0
        rounded-[19px]
        bg-gradient-to-br
        from-white/[0.12]
        via-transparent
        to-black/[0.18]

        sm:rounded-[24px]

        md:rounded-[28px]
      "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          VIGNETTE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-40
          bg-[radial-gradient(circle_at_center,transparent_8%,rgba(0,0,0,0.75)_100%)]
        "
      />
    </div>
  );
};

export default CameraFocusAnimation;
