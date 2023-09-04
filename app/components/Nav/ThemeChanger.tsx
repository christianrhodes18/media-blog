'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import sun_icon from '../../../public/icons/sun_icon.svg'
import moon_icon from '../../../public/icons/moon_icon.svg'
import { useEffect, useState } from 'react'

const ThemeChanger: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  //useEffect for rendering component after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  //get current theme
  let isDark = useTheme().theme === 'dark' ? true : false
  // console.log('isDark: ', isDark)

  function updateTheme(): void {
    if (theme === 'dark') {
      setTheme('light')
      isDark = false
    } else {
      setTheme('dark')
      isDark = true
    }
  }

  //return skeleton if not mounted
  if (!mounted) {
    return (
      <div className="w-[64px] h-[32px] bg-darkText rounded-full flex items-center animate-pulse"></div>
    )
  }

  return (
    <div className="w-[64px] h-[32px] bg-darkText dark:bg-black rounded-full flex items-center">
      {isDark
        ? <Image src={moon_icon} alt="moon icon" width={14} height={14} className="absolute ml-10 pointer-events-none animate-[pulse_limited]" />
        : <Image src={sun_icon} alt="sun icon" width={18} height={18} className="absolute ml-2 pointer-events-none animate-[pulse_limited]" />
      }
      <button 
        className={`bg-darkBG rounded-full w-6 h-6 mx-1 ease-linear duration-150 ${isDark ? '-translate-x-0' : 'translate-x-8'}`} 
        onClick={() => updateTheme()}>
      </button>
    </div>
  )
}

export default ThemeChanger