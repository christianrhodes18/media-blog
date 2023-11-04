'use client'
import React from 'react';
import ThemeChanger from './ThemeChanger';
import MobileNav from './MobileNav';
import LanguageChanger from './LanguageChanger';
import Image from 'next/image'

const Navigation: React.FC = () => {
  
  return (
    <nav className="p-4 w-full max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className='flex items-center'>
            <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
            />
            <span className="font-semibold text-lg uppercase">Aesthete&apos;s Digest</span>
          </a>
        </div>

        {/* Links */}
        <div className="space-x-4 hidden sm:flex">
          <a href="/posts" className="hover:text-gray-300">Articles</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>

        {/* Buttons */}
        <div className="flex my-auto">
          {/* <LanguageChanger /> */}
          <div className="relative top-2 sm:top-0">
            <ThemeChanger />
          </div>
          <div className="flex sm:hidden px-0">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
