import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Art Direction',
      description: 'We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.'
    },
    {
      title: 'Branding',
      description: 'We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.'
    },
    {
      title: 'Web Design',
      description: 'We build and optimize your online presence. Website is the digital entry point into your business and a powerful revenue channel.'
    },
    {
      title: '3D Design',
      description: 'We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.'
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-10">
      <h2 className="text-6xl sm:text-7xl lg:text-6xl font-normal text-black leading-[0.9] tracking-tight mb-16">
        Services.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 p-6 rounded-2xl transition-all duration-300 ease-in-out border border-transparent hover:border-gray-200 hover:shadow-md"
          >
            <h3 className="text-3xl font-semibold text-black">{service.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;