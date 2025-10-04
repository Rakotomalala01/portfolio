import { FC, useEffect, useRef, useState } from "react";
import { IoBriefcaseOutline, IoPaperPlaneOutline } from "react-icons/io5";

const HIGHLIGHT_KEYWORDS = [
  "React",
  "Spring Boot",
  "Git",
  "TensorFlow",
  "NLP",
  "AI",
  "MVP",
  "Java",
  "Python",
  "TypeScript",
  "Node.js",
  "MySQL",
  "Oracle",
  "SQL",
  "Agile",
  "Scrum",
  "MiniLM-L12-v2",
  "KPI",
  "dashboard",
  "API",
  "backend",
  "frontend",
  "chat",
];

function highlightKeywords(text: string) {
  const regex = new RegExp(`\\b(${HIGHLIGHT_KEYWORDS.join("|")})\\b`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    HIGHLIGHT_KEYWORDS.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const ExperienceTitle: FC = () => (
  <div className="flex flex-col items-center mb-10">
    <IoBriefcaseOutline className="w-12 h-12 mb-4 text-white" />
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
      My Professional Experience
    </h2>
  </div>
);

type ExperienceItem = {
  title: string;
  institution: string;
  period: string;
  bullets: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Freelance Developer",
    institution: "Independent – Montréal, QC",
    period: "January 2025 – Present",
    bullets: [
      "Designed and built full-stack web apps using React, Spring Boot, and Git.",
      "Integrated AI features using TensorFlow and NLP for proof-of-concept solutions.",
      "Enabled clients to validate ideas quickly by delivering fast, testable MVPs tailored to real-world use cases.",
    ],
  },
  {
    title: "Student Software Developer Consultant",
    institution: "Confidential Partner – Montréal, QC",
    period: "August – December 2024",
    bullets: [
      "Built a full-stack proof-of-concept app using React, Node.js, MySQL, and Git in an Agile (Scrum) team setting.",
      "Integrated a MiniLM-L12-v2 conversational agent for safety FAQs and added app features such as KPI dashboards, request tracking, and chat history.",
      "Delivered the solution successfully to a real client, who expressed satisfaction with both functionality and presentation.",
    ],
  },
  {
    title: "Oracle Fusion Developer Intern",
    institution: "Ville de Montréal – Montréal, QC",
    period: "September – December 2022",
    bullets: [
      "Queried and maintained Oracle SQL databases to support data integration and reporting workflows.",
      "Delivered 20+ custom reports using Oracle BI tools, actively used by multiple departments across the city.",
      "Collaborated with a technical team to ensure timely delivery of reporting solutions aligned with project goals.",
    ],
  },
];

const Experience: FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [centers, setCenters] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const measureCenters = () => {
    const w = wrapperRef.current;
    if (!w) return;
    const wrapperTop = w.getBoundingClientRect().top + window.scrollY;
    const newCenters = cardRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - wrapperTop;
      return top + rect.height / 2;
    });
    setCenters(newCenters);
  };

  useEffect(() => {
    const id = requestAnimationFrame(measureCenters);
    const onResize = () => measureCenters();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const starTop = activeIndex !== null ? centers[activeIndex] ?? 0 : 0;

  return (
    <div className="relative max-w-4xl mx-auto px-6 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 h-48 w-48 rounded-full blur-3xl bg-[#0F1A2A]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl bg-[#1C3147]" />
      </div>

      <ExperienceTitle />

      <div ref={wrapperRef} className="relative">
        <div
          className="pointer-events-none absolute left-3 top-0 bottom-0 w-[2px]
          bg-gradient-to-b from-white/40 via-white/15 to-transparent
          shadow-[0_0_15px_2px_rgba(255,255,255,0.15)]
          z-10 rounded-full"
        />
        <div
          className="pointer-events-none absolute left-3 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] transition-all duration-1000 ease-in-out"
          style={{ top: `${starTop}px` }}
        />
        <div className="pl-10 flex flex-col items-start gap-10">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={[
                "bg-background/40 p-6 rounded-lg shadow-lg backdrop-blur-sm w-full text-left transition-all duration-200 border cursor-pointer",
                index === activeIndex
                  ? "border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.18)]"
                  : "border-transparent opacity-90",
              ].join(" ")}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <h4 className="text-lg md:text-xl font-semibold text-white mb-1">
                {exp.title}
              </h4>
              <p className="text-institution font-semibold text-xs sm:text-sm mb-1">
                {exp.institution}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.period}
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <IoPaperPlaneOutline className="mt-[2px] h-4 w-4 text-keyword shrink-0 rotate-90" />
                    <span>{highlightKeywords(b)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
