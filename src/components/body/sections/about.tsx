import Education from "@/components/ui/education";
import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"education" | "skills">("education");
  const aboutDescription =
    "Here is my Education and Skills to learn more about my academic background and professional expertise.";

  return (
    <section
      id="about"
      className="bg-secondary text-foreground py-16 px-6 md:px-12 lg:px-20 z-[20]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-blackops text-white mb-6">
          About Me
        </h2>
        <p className="text-sm md:text-xl font-light text-muted-foreground mb-6">
          {aboutDescription}
        </p>

        <div className="relative flex items-center justify-center mb-8">
          <div className="relative flex w-full max-w-[300px] md:max-w-[400px] [box-shadow:var(--shadow-blue-strong)]">
            <div
              className={`absolute top-0 h-full w-1/2 bg-gradient-to-br from-[#0F1A2A] via-[#162539] to-[#1C3147]
                cursor-pointer transition-all duration-500 ${
                  activeTab === "skills" ? "translate-x-full" : "translate-x-0"
                }`}
            ></div>
            <button
              className={`relative w-1/2 py-2 text-xs sm:text-sm md:text-base font-blackops z-10 ${
                activeTab === "education" ? "text-keyword" : "text-white"
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`relative w-1/2 py-2 text-xs sm:text-sm md:text-base font-blackops z-10 ${
                activeTab === "skills" ? "text-keyword" : "text-white"
              }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
          </div>
        </div>
          {activeTab === "education" ? (
            <Education/>
            
          ) : (
            <p>Here are my professional skills...</p>
          )}
      </div>
    </section>
  );
};

export default About;
