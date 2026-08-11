import { useEffect, useRef } from "react";

/**
 * Fixed, scroll-driven background: parallax glass orbs, a drifting grid and a
 * top progress bar. Purely decorative.
 */
export function ScrollBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      el.style.setProperty("--scroll", String(y));
      el.style.setProperty("--progress", String(max > 0 ? y / max : 0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="scroll-bg">
      <div className="scroll-bg-grid" />
      <div className="scroll-bg-orb scroll-bg-orb-a" />
      <div className="scroll-bg-orb scroll-bg-orb-b" />
      <div className="scroll-bg-orb scroll-bg-orb-c" />
      <div className="scroll-bg-glow" />
      <div className="scroll-progress" />
    </div>
  );
}
