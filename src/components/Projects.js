import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Online Shopping App',
      description: 'Product marketplace mobile application with real-time inventory management',
      tech: 'Flutter + Flask',
      icon: '🛒',
      github: 'https://github.com/username/shopping-app',
      demo: 'https://demo-link.com',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Task Management System',
      description: 'Web-based task tracking application with team collaboration features',
      tech: 'React + Django',
      icon: '✅',
      github: 'https://github.com/username/task-manager',
      demo: 'https://demo-link.com',
      gradient: 'from-purple-500 to-indigo-500'
    },
        {
      name: 'Edu Online Learning System',
      description: 'Web-based task tracking application with team collaboration features',
      tech: 'React + PostgreSQL',
      icon: '',
      github: 'https://github.com/tedyshimelis1/edu',
      demo: 'https://demo-link.com',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Weather Dashboard',
      description: 'Real-time weather information app with beautiful visualizations',
      tech: 'React + API Integration',
      icon: '🌤️',
      github: 'https://github.com/username/weather-app',
      demo: 'https://demo-link.com',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Some of my recent work</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-200"
            >
              <div className={`text-6xl mb-4 group-hover:scale-110 transition duration-300`}>
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition duration-300">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold mb-4`}>
                {project.tech}
              </div>
              <div className="flex gap-3 mt-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300 font-medium"
                >
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition duration-300 font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
