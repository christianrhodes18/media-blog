import Image from 'next/image'

interface ArticleProps {
    size: string,
    title: string,
    excerpt: string,
    tags: string[],
    publishDate: string,
    image: string
}

const ArticleVisual:React.FC<ArticleProps> = ({ size, title, excerpt, tags, publishDate, image }) => {
    return (
        <>
            <h1>hi</h1>
        </>
    )
}

export default ArticleVisual