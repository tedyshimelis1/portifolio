import React, { useState } from 'react';

function Navbar() {
  const [profileImage, setProfileImage] = useState('/profile.jpg');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 cursor-pointer hover:border-cyan-300 transition duration-300"
                onClick={() => document.getElementById('profileInput').click()}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150/667eea/ffffff?text=T';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center cursor-pointer"
                   onClick={() => document.getElementById('profileInput').click()}>
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition duration-300">📷</span>
              </div>
              <input 
                type="file" 
                id="profileInput"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tedy
            </div>
          </div>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium">Home</a></li>
            <li><a href="#about" className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium">About</a></li>
            <li><a href="#skills" className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium">Skills</a></li>
            <li><a href="#projects" className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium">Projects</a></li>
            <li><a href="#contact" className="text-gray-200 hover:text-cyan-400 transition duration-300 font-medium">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
