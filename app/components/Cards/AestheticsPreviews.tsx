"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

interface Aesthetic {
  name: string;
  description?: string;
  image: string;
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
        <div className="overflow-x-auto flex gap-6 px-10 md:px-32 my-auto h-auto overflow-y-hidden">
            {Object.keys(data).map((aestheticName, index) => {
                const aesthetic = data[aestheticName];
                return (
                    <Link href={`/about#${aestheticName}`} passHref >
                        <div key={aestheticName} className={`min-w-[352px] min-h-[242px] flex rounded-lg bg-[url('/about/${aesthetic.image}')] text-darkText hover:text-opacity-10 hover:scale-110 transition-all bg-cover`} style={{ backgroundImage: `url('/about/${aesthetic.image}'`}}>
                            <h4 className="uppercase text-center m-auto">{aesthetic.name}</h4>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default AestheticsDescription;