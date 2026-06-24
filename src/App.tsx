import { CircleDot } from "lucide-react";
import "./App.css";
import { sectionsBreakdown } from "./components/data";
import Socials from "./components/socials";
import Toc from "./components/toc-tracker/toc";
import { useEffect, useRef, useState } from "react";

function App() {
  // const [showFullTOC, setShowFullTOC] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  console.log(activeSection);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = container.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        const containerTop = container.getBoundingClientRect().top;
        if (top - containerTop <= 80) {
          current = section.id;
        }
      });

      if (current) {
        const match = sectionsBreakdown.find((s) => s.id === current);
        setActiveSection(match?.label ?? current);
      }
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [sectionsBreakdown]);

  return (
    <main className="h-screen w-full flex flex-col justify-between">
      <div className="h-full w-full">
        <h1 className="font-penScript">TOC NAVIGATION</h1>

        {/* sections */}
        <div
          ref={scrollContainerRef} 
          className="sectionsWrapper max-h-[70vh] overflow-y-auto shadow-lg max-w-2xl mx-auto border border-gray-50 rounded-md mt-10 pt-5"
        >
          {sectionsBreakdown.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-16 px-8 max-w-2xl flex flex-col items-start text-left"
            >
              <h2 className="text-2xl font-bold mb-4">{section.label}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
                {section.content}
              </p>

              {section.points.map((point) => (
                <div
                  key={point.id}
                  id={point.id}
                  className="my-8 flex flex-col items-start gap-2 text-left"
                >
                  <h3 className="text-lg font-semibold flex items-center gap-1">
                    <CircleDot />
                    {point.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {point.content}
                  </p>
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>

      <Toc
        sectionsBreakdown={sectionsBreakdown}
        activeSection={activeSection}
        scrollContainerRef={scrollContainerRef}
      />
      <Socials />
    </main>
  );
}

export default App;
