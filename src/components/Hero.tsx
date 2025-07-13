import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { name: 'Github', href: 'https://github.com', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: <FaLinkedin /> },
    // { name: 'X', href: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'Email', href: 'mailto:mohamed@example.com', icon: <FaEnvelope /> },
  ];

  return (
    <section id='hero' className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-16 pb-10">
      <div className="max-w-4xl">
        {/* Main Heading */}
        <div className="space-y-4 mb-20">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            Hello 👋
          </h1>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            I'm Mohamed Ali
          </h2>
          <p className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            software engineer and
          </p>
          <p className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            designer
          </p>
          <p className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            based in Tunisia.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-6 text-2xl">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black hover:text-gray-600 transition-colors duration-200"
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
