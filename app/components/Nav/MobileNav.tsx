'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import HamburgerLight from '../../../public/icons/menu_icon_light.svg'
import HamburgerDark from '../../../public/icons/menu_icon_dark.svg'
import Link from 'next/link';
import AuthorCredit from '../AuthorCredit';
import ThemeChanger from './ThemeChanger';

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

    //get year
    const year = new Date().getFullYear();

    return (
        <>
            {/* Hamburger menu */}
            <div className="lg:hidden">
                <button className="flex items-center p-3" onClick={() => setToggleMenu(!toggleMenu)}>
                    {isDark
                        ? <Image src={HamburgerDark} alt="Hamburger Menu" width={27} height={21} priority />
                        : <Image src={HamburgerLight} alt="Hamburger Menu" width={27} height={21} priority />
                    }
                </button>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {toggleMenu && (
                <div className="relative z-50">
                    <div className={`fixed inset-0 max-w-sm ml-auto opacity-[98%] ${isDark ? 'bg-darkBG' : 'bg-lightBG'}`}></div>
                    {/* add a click outside to close */}
                    <nav className="fixed top-0 bottom-0 right-0 flex flex-col w-full max-w-sm py-6 px-6 overflow-y-auto">
                        <div className="flex items-center justify-start mb-16">
                            <button className={`${isDark ? 'hover:text-darkTextAccent' : 'hover:text-lightTextAccent'}`} onClick={() => setToggleMenu(false)}>
                                <svg className="h-6 w-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col justify-center">
                        <button onClick={() => setToggleMenu(false)}>
                            <Link className="mx-auto font-bold text-2xl" href="/">Aesthete&apos;s Digest</Link>
                        </button>
                            <ul className="mt-14 text-center list-none">
                                <li className="mb-3">
                                    <button onClick={() => setToggleMenu(false)}>
                                        <Link href="/posts"><h5 className="">Articles</h5></Link>
                                    </button>
                                </li>
                                <li className="mb-3">
                                    <button onClick={() => setToggleMenu(false)}>
                                        <Link href="/about"><h5 className="">About</h5></Link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-auto flex flex-col justify-center items-center gap-8">
                            <AuthorCredit 
                                firstName="Christian"
                                lastName="Rhodes"
                                image='christian.jpg'
                                websiteLink='https://christian-rhodes.com'
                                twitterLink='https://twitter.com/chrisrhodesy'
                                linkedinLink='https://www.linkedin.com/in/christianrhodes18/'
                            />
                            <ThemeChanger />
                            <div className="mx-auto lg:my-auto body2 py-4">
                                <p>&copy; {year} Aesthete&apos;s Digest. All Rights Reserved.</p>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

export default MobileNav