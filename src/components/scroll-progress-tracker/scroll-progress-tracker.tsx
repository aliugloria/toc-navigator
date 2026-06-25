import { useEffect, useState } from "react";

interface ScrollProgressProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  totalSeconds?: number;
}

// function useScrollProgress(
//   scrollContainerRef: React.RefObject<HTMLDivElement | null>,
// ) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const total = scrollHeight - clientHeight;
//       setProgress(total > 0 ? scrollTop / total : 0);
//     };

//     container.addEventListener("scroll", handleScroll, { passive: true });
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [scrollContainerRef]);

//   return progress;
// }

function useScrollProgress(
  scrollContainerRef: React.RefObject<HTMLDivElement | null>,
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };

    handleScroll();  
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return progress;
}

function formatTime(progress: number, totalSeconds = 222) {
  const elapsed = Math.round(progress * totalSeconds);
  const m = Math.floor(elapsed / 60)
    .toString()
    .padStart(2, "0");
  const s = (elapsed % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function formatTotal(totalSeconds = 222) {
  const m = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const SIZE = 32;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollProgressCircle({
  scrollContainerRef,
}: ScrollProgressProps) {
  const progress = useScrollProgress(scrollContainerRef);
  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      style={{
        transform: "rotate(-90deg)",
        display: "block",
        flexShrink: 0,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        borderRadius: "50%",
        background: "#7F77DD",
      }}
    >
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        fill="none"
        stroke="rgba(0,0,0,0.12)"
        strokeWidth={STROKE}
      />
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        fill="none"
        stroke="#fff"
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
      />
    </svg>
  );
}

export function ScrollProgressBar({
  scrollContainerRef,
  totalSeconds = 222,
}: ScrollProgressProps) {
  const progress = useScrollProgress(scrollContainerRef);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
        padding: "0 0.25rem",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontVariantNumeric: "tabular-nums",
          color: "rgba(255,255,255,0.7)",
          flexShrink: 0,
          minWidth: 32,
        }}
      >
        {formatTime(progress, totalSeconds)}
      </span>

      <div
        style={{
          flex: 1,
          height: 3,
          borderRadius: 99,
          background: "rgba(255,255,255,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 99,
            background: "#fff",
            transformOrigin: "left",
            transform: `scaleX(${progress})`,
            transition: "transform 0.1s linear",
          }}
        />
      </div>

      <span
        style={{
          fontSize: 11,
          fontVariantNumeric: "tabular-nums",
          color: "rgba(255,255,255,0.4)",
          flexShrink: 0,
          minWidth: 32,
          textAlign: "right",
        }}
      >
        {formatTotal(totalSeconds)}
      </span>
    </div>
  );
}
