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

  /*
   * Cumulative clockwise rotation.
   *
   * We deliberately don't calculate a fresh CSS angle
   * for every target. Every next target is reached by
   * continuing clockwise.
   */

  const CAMERA_ANGLES = [
  -150, // CODING
  -20,  // ROBOTICS
  28,   // ENGINEERING
  145,  // AUTOCAD
];

const [rotation, setRotation] = useState(CAMERA_ANGLES[0]);

  const headRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
if (active < courses.length - 1) {
  const nextIndex = active + 1;

  setActive(nextIndex);
  setRotation(CAMERA_ANGLES[nextIndex]);
}else {
        setTimeout(() => {
          onComplete?.();
        }, 1100);
      }
    }, 1600);

    return () => clearTimeout(timer);
  }, [active, onComplete]);

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    function createGlowTexture(text) {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = '900 260px Arial, "Helvetica Neue", sans-serif';

      ctx.save();
      ctx.shadowColor = "rgba(255,255,255,0.95)";
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 45;
      ctx.fillText(text, size / 2, size / 2 + 6);
      ctx.shadowBlur = 26;
      ctx.fillText(text, size / 2, size / 2 + 6);
      ctx.restore();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, size / 2, size / 2 + 6);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    function createRadialGlowTexture() {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
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
    const plateGeo = new THREE.ExtrudeGeometry(roundedRectShape(plateW, plateH, plateR), {
      depth: plateDepth,
      bevelEnabled: true,
      bevelThickness: 0.045,
      bevelSize: 0.045,
      bevelSegments: 8,
      curveSegments: 24,
    });
    plateGeo.translate(0, 0, -plateDepth / 2);
    const plateMat = new THREE.MeshStandardMaterial({ color: 0x2c2d30, roughness: 0.5, metalness: 0.2 });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    scene.add(plate);

    const wTex = createGlowTexture("W");
    const wMat = new THREE.MeshBasicMaterial({
      map: wTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const wPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 1.05), wMat);
    wPlane.position.set(0, 0, plateDepth / 2 + 0.02);
    scene.add(wPlane);

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

    gsap.set(plate.scale, { x: 0.001, y: 0.001, z: 0.001 });
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(plate.scale, { x: 1, y: 1, z: 1, duration: 0.9 }, 0)
      .to(wMat, { opacity: 1, duration: 0.8 }, 0.35)
      .to(haloMat, { opacity: 0.5, duration: 0.9 }, 0.35)
      .call(() => {
        gsap.to(wMat, { opacity: 0.8, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(haloMat, { opacity: 0.28, duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
        gsap.to(plate.rotation, { y: 0.18, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      });

    let rafId;
    function animate() {
      rafId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      tl.kill();
      gsap.killTweensOf([plate.scale, plate.rotation, wMat, haloMat]);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      wTex.dispose();
      haloTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const current = courses[active];

  return (
<div className="absolute inset-0 h-full w-full overflow-hidden bg-[#050505]">

      <div
        className="
          absolute
          left-1/2
          top-1/2
          aspect-square
          h-[min(88vw,78vh)]
          w-[min(88vw,78vh)]
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
                isActive
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-20"
              }
            `}
            style={{
              left: `${course.x}%`,
              top: `${course.y}%`,
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

                sm:h-[180px]
                sm:w-[180px]
                sm:blur-[65px]

                md:h-[220px]
                md:w-[220px]
                md:blur-[80px]
                ${
                  isActive
                    ? "opacity-[0.14]"
                    : "opacity-0"
                }
              `}
            />

            {/* Course */}

            <div
              className={`
                flex
                h-[70px]
                w-[112px]
                items-center
                justify-center
                border
                transition-all
                duration-700

                sm:h-[86px]
                sm:w-[132px]

                md:h-[100px]
                md:w-[150px]
                ${
                  isActive
                    ? "border-white/70 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.015]"
                }
              `}
            >
              <span
                className={`
                  text-[9px]
                  font-medium
                  tracking-[1.5px]
                  transition-colors
                  duration-700

                  sm:text-[10px]
                  sm:tracking-[2.5px]

                  md:text-xs
                  md:tracking-[3px]
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/25"
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
    h-[150px]
    w-[150px]
    transition-transform
    duration-1000
    ease-[cubic-bezier(0.65,0,0.35,1)]

    sm:h-[185px]
    sm:w-[185px]

    md:h-[220px]
    md:w-[220px]
  "
  style={{
    transform: `
      translate(-50%, -50%)
       translateY(clamp(-20px, -4vw, -14px))
       translateX(clamp(-20px, -4vw, -14px))
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
      left-[149px]
      top-1/2
      h-px
      w-[55vw]
      origin-left
      -translate-y-1/2

      sm:left-[183px]

      md:left-[218px]
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
      right-[11px]
      top-1/2
      h-[87px]
      w-[41px]
      -translate-y-1/2
      translate-x-[6px]
      z-[5]
      shadow-[0_14px_30px_rgba(0,0,0,0.35)]

      sm:right-[13px]
      sm:h-[108px]
      sm:w-[50px]
      sm:translate-x-[7px]

      md:right-[16px]
      md:h-[128px]
      md:w-[60px]
      md:translate-x-[8px]
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

  h-[90px]
  w-[57px]
  -translate-x-1/2
  -translate-y-1/2

  overflow-hidden
  rounded-[15px]
  bg-[#2c2d30]
  shadow-[0_18px_40px_rgba(0,0,0,0.45)]

  sm:h-[125px]
  sm:w-[79px]
  sm:rounded-[20px]

  md:h-[172px]
  md:w-[108px]
  md:rounded-[28px]
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