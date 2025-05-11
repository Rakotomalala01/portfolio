import React from "react";
import Planet1 from '../../../../docs/assets/img/City_view.webp';

const Practice: React.FC = () => {
  type Practice = {
    title: string;
    description: string;
    link?: string; // Optional link for certifications
  };

  const practices: Practice[] = [
    {
      title: 'ORACLE FUSION DEVELOPER INTERN  Ville de Montreal',
      description:
        'Intern in SQL Oracle database using Oracle BI tools, delivering reports and integrations while collaborating with a team to achieve project objectives.',
    },
    {
      title: 'Responsive Web Design',
      description:
        'Completed a certification program in responsive web design, focusing on modern HTML, CSS, and accessibility principles.',
      link: 'https://www.freecodecamp.org/certification/fcc804a1616-cd20-46cf-9ffe-8c0db9e191ae/responsive-web-design',
    },
    {
      title: 'Foundational C# with Microsoft',
      description:
        'Completed a foundational C# certification covering core programming concepts, object-oriented principles, and .NET basics through FreeCodeCamp and Microsoft collaboration.',
      link: 'https://www.freecodecamp.org/certification/fcc804a1616-cd20-46cf-9ffe-8c0db9e191ae/foundational-c-sharp-with-microsoft',
    },
    {
      title: 'Machine Learning with Python',
      description:
        'Earned a certification in machine learning using Python, covering supervised and unsupervised learning, model evaluation, and libraries like Scikit-learn and Pandas.',
      link: 'https://www.freecodecamp.org/certification/fcc804a1616-cd20-46cf-9ffe-8c0db9e191ae/machine-learning-with-python',
    },    
  ];
  
  const cardStyles =
    "bg-gradient-to-b from-[#243B55] via-[#3B4371] to-[#1e3c72] rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:[box-shadow:var(--shadow-blue-strong)] shadow-md p-4 ";

  const practiceDescription =
    "Hands-on experience through internships, certifications, and applied skills.";

  return (
    <section
      id="practice"
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Planet1})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3c72] via-[#4e4376] to-[#2b5876] opacity-[95%]"></div>

      <div className="relative z-10 p-10">
        <h2 className="text-3xl md:text-4xl font-blackops text-white mb-6  tracking-wider">
          Practice
        </h2>
        <p className="text-sm md:text-lg font-light text-muted-foreground mb-6">
          {practiceDescription}
        </p>

        <div className="m-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, index) => (
            <div key={index} className={cardStyles}>
              <div className="p-4 ">
                <h3 className="text-xl font-blackops tracking-wider mb-3">
                  {practice.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {practice.description}
                </p>

                {practice.link && (
                  <a
                    href={practice.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-white 
                    bg-gradient-to-r from-[#4e4376] to-[#2b5876] 
                    hover:from-[#2b5876] hover:to-[#4e4376] 
                    px-4 py-2 rounded-lg transition 
                    transform hover:scale-105 
                    hover:[box-shadow:var(--shadow-blue-strong)]"
         
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practice;
