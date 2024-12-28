import React from 'react';

const projects = [
  {
    title: 'Galaxy Explorer',
    description: 'A space-themed interactive map to explore stars and planets in the Milky Way galaxy.',
    link: '#',
  },
  {
    title: 'Nebula Visualizer',
    description: 'An animated visualizer showing the formation and evolution of nebulae in space.',
    link: '#',
  },
  {
    title: 'Orbital Simulator',
    description: 'A physics-based simulation to model orbital paths of planets and moons.',
    link: '#',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="h-screen bg-gradient-to-b from-[#0b132b] to-[#1a1d29] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#131722] rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block text-[#1e6fb9] hover:text-[#4ea3f7] transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
