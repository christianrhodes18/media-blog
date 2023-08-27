import Link from "next/link"
import { getAllArticles } from "./utils/mdx"

export default async function Home() {
  const articles = await getAllArticles()
  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1
      return 0
    })

  const posts = articles.reverse()
    
  return (
    <>
      <h1>hello world</h1>
      <div>
        {posts.map((frontMatter) => {
          return (
            <Link href={`/posts/${frontMatter.slug}`} passHref>
              <div>
                <h1 className="title text-xl">{frontMatter.title}</h1>
                <p className="summary text-md">{frontMatter.excerpt}</p>
                {/* <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  {frontMatter.readingTime}
                </p> */}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
