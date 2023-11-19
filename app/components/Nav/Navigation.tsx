'use client'
import React, { useEffect, useState } from 'react';
import ThemeChanger from './ThemeChanger';
import MobileNav from './MobileNav';
import LanguageChanger from './LanguageChanger';
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Navigation: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  //useEffect for rendering component after client-side hydration
  useEffect(() => {
    // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // if (darkThemeMq.matches) {
    //   // Theme set to dark.
    //   setTheme('dark')
    // } else {
    //   // Theme set to light.
    //   setTheme('light')
    // }
    // console.log('theme: ', theme)
    setMounted(true)
  }, [])

  //get current theme
  //let isDark = useTheme().theme === 'dark' ? true : false
  
  return (
    <nav className="p-4 w-full max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="/" className='flex items-center'>
            {theme === 'dark' ? 
              <Image
                src="/logo/logo_white.png"
                alt="Logo"
                width={48}
                height={48}
              />
            : <Image
                src="/logo/logo_black.png"
                alt="Logo"
                width={48}
                height={48}
              />
            }
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
