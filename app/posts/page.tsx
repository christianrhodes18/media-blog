import Link from 'next/link'
import { getAllArticles } from "../utils/mdx"
import ArticleArchiveCurvy from '../components/Cards/ArticleArchiveCurvy'
import ArticleArchiveBoxy from '../components/Cards/ArticleArchiveBoxy'

export default async function Posts() {
  const articles = await getAllArticles()
  articles
    .map((article: { data: any }) => article.data)
    .sort((a: { data: { publishedAt: number } }, b: { data: { publishedAt: number } }) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1
      return 0
    })

  const posts = articles.reverse()
    return (
      <div className="w-[90%] md:w-[85%] flex flex-col max-w-5xl mx-auto sm:mt-12 mb-12">
        <h2 className="text-center mb-12">All Articles</h2>
        <hr className="mb-8" />
        <div className="flex flex-col mx-auto md:mx-0 gap-6">
          {posts.map((frontMatter: { slug: any; title: string; excerpt: string, coverImage: string }) => {
          return (
              <Link href={`/posts/${frontMatter.slug}`} passHref>
                <ArticleArchiveBoxy 
                  title={frontMatter.title}
                  excerpt={frontMatter.excerpt}
                  tags={["horror", "action"]}
                  publishDate="August 18, 2023"
                  image={frontMatter.coverImage}
                />

                {/* <div>
                  <h3 className="title">{frontMatter.title}</h3>
                  <p className="body1">{frontMatter.excerpt}</p> */}
                  {/* <p className="date">
                    {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                    {frontMatter.readingTime}
                  </p> */}
                {/* </div> */}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }