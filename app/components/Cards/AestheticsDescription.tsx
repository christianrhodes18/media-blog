"use client"
import { useEffect, useState } from 'react';
import Button from '../Button';

interface Example {
  category: string;
  examples: string[];
}

interface Aesthetic {
  name: string;
  description: string;
  image: string;
  examples: Example[];
}

const AestheticsDescription: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [data, setData] = useState<{ [key: string]: Aesthetic }>({});

    useEffect(() => {
        fetch('/aestheticsData.json')
        .then((response) => response.json())
        .then((jsonData) => {
            setData(jsonData);
            console.log('Data loaded:', data);
        })
        .catch((error) => {
            console.error('Error loading data:', error);
        });
        setMounted(true)
    }, []);

    //return skeleton if not mounted
    if (!mounted) {
        return (
            <div className="w-[64px] h-[32px] bg-darkText rounded-full flex items-center animate-pulse"></div>
        )
    }

    // Check if data is an empty object or if it's still loading
    if (Object.keys(data).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* header */}
            <div className="lg:pt-20">
                <h1>About the Aesthetics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, soluta consequuntur! Soluta iure, mollitia a autem numquam esse consectetur tempore.</p>
                <hr className="block h-px border-t-px border-black w-full my-6" />
            </div>
            {/* aesthetics cards */}
            <div className="">
                {Object.keys(data).map((aestheticName) => {
                    const aesthetic = data[aestheticName];
                    return (
                        <div key={aestheticName}>
                            <h3 className="">{aesthetic.name}</h3>
                            <p className="mt-3">{aesthetic.description}</p>
                            <img className="mt-6" src={aesthetic.image} alt={aesthetic.name} />

                            <div className="w-11/12 sm:w-full mx-auto">
                                {aesthetic.examples.map((exampleCategory) => (
                                <div key={exampleCategory.category} className="mt-6">
                                    <h6 className="mt-3 font-bold">{exampleCategory.category}</h6>
                                    <ul>
                                    {exampleCategory.examples.map((example) => (
                                        <li key={example} className="my_overline">
                                            {example}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                ))}
                                <a href={`/aesthetics/${aesthetic.name.toLowerCase()}`} className="flex mt-6 mx-auto justify-center w-4/5 cardBGLightDark px-4 py-2 rounded-lg">
                                    <button className="text-darkText subtitle1">
                                        {`Read ${aesthetic.name} Articles`}
                                    </button>
                                </a>
                            </div>
                            <hr className="block h-px border-t-px border-black w-full my-6" />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AestheticsDescription;
