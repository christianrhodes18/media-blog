import Image from 'next/image'

interface ArticleProps {
    title: string,
    excerpt: string,
    tags: string[],
    publishDate: string,
    image: string
}

const ArticleArchiveCurvy:React.FC<ArticleProps> = ({ title, excerpt, tags, publishDate, image }) => {
    return (
        <div className="flex flex-row h-28 sm:h-36">
            <div className="basis-1/3 sm:basis-1/4">
                <Image className="relative overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="270" />
            </div>
            <div className="cardBGLightDark basis-2/3 sm:basis-3/4 px-4 py-2">
                <div className="flex flex-row">
                    <h5 className="basis-5/6 h-[4.5rem] sm:h-auto">{title}</h5>
                    <p className="hidden sm:block basis-1/6 subtitle2">{publishDate}</p>
                </div>
                <p className="hidden sm:block subtitle1">{excerpt}</p>
                <p className="sm:hidden subtitle2">{publishDate}</p>
            </div>
        </div>
    )
}
    export default ArticleArchiveCurvy