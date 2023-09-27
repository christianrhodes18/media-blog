"use client"

interface FilterButtonProps {
    type: string;
    appliedFilters: string[];
    //onClear: () => void;
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
            <button className="pl-2" /* onClick={onClear} */>
                x
            </button>
        </div>
    )
}

export default ClearFilterButton