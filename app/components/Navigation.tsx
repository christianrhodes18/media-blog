// Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className='flex items-center'>
            <img
              src="/path/to/logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="font-semibold text-lg">Your Logo</span>
          </a>
        </div>

        {/* Links */}
        <div className="space-x-4">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-3 py-2 border rounded hover:bg-gray-700">Language</button>
          <button className="px-3 py-2 border rounded hover:bg-gray-700">Dark Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
