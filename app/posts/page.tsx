//"use client"
import Link from 'next/link'
import { getAllArticles } from "../utils/mdx"
import ArticleArchiveBoxy from '../components/Cards/ArticleArchiveBoxy'
import FilterButton from '../components/FilterButton'

// TODO: make async function and get tags and aesthetics from mdx files
export default async function Posts({ searchParams }: { searchParams: { tag: string, aesthetic: string, date: string }}) {
  const selectedTag = (searchParams.tag || "all") as string // all is default state
  const selectedAesthetic = (searchParams.aesthetic || "all") as string
  const selectedDate = (searchParams.date || "newest") as string

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
        <h2 className="text-center mb-8">All Articles</h2>
        <div className="mt-2 mb-4 flex flex-row gap-4">
          Filter by: 
          <FilterButton 
            type="tag"
          />
          <FilterButton 
            type="aesthetic"
          />
          {/* <FilterButton 
            type="date"
          /> */}
        </div>
        <hr className="mb-8" />
        <div className="flex flex-col mx-auto md:mx-0 gap-6">
          {posts.map((frontMatter: { slug: any; title: string; publishedAt: string; excerpt: string, tags: string[]; coverImage: string }) => {
          return (
              <Link href={`/posts/${frontMatter.slug}`} passHref>
                <ArticleArchiveBoxy 
                  title={frontMatter.title}
                  excerpt={frontMatter.excerpt}
                  tags={frontMatter.tags}
                  publishedAt={frontMatter.publishedAt}
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