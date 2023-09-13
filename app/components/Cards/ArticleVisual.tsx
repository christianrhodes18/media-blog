import Image from 'next/image'
import Button from '../Button'

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
        <div className={`relative ${size === 'small' ? 'h-[260px]' : 'h-[360px]'}`}>
            <Image className="rounded-xl overflow-hidden object-cover h-full opacity-90" src={image} alt="header image" width={800} height="270" />
            <div className={`flex flex-row relative ${size === 'small' ? '-top-60' : '-top-80'}`}>
                <div className={`basis-1/2 ${size === 'small' ? 'hidden' : ''}`}></div>
                <div className={`${size === 'small' ? 'mx-4' : ''}`}>
                    <div className={`flex flex-row gap-2 caption text-white ${size === 'small' ? '' : 'basis-1/2'}`}>
                        {tags.map((tag) => {
                                return (
                                    <p className="rounded-xl px-2">{tag}</p>
                                )
                            }
                        )}
                    </div>
                    <h4 className={`text-white my-2 ${size === 'small' ? 'text-xl' : ''}`}>{title}</h4>
                    <p className="subtitle1 text-white">{publishDate}</p>
                    <div className={`${size === 'small' ? 'mt-16' : 'mt-24'}`}>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleVisual