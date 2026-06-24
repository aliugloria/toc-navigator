import { useEffect, useState, useRef } from "react";

const SIZE = 32;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ScrollProgressCircleProps {
  scrollContainerSelector?: string;
}

export default function ScrollProgressCircle({
  scrollContainerSelector = ".sectionsWrapper",
}: ScrollProgressCircleProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<Element | null>(null);

  useEffect(() => {
    const container = document.querySelector(scrollContainerSelector);
    if (!container) return;
    containerRef.current = container;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? scrollTop / total : 0);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerSelector]);

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
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius:"50%",
        background:"#7F77DD"
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
