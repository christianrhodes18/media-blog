"use client"
import React from 'react'
import { useTheme } from "next-themes";

const DarkModeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    function changeTheme() {
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }

    return (
        <h2>h1!</h2>
        // <button
        //     onClick={() => changeTheme()}
        //     className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg  bottom-32'>
        //     Toggle Mode
        // </button>
    )
}}

export default DarkModeButton;