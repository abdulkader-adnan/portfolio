import { useState } from 'react';
import { Car, Bus, Network, Link, Brain, Cpu, ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'AI-Powered Design Assistant',
      description:
        'Experimental project using generative AI to produce 3D shapes and adaptive UIs based on user prompts. Leverages machine learning to create intelligent design recommendations.',
      tech: ['Python', 'TensorFlow', 'Three.js', 'React'],
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-cyan-500 via-blue-500 to-purple-600',
      category: 'ai',
    },
    {
      title: 'AI Dataset Classification',
      description:
        'Machine learning classification system using Orange Data Mining. Implemented advanced algorithms for pattern recognition and data analysis with high accuracy rates.',
      tech: ['Python', 'Orange Data Mining', 'ML'],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      category: 'ai',
    },
    {
      title: 'Full Stack Car Rental Website',
      description:
        'Smart admin dashboard and booking system with real-time inventory management. Features advanced search, payment integration, and analytics.',
      tech: ['Node.js', 'MongoDB', 'React', 'Express'],
      icon: <Car className="w-8 h-8" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      category: 'fullstack',
    },
    {
      title: 'Bus Ticket Management System',
      description:
        'AI-assisted route optimization system for efficient bus scheduling. Includes booking management, seat selection, and automated notification system.',
      tech: ['Java', 'MySQL', 'AI Optimization'],
      icon: <Bus className="w-8 h-8" />,
      gradient: 'from-orange-500 via-yellow-500 to-amber-500',
      category: 'fullstack',
    },
    {
      title: 'Enterprise Network Simulation',
      description:
        '3D-visualized network topology with VPN, NAT, and OSPF configuration. Complete enterprise-level network design with security implementations.',
      tech: ['Cisco Packet Tracer', 'VPN', 'OSPF', 'NAT'],
      icon: <Network className="w-8 h-8" />,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      category: 'network',
    },
    {
      title: 'URL Shortener',
      description:
        'High-performance URL shortening service with optimized algorithms for fast redirect resolution. Features analytics and custom link management.',
      tech: ['C++', 'Algorithm Design', 'Data Structures'],
      icon: <Link className="w-8 h-8" />,
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      category: 'algorithm',
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, cyan 1px, transparent 1px), linear-gradient(to bottom, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI & Projects Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Intelligent systems and innovative solutions powered by AI, data, and cutting-edge
            technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-xl blur opacity-25 group-hover:opacity-75 transition-all duration-500`}
              ></div>

              <div className="relative h-full bg-[#0A0F1F] border border-cyan-500/20 rounded-xl p-6 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:transform group-hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors">
                      <Github className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-black/50 border border-cyan-500/30 rounded-full text-cyan-400 group-hover:border-cyan-500/60 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {hoveredIndex === index && (
                  <div className="absolute inset-0 rounded-xl pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl animate-pulse"></div>
                  </div>
                )}

                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-500`}
                    style={{ width: hoveredIndex === index ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub button */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-50"></div>
            <a
              href="https://github.com/abdulkader-adnan#-projects-spotlight"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-4 bg-[#0A0F1F] border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300 text-center"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;