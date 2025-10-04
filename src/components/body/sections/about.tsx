import EducationGalaxy from "@/components/ui/education-galaxy";
import ExperienceGalaxy from "@/components/ui/experience-galaxy";
import SkillsGalaxy from "@/components/ui/skills-galaxy";
import { useMemo, useState } from "react";

const About = () => {
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 50; i++) {
      starArray.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
      });
    }
    return starArray;
  }, []);

  // 👇 added "experience" as a possible tab
  const [activeTab, setActiveTab] = useState<"education" | "skills" | "experience">("education");

  const aboutDescription =
    "Here is my Education, Experience, and Skills to learn more about my academic background and professional expertise.";

  return (
    <section id="about" className="bg-secondary text-foreground py-16 z-[20]">
      <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-blackops text-white mb-6">
          About Me
        </h2>
        <p className="text-sm md:text-xl font-light text-muted-foreground mb-6">
          {aboutDescription}
        </p>
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <div className="relative flex w-full max-w-[450px] [box-shadow:var(--shadow-blue-strong)]">
          <div
            className={`absolute top-0 h-full w-1/3 bg-gradient-to-br from-[#0F1A2A] via-[#162539] to-[#1C3147]
              cursor-pointer transition-all duration-500 ${
                activeTab === "skills"
                  ? "translate-x-full"
                  : activeTab === "experience"
                  ? "translate-x-[200%]"
                  : "translate-x-0"
              }`}
          ></div>

          {/* Buttons */}
          <button
            className={`relative w-1/3 py-2 text-xs sm:text-sm md:text-base font-blackops z-10 ${
              activeTab === "education" ? "text-keyword" : "text-white"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
          <button
            className={`relative w-1/3 py-2 text-xs sm:text-sm md:text-base font-blackops z-10 ${
              activeTab === "skills" ? "text-keyword" : "text-white"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`relative w-1/3 py-2 text-xs sm:text-sm md:text-base font-blackops z-10 ${
              activeTab === "experience" ? "text-keyword" : "text-white"
            }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>
      </div>

      {activeTab === "education" && <EducationGalaxy stars={stars} />}
      {activeTab === "skills" && <SkillsGalaxy stars={stars} />}
      {activeTab === "experience" && <ExperienceGalaxy  stars={stars} />}
    </section>
  );
};

export default About;
