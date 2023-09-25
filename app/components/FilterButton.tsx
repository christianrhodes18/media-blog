"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
//import { getAllAesthetics, getAllTags } from '../utils/mdx';

interface FilterButtonProps {
    type: string;
}

// const getDropdownData = async (type: string): Promise<string[]> => {
//     if (type === 'tag') {
//         // const tagOptions = await getAllTags()
//         // return tagOptions
//         return ["hi", "hey"]
//     }
//     else if (type === 'aesthetic') {
//         // const aestheticOptions = await getAllAesthetics()
//         // return aestheticOptions
//         return ["hi", "hey"]
//     }
//     else {
//         return ["error"]
//     }
// }

const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
    const [active, setActive] = useState(false)
    //const [dropdownData, setDropdownData] = useState<string[]>([])
    
    
    // useEffect(() => {
    //     // console.log(getDropdownData(type))
    // }, []);

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
                <div className="absolute cardBGLightDark flex flex-col gap-2">
                    {/* {dropdownData.map((option) => {
                        return (
                            <button className="body2">{option}</button>
                        )
                    })} */}
                    <p>hi</p>
                    <p>hey</p>
                </div>
            )}
        </div>
    )
}

export default FilterButton