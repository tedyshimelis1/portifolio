import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_ib1p0ke',  // Service ID
      'template_dg93gau', // Template ID
      form.current,
      'Z14JsaNWA7YUQ6El1'   // Public Key
    )
    .then((result) => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, (error) => {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">Let's work together on your next project</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                📧
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-lg font-medium">tedyshimelis160@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                💼
              </div>
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <a href="https://www.linkedin.com/in/tedy-shimelis-4b7359280/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-cyan-400 transition duration-300">linkedin.com/in/tedy-shimelis</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                💻
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a href="https://github.com/tedyshimelis1" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-cyan-400 transition duration-300">github.com/tedyshimelis1</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                ✈️
              </div>
              <div>
                <p className="text-gray-400 text-sm">Telegram</p>
                <a href="https://t.me/Teda122129" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-cyan-400 transition duration-300">@Teda122129</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                🎵
              </div>
              <div>
                <p className="text-gray-400 text-sm">TikTok</p>
                <a href="https://www.tiktok.com/@teda_2129" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-cyan-400 transition duration-300">@teda_2129</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition duration-300">
                ▶️
              </div>
              <div>
                <p className="text-gray-400 text-sm">YouTube</p>
                <a href="https://www.youtube.com/@General_educations" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-cyan-400 transition duration-300">@General_educations</a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <input 
                type="text" 
                name="user_name"
                placeholder="Your Name" 
                required 
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 backdrop-blur-sm transition duration-300"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="user_email"
                placeholder="Your Email" 
                required 
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 backdrop-blur-sm transition duration-300"
              />
            </div>
            <div>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                required
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400 backdrop-blur-sm transition duration-300"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully! ✓</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400">© 2024 Tedy. Built with React & Tailwind CSS</p>
      </div>
    </section>
  );
}

export default Contact;
