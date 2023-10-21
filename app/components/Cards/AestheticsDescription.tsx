"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

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
                <p>Aesthetics provide a useful framework for understanding and appreciating media. By identifying the key aesthetic elements of a given piece of media, we can better understand its artistic and emotional impact. This can help us to appreciate even seemingly simple or mundane media on a deeper level. </p>
                <hr className="block h-px border-t-px border-black w-full mt-6" />
            </div>
            {/* aesthetics cards */}
            <div className="">
                {Object.keys(data).map((aestheticName, index) => {
                    const aesthetic = data[aestheticName];
                    return (
                        <div id={aestheticName} key={aestheticName}>
                            <div className={`block mt-6 md:flex md:gap-8 lg:gap-20 md:h-[25rem] lg:h-[32rem] ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="md:basis-3/5 my-auto md:my-0 md:flex md:flex-col md:justify-between lg:justify-around md:align-middle">
                                    <div className="hidden md:block">
                                        <h3 className="">{aesthetic.name}</h3>
                                        <p className="mt-3">{aesthetic.description}</p>
                                    </div>
                                    <h3 className="md:hidden">{aesthetic.name}</h3>
                                    <p className="mt-3 md:hidden">{aesthetic.description}</p>
                                    <div className="m-auto md:hidden">
                                        <Image className="mt-6 mx-auto md:hidden rounded-3xl bg-center" src={`/about/${aesthetic.image}`} alt={aesthetic.name} width={300} height={200} />
                                    </div>

                                    <div className="w-11/12 sm:w-full mx-auto min-[550px]:flex min-[550px]:flex-row min-[550px]:justify-between min-[550px]:gap-8">
                                        {aesthetic.examples.map((exampleCategory) => (
                                        <div key={exampleCategory.category} className="mt-6">
                                            <h6 className="mt-3 font-bold">{exampleCategory.category}</h6>
                                            <ul>
                                            {exampleCategory.examples.map((example) => (
                                                <li key={example} className="my_overline list-disc">
                                                    {example}
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        ))}
                                    </div>
                                    <Link href={`/posts/?aesthetic=${aesthetic.name.toLowerCase()}`} passHref className="flex mt-6 mx-auto justify-center w-4/5 bg-darkBGAccent px-4 py-2 rounded-lg">
                                        <button className="text-darkText subtitle1">
                                            {`Read ${aesthetic.name} Articles`}
                                        </button>
                                    </Link>
                                </div>
                                <div className="md:basis-2/5 m-auto">
                                    <Image className="hidden md:block rounded-3xl bg-center" src={`/about/${aesthetic.image}`} alt={aesthetic.name} width={300} height={300} />
                                </div>
                            </div>
                            <hr className="block h-px border-t-px border-black w-full mt-6" />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default AestheticsDescription;
