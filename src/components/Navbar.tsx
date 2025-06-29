import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="bg-gray-800 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex space-x-6">
            <a href="#home" className="hover:text-gray-300">Accueil</a>
            <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
            <a href="#skills" className="hover:text-gray-300">Compétence</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
