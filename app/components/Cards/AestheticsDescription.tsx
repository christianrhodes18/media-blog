"use client"
import { useEffect, useState } from 'react';

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
            console.log('Data loaded:', typeof(data));
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
        <div>
            {Object.keys(data).map((aestheticName) => {
                const aesthetic = data[aestheticName];
                return (
                <div key={aestheticName}>
                    <h2>{aesthetic.name}</h2>
                    <p>{aesthetic.description}</p>
                    <img src={aesthetic.image} alt={aesthetic.name} />

                    {aesthetic.examples.map((exampleCategory) => (
                    <div key={exampleCategory.category}>
                        <h3>{exampleCategory.category}</h3>
                        <ul>
                        {exampleCategory.examples.map((example) => (
                            <li key={example}>{example}</li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
                );
            })}
        </div>
    );
};

export default AestheticsDescription;
