import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { name: 'Github', href: 'https://github.com', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin /> },
    { name: 'Email', href: 'mailto:mohamed@example.com', icon: <FaEnvelope /> },
  ];

  return (
    <section id="contact" className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-10">
      <h2 className="text-6xl sm:text-7xl lg:text-6xl font-normal text-black leading-[0.9] tracking-tight mb-16">
        Contact.
      </h2>

      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-[0.9] tracking-tight">
            LET'S WORK
          </h3>
          <h3 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-[0.9] tracking-tight">
            TOGETHER
          </h3>
        </div>

        <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
          Schedule a call
        </button>

        {/* Social Links with Icons */}
        <div className="flex flex-wrap gap-8 pt-8 text-2xl">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black hover:text-gray-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-gray-200">
        <p className="text-gray-600">
          Made with ❤️ by <a href="#" className="underline">Mohamed Ali OMRI</a>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
