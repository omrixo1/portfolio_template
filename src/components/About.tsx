import React from 'react';

const About = () => {
  return (
    <section id="about" className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-10">
      <h2 className="text-6xl sm:text-7xl lg:text-6xl font-normal text-black leading-[0.9] tracking-tight mb-16">
        About.
      </h2>
      
      <div className="max-w-4xl">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default About;