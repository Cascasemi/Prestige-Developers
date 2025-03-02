import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaSearch, FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-konta-dark">
            <span className="text-konta-orange">K</span>ONTA
          </div>
          
          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <div className="bg-konta-orange rounded-full p-2 mr-2">
                <FaPhone className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Call Us Now</div>
                <div className="text-sm font-bold">+1 (123) 456-7890</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-konta-orange rounded-full p-2 mr-2">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Email Address</div>
                <div className="text-sm font-bold">info@konta.com</div>
              </div>
            </div>
          </div>
          
          {/* Menu and Search */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-konta-orange">
              <FaSearch />
            </button>
            <button 
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-6">
            {['HOME', 'ABOUT US', 'SERVICES', 'PROJECTS', 'BLOG', 'CONTACT US'].map((item) => (
              <li key={item}>
                <a href="#" className="font-medium hover:text-konta-orange transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;