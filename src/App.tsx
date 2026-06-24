import { CircleDot } from "lucide-react";
import "./App.css";
import { sectionsBreakdown } from "./components/data";
import Socials from "./components/socials";
import Toc from "./components/toc-tracker/toc";
import { useEffect, useRef, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
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

              {section.points.map((point:any) => (
                <div
                  key={point.id}
                  id={point.id}
                  className="my-8 flex flex-col items-start gap-2 text-left"
                >
                  <h3 className="text-md font-semibold flex items-center gap-1">
                    <CircleDot size={20} />
                    {point.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {point.content}
                  </p>
                  {point.image && (
                    <div className="h-[400px] w-full">
  <img
                      src={point.image}
                      alt={point.label}
                      className="w-full h-full object-cover rounded-md mt-2"
                    />
                    </div>
                  
                  )}
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
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Socials />

      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </main>
  );
}

export default App;
