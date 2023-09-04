'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import HamburgerLight from '../../../public/icons/menu_icon_light.svg'
import HamburgerDark from '../../../public/icons/menu_icon_dark.svg'

const MobileNav = () => {
    const [mounted, setMounted] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false);

    //useEffect for rendering component after client-side hydration
    useEffect(() => {
        setMounted(true)
    }, [])

    //get current theme
    let isDark = useTheme().theme === 'dark' ? true : false

    //return skeleton if not mounted
    if (!mounted) {
        return (
            <div className="w-[40px] h-[32px] bg-darkText rounded-lg flex items-center animate-pulse my-2 mx-2"></div>
        )
    }

    return (
        <div className="lg:hidden">
            <button className="flex items-center p-3" onClick={() => setToggleMenu(!toggleMenu)}>
                {isDark
                    ? <Image src={HamburgerDark} alt="Hamburger Menu" width={27} height={21} priority />
                    : <Image src={HamburgerLight} alt="Hamburger Menu" width={27} height={21} priority />
                }
            </button>
        </div>
    )
}

export default MobileNav