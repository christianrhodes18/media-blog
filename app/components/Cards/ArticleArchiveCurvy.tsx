interface ArticleProps {
    title: string,
    tags: string[],
    publishDate: string,
}

const ArticleArchiveCurvy:React.FC<ArticleProps> = ({ title, tags, publishDate }) => {
    return (
        <div className="w-full max-w-sm h-[270px] bg-blue-500 rounded-3xl">
            <h5>{title}</h5>
        </div>
    )
}

export default ArticleArchiveCurvy