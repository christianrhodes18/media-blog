import Image from 'next/image'

interface ArticleProps {
    title: string,
    tags: string[],
    publishDate: string,
    image: string
}

const ArticleArchiveCurvy:React.FC<ArticleProps> = ({ title, tags, publishDate, image }) => {
    return (
        <div className="relative z-10 w-full max-w-sm h-[270px] rounded-3xl">
            <Image className="relative rounded-xl overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="270" />
            <div className="flex flex-row gap-4 absolute bottom-28">
                {tags.map((tag) => {
                        return (
                            <p className="body2 rounded-xl bg-violet-400">{tag}</p>
                        )
                    }
                )}
            </div>
            <div className="absolute bg-violet-400 rounded-xl bg-opacity-40 h-24 w-full bottom-0">
                <h5>{title}</h5>
                <p className="subtitle">{publishDate}</p>
            </div>
        </div>
    )
}

export default ArticleArchiveCurvy