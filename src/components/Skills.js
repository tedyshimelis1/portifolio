import React from 'react';

function Skills() {
  const skills = [
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500' },
    { name: 'Flutter', icon: '📱', color: 'from-blue-400 to-cyan-400' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Django', icon: '🎸', color: 'from-green-500 to-emerald-600' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
    { name: 'Flask', icon: '🌶️', color: 'from-gray-700 to-gray-900' },
    { name: 'HTML/CSS', icon: '🎨', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Technologies I work with</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className={`text-5xl mb-3 group-hover:scale-110 transition duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition duration-300">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
