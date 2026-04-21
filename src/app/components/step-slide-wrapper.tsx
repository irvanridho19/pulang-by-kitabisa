import { useState, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";

/**
 * Wraps stepper page content with a slide-in animation.
 * Reads `slideDir` from location.state:
 *   - "forward" → slide in from the right
 *   - "back"    → slide in from the left
 *   - undefined → no animation (instant)
 */
export function StepSlideWrapper({ children }: { children: ReactNode }) {
  const location = useLocation();
  const slideDir = (location.state as Record<string, unknown> | null)?.slideDir as
    | "forward"
    | "back"
    | undefined;

  const [phase, setPhase] = useState<"initial" | "animating">(
    slideDir ? "initial" : "animating"
  );

  useEffect(() => {
    if (!slideDir) return;
    // Use double-rAF to ensure the initial position is painted first
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase("animating"));
    });
    return () => cancelAnimationFrame(id);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const initialX = slideDir === "back" ? "-100%" : "100%";

  return (
    <div
      style={{
        transform: phase === "initial" ? `translateX(${initialX})` : "translateX(0)",
        transition: phase === "animating" && slideDir ? "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)" : "none",
        willChange: slideDir ? "transform" : undefined,
      }}
    >
      {children}
    </div>
  );
}
