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
        <>
            <div className="sm:hidden relative z-10 w-full max-w-sm h-[300px] rounded-3xl"> {/* h-[270px] */}
                <Image className="relative rounded-xl overflow-hidden object-cover h-full" src={image} alt="header image" width={400} height="270" />
                <div className="flex flex-row gap-2 absolute bottom-[8rem] caption px-2"> {/* bottom-[6.5rem] */}
                    {tags.map((tag) => {
                            return (
                                <p className="rounded-xl cardBGLightDark py-1 px-2">{tag}</p>
                            )
                        }
                    )}
                </div>
                <div className="absolute cardBGLightDark opacity-80 rounded-b-xl h-[7.5rem] w-full bottom-0 px-2 py-1">
                    <h5 className="py-1">{title}</h5>
                </div>
                <p className="subtitle1 absolute bottom-0 p-2">{publishedAt}</p>
            </div>

            <div className="hidden sm:flex flex-row mx-auto rounded-xl cardBGLightDark h-auto w-5/6"> {/* h-[360px] */}
                <div className='basis-1/2 px-4 pt-4 pb-2 md:px-8 md:pt-8 md:pb-4'>
                    <div className="flex flex-col">
                        <h5 className="mb-3">{title}</h5>
                        <p className="body1">{excerpt}</p>
                        <p className="subtitle2 mt-4 opacity-70">{publishedAt}</p>
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