import React from 'react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="text-center z-10 px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-down">
          Hello, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tedy</span>
        </h1>
        <h2 className="text-3xl md:text-4xl text-cyan-400 mb-6 font-semibold animate-slide-up">
          Software Developer
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I build web and mobile applications that make a difference.
        </p>
        <a 
          href="/resume.pdf" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/50"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
