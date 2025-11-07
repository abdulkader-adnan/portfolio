import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { NeuralNetwork } from './Neuralnetwork';
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
      {/* 3D background (Neural network) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <NeuralNetwork mousePosition={mousePosition} />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
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

          <a href="my-app\src\assets\abbodCV.pdf" download="" class="px-8 py-3 border-2 border-[#00ff94] text-[#00ff94] font-bold rounded-lg hover:bg-[#00ff94]/10 transition-all transform hover:scale-105 neon-green"
          >Download CV</a>
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
