import Planet1 from '../../../../docs/assets/img/City_view.webp';
import React from "react";

const WorkExperience: React.FC = () => {
  return (
      <section
        id="work-experiences"
        className="relative text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Planet1})`, // Add the background image here
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3c72] via-[#4e4376] to-[#2b5876] opacity-[95%]"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-10">
          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>
          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
     
          <p className="text-lg">Explore the transition from day to night.</p>          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>          <h2 className="text-4xl font-bold mb-4">Sunset Horizon</h2>
          <p className="text-lg">Explore the transition from day to night.</p>
        </div>
      </section>
  );
};

export default WorkExperience;
