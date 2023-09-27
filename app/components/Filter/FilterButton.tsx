"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
// import { getAllAesthetics, getAllTags } from '../utils/mdx';

interface FilterButtonProps {
    type: string;
    //onUpdate: (filterType: string, selectedData: string[]) => void;
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

const FilterButton: React.FC<FilterButtonProps> = ({ type, /* onUpdate  */}) => {
    const [active, setActive] = useState(false)
    const [dropdownData, setDropdownData] = useState<string[]>([])
    const [selectedData, setSelectedData] = useState<string[]>([])
    
    // get tags and aesthetics
    useEffect(() => {
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
    }, []);

    // DEV: log selectedData
    // useEffect(() => {
    //     console.log(selectedData)
    // }, [selectedData])

    // TODO: call function in page.tsx to update searchParams
    const updateSelectedData = (selectedData: string[], option: string): string[] => {
        // if option is already selected, remove it from selectedData
        if (selectedData.includes(option)) {
            const newSelectedData = selectedData.filter((item) => item !== option)
            setSelectedData(newSelectedData)
            //onUpdate(type, selectedData) // call function in parent page to update filters
            return newSelectedData
        }
        // else add it to selectedData
        else {
            setSelectedData([...selectedData, option])
            //onUpdate(type, selectedData) // call function in parent page to update filters
            return [...selectedData, option]
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
                            <button key={option} onClick={() => updateSelectedData(selectedData, option)} className={`text-left body2 px-2 h-8 ${selectedData.includes(option) ? 'bg-[#A3C0FB]' : ''}`}>{option}</button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default FilterButton