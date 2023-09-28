"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
// import { getAllAesthetics, getAllTags } from '../utils/mdx';

interface FilterButtonProps {
    type: string;
    currentTagFilters?: string[];
    currentAestheticFilters?: string[];
}

// const getDropdownData = (type: string): string[] => {
//     if (type === 'tag') {
//         const tagOptions= getAllTags()
//         return tagOptions
//         //return ["hi", "hey"]
//     }
//     else if (type === 'aesthetic') {
//         const aestheticOptions= getAllAesthetics()
//         return aestheticOptions
//         //return ["hi", "hey"]
//     }
//     else {
//         return ["error"]
//     }
// }

// function to get all tags
function getAllTags() {
    const tags = ["Games", "Books", "Television", "Movies", "Anime", "Music", "Technology", "Retro"]
    return tags
}

// function to get all aesthetics
function getAllAesthetics() {
    const aesthetics = ["Cyberpunk", "Futurism", "Steampunk", "Biopunk", "Fantasy", "Film Noir", "Space Opera", "Dystopian", "Horror", "Gothic", "Post-Apocalyptic", "Surrealism", "Minimalism", "Superhero", "Historical", "Retro"]
    return aesthetics
}

const FilterButton: React.FC<FilterButtonProps> = ({ type, currentTagFilters, currentAestheticFilters }) => {
    const [active, setActive] = useState(false)
    const [dropdownData, setDropdownData] = useState<string[]>([])
    const [selectedData, setSelectedData] = useState<string[]>([])
    
    useEffect(() => {
        // get tags and aesthetics
        if (type === 'tag') {
            const tagOptions = getAllTags()
            setDropdownData(tagOptions)
        }
        else if (type === 'aesthetic') {
            const aestheticOptions = getAllAesthetics()
            setDropdownData(aestheticOptions)
        }
        else {
            setDropdownData(["error"])
        }

        // get current tag filters
        if (currentTagFilters) {
            setSelectedData(currentTagFilters)
        }
        // get current aesthetic filters
        else if (currentAestheticFilters) {
            setSelectedData(currentAestheticFilters)
        }

    }, []);

    // DEV: log selectedData
    // useEffect(() => {
    //     console.log(selectedData)
    // }, [selectedData])

    const updateSelectedData = (selectedData: string[], option: string): string[] => {
        // if option is already selected, remove it from selectedData
        if (selectedData.includes(option)) {
            const newSelectedData = selectedData.filter((item) => item !== option)
            setSelectedData(newSelectedData)
            setActive(!active) // close dropdown
            return newSelectedData
        }
        // else add it to selectedData
        else {
            setSelectedData([...selectedData, option])
            setActive(!active) // close dropdown
            return [...selectedData, option]
        }
    }

    const createQueryString = (type: string, option: string): string => {
        //const query = `?${new URLSearchParams({ type: option })}`
        option = option.toLowerCase()

        if (currentTagFilters && type === 'tag') { // if currentTagFilters exists and type is tag
            if (currentTagFilters.includes(option)) { // if option is already selected, remove it from currentTagFilters
                const newTagFilters = currentTagFilters.filter((item) => item !== option) // remove option from currentTagFilters
                const query = `?tag=${newTagFilters.join('&tag=')}`
                return query
            }
            else {
                const newTagFilters = [...currentTagFilters, option] // add option to currentTagFilters
                const query = `?tag=${newTagFilters.join('&tag=')}`
                return query
            }
        }
        else if (currentAestheticFilters && type === 'aesthetic') { // if currentAestheticFilters exists and type is aesthetic
            if (currentAestheticFilters.includes(option)) { // if option is already selected, remove it from currentAestheticFilters
                const newAestheticFilters = currentAestheticFilters.filter((item) => item !== option) // remove option from currentAestheticFilters
                const query = `?aesthetic=${newAestheticFilters.join('&aesthetic=')}`
                return query
            }
            else {
                const newAestheticFilters = [...currentAestheticFilters, option] // add option to currentAestheticFilters
                const query = `?aesthetic=${newAestheticFilters.join('&aesthetic=')}`
                return query
            }
        }
        else { // no current filters
            const query = `?${type}=${option}`
            return query
        }
    }

    return (
        <div className="cardBGLightDark rounded-3xl px-4">
            <button onClick={() => setActive(!active)} className="flex flex-row justify-evenly gap-2">
                <p className="body2">{type}</p>
                {!active && (
                    <Image className="m-auto w-4" src="/icons/chevron_down.svg" alt={`filter by ${type} dropdown`} width="12" height="12" />
                )}
                {active && (
                    <Image className="m-auto w-4 rotate-180" src="/icons/chevron_down.svg" alt={`filter by ${type} dropdown`} width="12" height="12" />
                )}
            </button>
            {active && (
                <div className="absolute cardBGLightDark rounded-md m-2 min-w-[6rem] z-10 flex flex-col">
                    {dropdownData.map((option) => {
                        return (
                            //<button key={option} onClick={() => updateSelectedData(selectedData, option)} className={`text-left body2 px-2 h-8 ${selectedData.includes(option) ? 'bg-[#A3C0FB]' : ''}`}>{option}</button>
                            <Link key={option} href={createQueryString(type, option)} onClick={() => updateSelectedData(selectedData, option)} className={`text-left body2 px-2 h-8 ${selectedData.includes(option) ? 'bg-[#A3C0FB]' : ''}`}>{option} </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default FilterButton