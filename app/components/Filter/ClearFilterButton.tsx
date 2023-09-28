"use client"

import Link from "next/link";
import Image from "next/image"

interface FilterButtonProps {
    type: string;
    appliedFilters: string[];
}

const ClearFilterButton: React.FC<FilterButtonProps> = ({ type, appliedFilters }) => {
    return (
        <div className="flex shrink cardBGLightDark rounded-3xl px-4 h-8 my-auto">
            <p className="font-bold mr-2 my-auto">{type}: </p>

            {/* list current aesthetic filters */}
            <div className="flex gap-2 align-middle">
                {appliedFilters.map((option) => {
                    return (
                        <p key={option} className="my-auto italic">{option}</p>
                    )
                })}
            </div>

            {/* clear tag filters */}
            <Link className="pl-2 my-auto" href={'/posts'}>
                <Image className="w-4 dark:hidden" src={'/icons/close_light.svg'} alt={`clear ${type} filter`} width="12" height="12" />
                <Image className="w-4 hidden dark:block" src={'/icons/close_dark.svg'} alt={`clear ${type} filter`} width="12" height="12" />
            </Link>
        </div>
    )
}

export default ClearFilterButton