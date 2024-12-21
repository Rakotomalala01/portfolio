const About = () => {
    return (
      <section id="about" className="bg-background text-foreground py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-blackops text-primary mb-6">
            About Me
          </h2>
  
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hi, I'm <span className="text-keyword font-semibold">Johary Rakotomalala</span>, a passionate software engineer with expertise in 
            modern web technologies and UI/UX design. I specialize in building scalable, responsive, and user-friendly web applications. 
            With a focus on clean code and innovation, I strive to deliver projects that not only meet requirements but also exceed expectations.
          </p>
  
          {/* Skills */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              React
            </span>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              Node.js
            </span>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">
              Git/GitHub
            </span>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  