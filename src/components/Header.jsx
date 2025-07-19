import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">CARLO ACUTIS IRELAND</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/youth" className="text-gray-700 hover:text-blue-600">Youth</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600">Resources/Outreach</Link>
            <Link to="/relic" className="text-gray-700 hover:text-blue-600">Relic Visit</Link>
            <Link to="/schools" className="text-gray-700 hover:text-blue-600">Schools/Workshops</Link>
          </div>
          <button className="md:hidden p-2" onClick={() => toggleMobileMenu()}>
            <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/youth" className="block py-2 text-gray-700 hover:text-blue-600">Youth</Link>
          <Link to="/resources" className="block py-2 text-gray-700 hover:text-blue-600">Resources/Outreach</Link>
          <Link to="/relic" className="block py-2 text-gray-700 hover:text-blue-600">Relic Visit</Link>
          <Link to="/schools" className="block py-2 text-gray-700 hover:text-blue-600">Schools/Workshops</Link>
        </div>
      </div>
    </nav>
  );
};

const toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
};

export default Header;
