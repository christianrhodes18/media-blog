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
      {/* <h1>h1 headline</h1>
      <h2>h2 headline</h2>
      <h3>h3 headline</h3>
      <h4>h4 headline</h4>
      <h5>h5 headline</h5>
      <h6>h6 headline</h6>
      <p className="subtitle1">subtitle 1</p>
      <p className="subtitle2">subtitle 2</p>
      <p className="body1">body 1</p>
      <p className="body2">body 2</p>
      <p className="caption">caption</p>
      <p className="my_overline">overline</p> */}
      <div>
        {posts.map((frontMatter) => {
          return (
            <Link href={`/posts/${frontMatter.slug}`} passHref>
              <div>
                <h3 className="title">{frontMatter.title}</h3>
                <p className="body1">{frontMatter.excerpt}</p>
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
