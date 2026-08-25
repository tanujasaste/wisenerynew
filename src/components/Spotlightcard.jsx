import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

/**
 * SpotlightCard
 * A floating dark rounded-card + half-disc composition with a glowing
 * "W" logo, soft studio lighting, and GSAP-driven intro / idle / parallax
 * animation. Built with Three.js + GSAP.
 *
 * Usage:
 *   npm install three gsap
 *   import SpotlightCard from "./SpotlightCard";
 *   <SpotlightCard logoText="W" />
 *
 * Props:
 *   logoText     - text rendered as the glowing logo (default "W")
 *   interactive  - set false to disable mouse/touch parallax, e.g. when
 *                  embedding this as a small icon inside something else
 *                  that already has its own transform/rotation applied
 *   idle         - set false to skip the looping float/pulse animation
 *                  and just settle into the intro pose
 *   background   - CSS background for the mount div. Pass "transparent"
 *                  when nesting this inside another dark scene (like a
 *                  camera head) instead of using it as a standalone hero
 */
export default function SpotlightCard({
  logoText = "W",
  className = "",
  style = {},
  interactive = true,
  idle = true,
  background,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let W = mount.clientWidth || window.innerWidth;
    let H = mount.clientHeight || window.innerHeight;

    // ---------- Scene / Camera / Renderer ----------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(32, W / H, 0.1, 100);
    camera.position.set(0, 0.4, 9.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    mount.appendChild(renderer.domElement);

    // ---------- Lighting ----------
    const hemi = new THREE.HemisphereLight(0xffffff, 0x757168, 0.55);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0xfff7ea, 1.05);
    key.position.set(-4.5, 6, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -6;
    key.shadow.camera.right = 6;
    key.shadow.camera.top = 6;
    key.shadow.camera.bottom = -6;
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 20;
    key.shadow.radius = 6;
    key.shadow.bias = -0.0015;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.22);
    fill.position.set(3, -1.5, 4);
    scene.add(fill);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.35);
    rimLight.position.set(2, 2, -5);
    scene.add(rimLight);

    // Backdrop plane — invisible except where it catches the soft drop shadow
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    shadowPlane.position.set(0.4, -0.3, -2.2);
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // ---------- Helpers ----------
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

    function halfDiscShape(radius) {
      const s = new THREE.Shape();
      s.moveTo(0, -radius);
      s.lineTo(0, radius);
      s.absarc(0, 0, radius, Math.PI / 2, -Math.PI / 2, true);
      s.lineTo(0, -radius);
      return s;
    }

    function starShape(outer, inner) {
      const s = new THREE.Shape();
      const pts = 4;
      for (let i = 0; i < pts * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const a = (i / (pts * 2)) * Math.PI * 2 - Math.PI / 2;
        const px = Math.cos(a) * r,
          py = Math.sin(a) * r;
        if (i === 0) s.moveTo(px, py);
        else s.lineTo(px, py);
      }
      s.closePath();
      return s;
    }

    function createGlowTexture(text) {
      const size = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = '900 460px Arial, "Helvetica Neue", sans-serif';

      ctx.save();
      ctx.shadowColor = "rgba(255,255,255,0.95)";
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 90;
      ctx.fillText(text, size / 2, size / 2 + 10);
      ctx.shadowBlur = 55;
      ctx.fillText(text, size / 2, size / 2 + 10);
      ctx.restore();

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffffff";
      ctx.fillText(text, size / 2, size / 2 + 10);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      tex.anisotropy = 4;
      return tex;
    }

    function createRadialGlowTexture() {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(255,255,255,0.9)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.35)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      return tex;
    }

    // ---------- Materials ----------
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x2b2c30,
      roughness: 0.5,
      metalness: 0.18,
    });

    // ---------- Rig ----------
    const rig = new THREE.Group();
    rig.rotation.set(-0.18, 0.32, -0.42);
    scene.add(rig);

    // ---------- Main card ----------
    const cardW = 2.5,
      cardH = 4.5,
      cardR = 0.62,
      cardDepth = 0.5;
    const cardShape = roundedRectShape(cardW, cardH, cardR);
    const cardGeo = new THREE.ExtrudeGeometry(cardShape, {
      depth: cardDepth,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.07,
      bevelSegments: 10,
      curveSegments: 32,
    });
    cardGeo.translate(0, 0, -cardDepth / 2);

    const cardGroup = new THREE.Group();
    cardGroup.position.set(-0.55, 0.35, 0.4);
    rig.add(cardGroup);

    const cardMesh = new THREE.Mesh(cardGeo, bodyMat);
    cardMesh.castShadow = true;
    cardMesh.receiveShadow = true;
    cardGroup.add(cardMesh);

    // Glow logo
    const wTex = createGlowTexture(logoText);
    const wMat = new THREE.MeshBasicMaterial({
      map: wTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const wPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 1.55), wMat);
    wPlane.position.set(0, 0.05, cardDepth / 2 + 0.02);
    cardGroup.add(wPlane);

    const haloTex = createRadialGlowTexture();
    const haloMat = new THREE.MeshBasicMaterial({
      map: haloTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const halo = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), haloMat);
    halo.position.set(0, 0.05, cardDepth / 2 + 0.01);
    cardGroup.add(halo);

    // ---------- Half-disc companion piece ----------
    const discGroup = new THREE.Group();
    discGroup.position.set(1.85, -1.15, -0.35);
    rig.add(discGroup);

    const discShape = halfDiscShape(1.35);
    const discGeo = new THREE.ExtrudeGeometry(discShape, {
      depth: cardDepth,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.07,
      bevelSegments: 10,
      curveSegments: 32,
    });
    discGeo.translate(0, 0, -cardDepth / 2);
    const discMesh = new THREE.Mesh(discGeo, bodyMat);
    discMesh.castShadow = true;
    discMesh.receiveShadow = true;
    discGroup.add(discMesh);

    // ---------- Sparkle accent ----------
    const starGeo = new THREE.ShapeGeometry(starShape(0.16, 0.045));
    const starMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
    const sparkle = new THREE.Mesh(starGeo, starMat);
    sparkle.position.set(3.1, -2.65, 1.4);
    scene.add(sparkle);

    // ---------- Resize ----------
    function onResize() {
      W = mount.clientWidth || window.innerWidth;
      H = mount.clientHeight || window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    }
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(mount);
    window.addEventListener("resize", onResize);

    // ---------- Intro animation ----------
    gsap.set(rig.scale, { x: 0.001, y: 0.001, z: 0.001 });
    gsap.set(rig.position, { y: -1.2 });

    const timelines = [];
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    timelines.push(intro);
    intro
      .to(rig.scale, { x: 1, y: 1, z: 1, duration: 1.3 }, 0)
      .to(rig.position, { y: 0, duration: 1.3 }, 0)
      .to(wMat, { opacity: 1, duration: 1, ease: "power2.out" }, 0.55)
      .to(haloMat, { opacity: 0.55, duration: 1.2, ease: "power2.out" }, 0.55)
      .to(starMat, { opacity: 0.85, duration: 0.6 }, 0.9)
      .call(() => {
        if (idle) startIdle();
      });

    // ---------- Idle looping motion ----------
    function startIdle() {
      timelines.push(
        gsap.to(rig.position, { y: "+=0.16", duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(rig.rotation, { z: rig.rotation.z + 0.05, duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(cardGroup.rotation, { y: 0.06, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(discGroup.position, {
          y: discGroup.position.y - 0.14,
          duration: 2.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.2,
        }),
        gsap.to(haloMat, { opacity: 0.3, duration: 1.9, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(wMat, { opacity: 0.85, duration: 1.9, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(sparkle.scale, { x: 1.35, y: 1.35, z: 1.35, duration: 1.15, ease: "sine.inOut", yoyo: true, repeat: -1 }),
        gsap.to(starMat, { opacity: 0.4, duration: 1.15, ease: "sine.inOut", yoyo: true, repeat: -1 })
      );
    }

    // ---------- Cursor / touch parallax ----------
    const camQX = gsap.quickTo(camera.position, "x", { duration: 0.9, ease: "power3.out" });
    const camQY = gsap.quickTo(camera.position, "y", { duration: 0.9, ease: "power3.out" });
    const rigQX = gsap.quickTo(rig.rotation, "y", { duration: 1.1, ease: "power3.out" });
    const rigQY = gsap.quickTo(rig.rotation, "x", { duration: 1.1, ease: "power3.out" });
    const baseRigRotX = rig.rotation.x,
      baseRigRotY = rig.rotation.y;

    function handlePointer(nx, ny) {
      camQX(nx * 0.7);
      camQY(0.4 - ny * 0.35);
      rigQX(baseRigRotY + nx * 0.12);
      rigQY(baseRigRotX - ny * 0.08);
    }

    function onMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      handlePointer(nx, ny);
    }
    function onTouchMove(e) {
      if (!e.touches.length) return;
      const rect = mount.getBoundingClientRect();
      const t = e.touches[0];
      const nx = ((t.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((t.clientY - rect.top) / rect.height - 0.5) * 2;
      handlePointer(nx, ny);
    }
    if (interactive) {
      mount.addEventListener("mousemove", onMouseMove);
      mount.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    // ---------- Render loop ----------
    let rafId;
    function animate() {
      rafId = requestAnimationFrame(animate);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    animate();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      if (interactive) {
        mount.removeEventListener("mousemove", onMouseMove);
        mount.removeEventListener("touchmove", onTouchMove);
      }

      timelines.forEach((tl) => tl.kill());
      gsap.killTweensOf([rig.position, rig.rotation, cardGroup.rotation, discGroup.position, sparkle.scale]);
      gsap.killTweensOf([wMat, haloMat, starMat]);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      wTex.dispose();
      haloTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [logoText, interactive, idle]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: style.minHeight ?? 480,
        background:
          background ??
          "radial-gradient(ellipse at 42% 36%, #ecebe6 0%, #ddddd8 45%, #c7c6c1 100%)",
        overflow: "hidden",
        ...style,
      }}
    />
  );
}