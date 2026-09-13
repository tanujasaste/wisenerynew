import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  trigger = "scroll",
  delay = 0,
  y = 0,
  x = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (trigger === "mount") {
      const t = setTimeout(() => {
        setAnimating(true);
        setVisible(true);
      }, 30);
      return () => clearTimeout(t);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimating(true);
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [trigger]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0)"
          : `translate3d(${x}px, ${y}px, 0)`,
        transition:
          "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${delay}ms`,
        // Only promote to a GPU layer while actually animating.
        // Leaving will-change on permanently keeps a compositor layer
        // alive for the element's entire lifetime, which adds cost to
        // every scroll frame even after the reveal has finished.
        willChange: animating ? "transform, opacity" : "auto",
      }}
      onTransitionEnd={() => setAnimating(false)}
    >
      {children}
    </div>
  );
}

export default Reveal;