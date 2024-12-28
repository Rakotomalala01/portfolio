import { Button } from '@/components/ui/button';
import MovingCloud from '@/components/ui/MovingCloud';
import React from 'react';
import { FaRocket, FaReact, FaCss3Alt, FaHtml5, FaAngular, FaDocker, FaFigma, FaNodeJs, FaPython, FaRaspberryPi, FaFileCode, FaFileAlt, FaRProject, FaProjectDiagram, FaBriefcase } from 'react-icons/fa'; // Add more icons as needed
import { MdOutlineTerminal } from 'react-icons/md';
import { SiCplusplus, SiDart, SiFlutter, SiMongodb, SiNestjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

type Project = {
  title: string;
  description: string;
  tech: JSX.Element[];
  link?: string;       
};

const projects = [
  {
    title: 'Conversational Agent',
    description:
      'Developed a conversational agent to answer recurring user questions about security using Microsoft Azure, Node.js, PostgreSQL, Docker, and Copilot.',
    tech: [
      <FaNodeJs />,
      <SiPostgresql />,
      <FaDocker />,
    ],
  },
  {
    title: 'Difference Game Design Project',
    description:
      'Created an interactive cross-platform difference game using Angular, TypeScript, MongoDB, NestJS, Flutter, and Dart, optimizing the user experience to meet client requirements.',
    tech: [
      <FaAngular />,
      <SiTypescript />,
      <SiMongodb />,
      <SiNestjs />,
      <SiFlutter />,
      <SiDart />,
    ],
  },
  {
    title: 'Online Scrabble Game Design Project',
    description:
      'Collaborated with a team to design and develop a Scrabble game using Angular, NodeJS, and MongoDB. Created the Figma mockup and developed both the client and server.',
    tech: [<FaAngular />, <FaNodeJs />, <SiMongodb />, <FaFigma />],
    link: '#',
  },
  {
    title: 'Embedded Systems Project',
    description:
      'Designed a line-following and distance-detecting/measuring robot using C++ and Raspberry Pi.',
    tech: [<SiCplusplus />, <MdOutlineTerminal />],
  },
  {
    title: 'Rock, Paper, Scissors AI Challenge',
    description:
      'Developed an AI-driven solution in Python to achieve a win rate exceeding 60% against four distinct opponent bots. Implemented a dynamic, state-based strategy that analyzed opponent moves and adapted decision-making, leveraging iterative testing and debugging.',
    tech: [<FaPython />],
  },
];



const ProjectsSection: React.FC = () => {
  const cardStyles =
    "bg-gradient-to-b from-[#0b132b] via-[#161b33] to-[#1a1d29] rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:[box-shadow:var(--shadow-blue-strong)] shadow-md transition-transform transform hover:scale-105 p-4";

  const projectLinkStyles = "flex flex-col items-center justify-center w-full text-white text-sm sm:text-lg font-bold rounded-md border border-muted-foreground hover:text-keyword hover:[box-shadow:var(--shadow-blue-strong)]"
  const projectsDescription =
    "Showcasing my skills, expertise, and passion through innovative and impactful projects.";

    const handleViewMoreProjects = () => {
      window.open(
        'https://github.com/Rakotomalala01',
        '_blank'
      );
    };

  return (
    <section
    id="projects"
    className="relative min-h-screen bg-gradient-to-b from-[#0b132b] to-[#1a1d29] text-white py-16 overflow-hidden z-[5]"
  >
    <MovingCloud/>

    <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-blackops text-white mb-6">
        About Me
      </h2>
      <p className="text-sm md:text-lg font-light text-muted-foreground mb-6">
        {projectsDescription}
      </p>
    </div>

    <div className="m-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project: Project, index: number) => (
        <div key={index} className={cardStyles}>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex justify-center items-center gap-3 text-lg mb-3">
              {project.tech.map((icon: JSX.Element, idx: number) => (
                <span key={idx} className="text-keyword text-xl">{icon}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto max-w-md mt-8">
  <div className={projectLinkStyles}>
    <Button
      onClick={handleViewMoreProjects}
      variant="null"
      className="flex items-center gap-x-3 sm:gap-x-5 text-base sm:text-3xl font-blackops tracking-wider px-6 py-3"
    >
      MORE PROJECTS
      <FaBriefcase className="h-5 w-5 sm:h-6 sm:w-6" />
    </Button>
  </div>
</div>


  </section>
  );
};

export default ProjectsSection;
