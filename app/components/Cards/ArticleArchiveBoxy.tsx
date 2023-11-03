import Image from 'next/image'

interface ArticleProps {
    title: string,
    excerpt: string,
    tags: string[],
    publishedAt: string,
    image: string
}

const ArticleArchiveCurvy:React.FC<ArticleProps> = ({ title, excerpt, tags, publishedAt, image }) => {
    return (
        <div className="flex flex-row h-auto max-h-48"> {/* h-28 sm:h-44 md:h-40 */}
            <div className="basis-1/3 sm:basis-1/4">
                <Image className="relative overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="270" />
            </div>
            <div className="cardBGLightDarkArchive basis-2/3 sm:basis-3/4 px-2 sm:px-4 py-2">
                <div className="flex flex-row">
                    <h5 className="sm:basis-5/6 text-xl sm:text-2xl h-auto">{title}</h5>
                    <p className="hidden sm:block sm:basis-1/6 subtitle2 ml-1">{publishedAt}</p>
                </div>
                <p className="hidden sm:block subtitle1 my-2">{excerpt}</p>
                <p className="sm:hidden subtitle2 mt-4 mb-2">{publishedAt}</p>
            </div>
        </div>
    )
}
    export default ArticleArchiveCurvy