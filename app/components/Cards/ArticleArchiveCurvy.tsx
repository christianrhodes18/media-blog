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
        <>
            <div className="sm:hidden relative z-10 w-full max-w-sm h-[270px] rounded-3xl">
                <Image className="relative rounded-xl overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="270" />
                <div className="flex flex-row gap-2 absolute bottom-[6.5rem] caption px-2">
                    {tags.map((tag) => {
                            return (
                                <p className="rounded-xl cardBGLightDark py-1 px-2">{tag}</p>
                            )
                        }
                    )}
                </div>
                <div className="absolute cardBGLightDark opacity-80 rounded-b-xl h-24 w-full bottom-0 px-2 py-1">
                    <h5>{title}</h5>
                    <p className="subtitle1">{publishDate}</p>
                </div>
            </div>

            <div className="hidden sm:flex flex-row mx-auto rounded-xl cardBGLightDark h-[360px] w-5/6">
                <div className='basis-1/2 p-8'>
                    <div className="flex flex-col">
                        <h5 className="mb-3">{title}</h5>
                        <p className="body1 h-56">{excerpt}</p>
                        <p className="subtitle1">{publishDate}</p>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <Image className="relative rounded-r-xl overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="360" />
                    <div className="flex flex-row gap-2 relative bottom-10 caption px-4">
                        {tags.map((tag) => {
                                return (
                                    <p className="rounded-xl cardBGLightDark py-1 px-2">{tag}</p>
                                )
                            }
                        )}
                </div>
                </div>

            </div>
        </>
    )
}

export default ArticleArchiveCurvy