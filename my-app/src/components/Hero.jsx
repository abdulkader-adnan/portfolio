import React, { useState } from 'react';
import { ArrowDown, Download, Brain } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    });
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) projects.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0A0F1F] to-black"
      onMouseMove={handleMouseMove}
    >
      {/* Decorative fallback background (lightweight CSS/SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g1" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#0ff" stopOpacity="0.06" />
              <stop offset="60%" stopColor="#0ff" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#0ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="g2" cx="70%" cy="70%">
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.06" />
              <stop offset="60%" stopColor="#8A2BE2" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>

      {/* Main text content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-cyan-400 opacity-50 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          Abdulkader Adnan
        </h1>

        <p className="text-2xl md:text-3xl text-cyan-300 mb-6 font-light">
          AI Software Engineer
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Building intelligent systems that think, move, and design.
          <br />
          <span className="text-purple-400">Where logic meets imagination</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50">
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </span>
          </button>
        </div>
      </div>

      {/* Floating arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-cyan-400 opacity-50" />
      </div>

      {/* Ambient glowing circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
