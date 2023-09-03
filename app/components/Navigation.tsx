import React from 'react';
import ThemeChanger from './ThemeChanger';
import LanguageChanger from './LanguageChanger';

const Navigation: React.FC = () => {
  return (
    <nav className="p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className='flex items-center'>
            {/* <img
              src="/path/to/logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            /> */}
            <span className="font-semibold text-lg">Your Logo</span>
          </a>
        </div>

        {/* Links */}
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Articles</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* <LanguageChanger /> */}
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;