import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">Portfolio</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-pink-200 transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-pink-200 transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-pink-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-pink-200 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-pink-200 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-pink-200 transition-colors" />
            </a>
            <a href="mailto:your@email.com">
              <Mail className="w-6 h-6 hover:text-pink-200 transition-colors" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-700">
            <Link to="/" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Home</Link>
            <Link to="/projects" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Projects</Link>
            <Link to="/about" className="block px-3 py-2 hover:bg-purple-600 rounded-md">About</Link>
            <Link to="/contact" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;