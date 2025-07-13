import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    // <div className="min-h-screen bg-white font-inter">
    // <div className="min-h-screen font-inter">
    <div className="min-h-screen font-inter bg-white relative">
      <CustomCursor />
      {/* Top Gradient Strip */}
      <div className="w-full h-[300px] bg-gradient-to-b from-[#e6fff5] to-white absolute top-0 left-0 z-0 pointer-events-none" />
      {/* <div className="w-full h-[300px] bg-gradient-to-b from-[#e6fff5] via-[#fef6ff] to-white absolute top-0 left-0 z-0 pointer-events-none animate-gradient-y bg-[length:200%_200%]" /> */}

      {/* Content on top of gradient */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          {/* <Work /> */}
          <Services />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;