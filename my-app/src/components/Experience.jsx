import React from 'react';
import { GraduationCap, Award, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Co-Assistant',
      organization: 'Department of Computer Science, MIU',
      period: '2023 - Present',
      description:
        'Assisted in teaching logic, data structures, and programming. Provided algorithmic debugging and code analysis support to students.',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const research = [
    {
      title: 'ICPC ACPC Kickoff Contest 2025',
      description:
        'Participated in the International Collegiate Programming Contest - Arab Collegiate Programming Contest, focusing on algorithmic problem-solving and competitive programming.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'University Programming Club',
      description:
        'Active member contributing to programming workshops, hackathons, and collaborative coding sessions.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI Specialization Modules',
      description:
        'Completed hands-on dataset projects and advanced machine learning modules focusing on practical AI implementation.',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0A0F1F] to-black">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <Briefcase className="w-7 h-7" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-[#0A0F1F] border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="flex items-center gap-2 text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-2">{exp.organization}</p>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research & Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center gap-3">
            <Award className="w-7 h-7" />
            Research & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {research.map((item, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>
                <div className="relative h-full bg-[#0A0F1F] border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10 inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-lg blur animate-pulse"></div>
            <div className="relative bg-[#0A0F1F] border-2 border-cyan-500/50 rounded-lg p-6">
              <p className="text-gray-300 text-lg">
                Currently pursuing{' '}
                <span className="text-cyan-400 font-semibold">AI specialization</span> with focus on
                <span className="text-purple-400 font-semibold"> intelligent systems</span> and
                <span className="text-cyan-400 font-semibold"> 3D integration</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
