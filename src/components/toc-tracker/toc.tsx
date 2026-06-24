import { useEffect, useRef, useState } from "react";
import { SimplexNoiseGradient, SwirlGradient } from "../shaders/shaders";
import { AnimatePresence, motion } from "motion/react";
import {
  ScrollProgressBar,
  ScrollProgressCircle,
} from "../scroll-progress-tracker/scroll-progress-tracker";
import { sectionsBreakdown } from "../data";

interface TocProps {
  sectionsBreakdown: { id: string; label: string }[];
  activeSection: string;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const Toc = ({
  activeSection,
  scrollContainerRef,
  isOpen,
  setIsOpen,
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
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      transition={{ layout: { duration: 1, type: "spring" } }}
      style={{ boxShadow: "0px 10px 30px rgba(0,0,0, 0.5)" }}
      layout
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-black min-w-[400px] min-h-10  max-w-md flex items-center ${
        isOpen ? "rounded-3xl" : "rounded-full"
      } shadow-2xl p-1.5`}
    >
      {isOpen && (
        <motion.div
          className="mainTOC p-4 rounded-2xl w-full"
          initial={{ opacity: 0, borderColor: "transparent" }}
          animate={{
            opacity: 1,
            borderColor: "rgba(255,255,255,0.15)",
          }}
          transition={{
            opacity: { duration: 1 },
            borderColor: { duration: 0.3, delay: 5 },
          }}
          style={{ border: "1px solid transparent" }}
          exit={{ opacity: 0 }}
          layout
        >
          <div className="flex items-center gap-2 mb-4">
            <SwirlGradient />
            <p className="flex flex-col text-left text-white text-sm">
              The Evolution of Web Design
              <span className="text-gray-500 text-xs">Aliu Gloria</span>
            </p>
          </div>

          {/* section list */}
          <div className="flex flex-col gap-1 mb-4">
            {sectionsBreakdown.map((item, idx) => {
              const isActive = activeSection === item.label;
              const handleSectionClick = () => {
                // const handleSectionClick = (e: React.MouseEvent)
                // prevent toggling the TOC open/close
                // e.stopPropagation();
                const container = scrollContainerRef.current;
                if (!container) return;

                const target = container.querySelector(`#${item.id}`);
                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              };

              return (
                <div
                  key={idx}
                  onClick={handleSectionClick}
                  className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors "
                  style={{
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: isActive ? "#fff" : "rgba(255,255,255,0.2)",
                      transition: "background 0.2s",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 500 : 400,
                      transition: "color 0.2s, font-weight 0.2s",
                    }}
                    className={`cursor-pointer hover:text-white transition-colors ${
                      isActive ? "text-white" : "text-white/35"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <ScrollProgressBar scrollContainerRef={scrollContainerRef} />
        </motion.div>
      )}

      {!isOpen && (
        <motion.div
          layout="position"
          className="tocFooter flex items-center justify-between gap-4 w-full"
        >
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

          <ScrollProgressCircle scrollContainerRef={scrollContainerRef} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Toc;
