import  { useEffect, useMemo, useState } from 'react';

const ProfileDescription = () => {
    const typingSpeed = 160; 
    const deletingSpeed = 40; 
    const delayBetweenTitles = 8000;
    const homeDescription = "Passionate Software Engineer with expertise in AI and full-stack development. Skilled in building scalable systems and innovative solutions."

    const titles = useMemo(
        () => [
        "Johary Rakotomalala",
        "Software Engineer",
        "Full-Stack Developer",
        "Data Scientist",
        "AI Enthusiast",
        "Tech Innovator",
        ],
        []
    );

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex];

        let timeout: NodeJS.Timeout;

        if (isDeleting) {
        if (text === "") {
            setIsDeleting(false);
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        } else {
            timeout = setTimeout(() => {
            setText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        }
        } else {
        if (text === currentTitle) {
            timeout = setTimeout(() => setIsDeleting(true), delayBetweenTitles);
        } else {
            timeout = setTimeout(() => {
            setText((prev) => currentTitle.slice(0, prev.length + 1));
            }, typingSpeed);
        }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, currentTitleIndex, titles]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);
  return (
    <><h1
          className="text-2xl md:text-6xl font-blackops tracking-wider"
          aria-live="polite"
      >
          <span className="">{text}</span>
          <span
              aria-hidden="true"
              className={`text-keyword font-bold ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          >
              |
          </span>
      </h1><p className="text-sm md:text-xl font-light text-muted-foreground mb-6 max-w-2xl">
              {homeDescription}
          </p></>
  );
};

export default ProfileDescription;
