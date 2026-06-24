import { useEffect, useRef, useState } from "react";
import ScrollProgressCircle from "../scroll-progress-tracker/scroll-progress-tracker";
import { SimplexNoiseGradient, SwirlGradient } from "../shaders/shaders";
import { AnimatePresence, motion } from "motion/react";

interface TocProps {
  sectionsBreakdown: {}[];
  activeSection: string;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const Toc = ({
  // sectionsBreakdown,
  activeSection,
  scrollContainerRef,
}: TocProps) => {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const st = container.scrollTop;
      setScrollDir(st > lastScrollTop.current ? "down" : "up");
      lastScrollTop.current = st;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <div className="fixed bottom-10 left-1/2  -translate-x-1/2 bg-black min-w-[400px] max-h-40 max-w-md rounded-full shadow-2xl p-1">
      {/* <div className="mainTOC">
        <SwirlGradient />
        <div className="">sections and sublist map</div>
      </div> */}

      {/* mini toc pill view */}
      <div className="tocFooter flex items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-4">
          <SimplexNoiseGradient />
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSection}
              className="text-white text-sm font-medium"
              initial={{ opacity: 0, y: scrollDir === "down" ? 12 : -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: scrollDir === "down" ? -12 : 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {activeSection}
            </motion.p>
          </AnimatePresence>
        </div>

        <ScrollProgressCircle />
      </div>
    </div>
  );
};

export default Toc;

// - the toc footer only shows the active id as the user scrolls
// - progressbar circle fills or decrease based on user scroll activity
// - opened toc blurs out the rest of the page details so the focus can be on the toc component
// - opened toc replaces sections title in toc footer with the main project title (TOC navigation)
// - expanding and minimizing toc should be a smooth interaction
// - toc closes when user clicks outside of the toc container
