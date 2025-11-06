import React from 'react';
import { Github, Linkedin, Mail, Heart, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-cyan-500/20 py-12 px-6">
      {/* Animated cyan wave line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-wave"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Abdulkader Adnan</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Software Engineer crafting intelligent systems and immersive experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:abdulkader2307019@miuegypt.edu.eg"
                className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-cyan-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © {currentYear} Abdulkader Adnan. Built with
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            and AI
          </p>
        </div>
      </div>

      {/* Inline animation style */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
