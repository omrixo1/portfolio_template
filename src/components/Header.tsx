import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    // { name: 'Blog', href: '#blog' },
    // { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full z-50 relative">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-lg font-thin text-black">
            Mohamed Ali OMRI.
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-600 transition-colors duration-200 font-normal text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg py-4 px-6 absolute right-8 top-[72px] w-[200px] transition-all duration-300 ease-in-out">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-black hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
