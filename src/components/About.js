import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition duration-300">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="flex items-start">
              <span className="text-3xl mr-4">👨‍💻</span>
              <span>
                I'm a passionate software developer with a background in Computer Science.
                I specialize in building modern web and mobile applications using cutting-edge technologies.
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-3xl mr-4">🎯</span>
              <span>
                My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
              </span>
            </p>
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education & Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Computer Science Graduate
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Internship – Bank IT Department
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Networking and LAN configuration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
