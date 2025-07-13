import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Project Five',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      title: 'Project Six',
      category: 'Design & Development',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight mb-16">
        Work.
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="aspect-[4/3] bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;