import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, [data-cursor='hover']";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      const hovering = (e.target as Element | null)?.closest?.(INTERACTIVE);
      ringRef.current?.setAttribute("data-hover", hovering ? "true" : "false");
    };

    const onDown = () => ringRef.current?.setAttribute("data-down", "true");
    const onUp = () => ringRef.current?.setAttribute("data-down", "false");

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary"
      />
      <div
        ref={ringRef}
        aria-hidden
        data-hover="false"
        data-down="false"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-primary/50 bg-primary/5 backdrop-blur-[2px] transition-[width,height,background-color,border-color] duration-200 data-[down=true]:scale-90 data-[hover=true]:h-14 data-[hover=true]:w-14 data-[hover=true]:bg-primary/10"
        style={{ boxShadow: "var(--shadow-glass)" }}
      />
    </>
  );
}
