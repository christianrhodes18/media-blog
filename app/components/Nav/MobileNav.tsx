'use client'
import Image from 'next/image'
import { useState } from 'react';
import { useTheme } from 'next-themes'
import HamburgerLight from '../../../public/icons/menu_icon_light.svg'
import HamburgerDark from '../../../public/icons/dark.svg'

const MobileNav = () => {
    const [mounted, setMounted] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={() => setToggleMenu(!toggleMenu)}>
                <Image src={HamburgerLight} alt="Hamburger Menu" width={27} height={21} priority />
            </button>
        </div>
    )
}

export default MobileNav