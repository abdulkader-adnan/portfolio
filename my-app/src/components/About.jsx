import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cpu, Network, GitBranch, Box } from 'lucide-react';

export default function About() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'AI Development', level: 90, icon: <Cpu className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Backend Engineering', level: 85, icon: <Database className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { name: 'Programming', level: 88, icon: <Code2 className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { name: '3D & Graphics', level: 80, icon: <Box className="w-6 h-6" />, color: 'from-orange-500 to-red-500' },
    { name: 'Networking', level: 75, icon: <Network className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Version Control', level: 85, icon: <GitBranch className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <span className="text-cyan-400 font-semibold">AI Software Engineer</span> with strong foundations in
                  backend systems, 3D programming, and data-driven design. Experienced in building intelligent web
                  systems, integrating AI into user experiences, and developing scalable full-stack applications.
                </p>
                <div className="mt-6 p-4 bg-black/40 rounded-lg border border-purple-500/30">
                  <p className="text-purple-400 italic text-center font-light">
                    "Where logic meets imagination — powering 3D, AI, and code."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400">3+</div>
                <div className="text-sm text-gray-400">Years Coding</div>
              </div>
              <div className="bg-[#0A0F1F] border border-purple-500/30 rounded-lg p-4 hover:border-purple-500 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-500 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400">AI</div>
                <div className="text-sm text-gray-400">Focused</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{
                  animation: inView ? `slideInRight 0.6s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>

                <div className="relative h-3 bg-[#0A0F1F] rounded-full overflow-hidden border border-gray-800">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: inView ? `${skill.level}%` : '0%',
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Languages</h3>
              <p className="text-gray-300">Python, C++, Java, JavaScript, TypeScript</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-[#0A0F1F] border border-purple-500/30 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Technologies</h3>
              <p className="text-gray-300">Node.js, MongoDB, Three.js, TensorFlow, React</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-lg p-6 h-full">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Tools</h3>
              <p className="text-gray-300">Git, Orange Data Mining, Cisco Packet Tracer</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
