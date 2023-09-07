import Link from "next/link"
import Image from "next/image"
import { getAllArticles } from "./utils/mdx"
import CharacterGif from "@/public/character.gif"
import ArticleArchiveCurvy from "./components/Cards/ArticleArchiveCurvy"
import ArticleVisual from "./components/Cards/ArticleVisual"

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
    <div className="w-[90%] md:w-[85%] max-w-5xl mx-auto sm:mt-12 mb-12">
      {/* desktop two columns */}
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-4">
        {/* desktop left column */}
        <div className="lg:basis-2/5">
          <div className="flex flex-row justify-center align-middle gap-4 mb-5">
            <Image src={CharacterGif} alt="character" width={60} height={70} />
            <h6 className="my-auto">Welcome</h6>
          </div>
          <h2 className="mb-8">Entertainment Lives Beyond the Screen</h2>
          <h6 className="mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
          <p className="headerLight mb-4 text-center relative lg:hidden">Latest Articles</p>
        </div>
        {/* desktop right column */}
        <div className="lg:basis-3/5 flex flex-col mx-auto md:mx-0 gap-8">
          {posts.map((frontMatter) => {
            return (
              <>
                <Link href={`/posts/${frontMatter.slug}`} passHref className="lg:hidden">
                  <ArticleArchiveCurvy 
                    title={frontMatter.title}
                    excerpt={frontMatter.excerpt}
                    tags={["horror", "action"]}
                    publishDate="August 18, 2023"
                    image="/posts_images/test-post/alan_wake_header.jpg"
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
                <Link href={`/posts/${frontMatter.slug}`} passHref className="hidden lg:block">
                  <ArticleVisual
                    size="small"
                    title={frontMatter.title}
                    excerpt={frontMatter.excerpt}
                    tags={["horror", "action"]}
                    publishDate="August 18, 2023"
                    image="/posts_images/test-post/alan_wake_header.jpg"
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
            </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
