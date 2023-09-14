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

  const renderedPostsGallery = (posts: any) => {
    const renderedPosts: JSX.Element[] = []

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      if (i % 3 === 0) {
        // Render the first component for every 3rd post (0, 3, 6, etc.)
        renderedPosts.push(
          <div key={post.id} className="w-full">
            <Link href={`/posts/${post.slug}`} passHref >
              <ArticleVisual
                size="large"
                title={post.title}
                excerpt={post.excerpt}
                tags={["horror", "action"]}
                publishDate="August 18, 2023"
                image={post.coverImage}
              />
            </Link>
          </div>
        );
      } else {
        // Render the second component for other posts with half width
        // Check if the next post exists and render both side-by-side
        const nextPost = posts[i + 1];
        if (nextPost) {
          renderedPosts.push(
            <div className="flex flex-row gap-2 my-2">
              <div key={post.id} className="w-1/2">
                <Link href={`/posts/${post.slug}`} passHref >  
                  <ArticleVisual
                    size="small"
                    title={post.title}
                    excerpt={post.excerpt}
                    tags={["horror", "action"]}
                    publishDate="August 18, 2023"
                    image={post.coverImage}
                  />
                </Link>
              </div>
              <div key={nextPost.id} className="w-1/2">
                <Link href={`/posts/${nextPost.slug}`} passHref >  
                  <ArticleVisual
                    size="small"
                    title={nextPost.title}
                    excerpt={nextPost.excerpt}
                    tags={["horror", "action"]}
                    publishDate="August 18, 2023"
                    image={nextPost.coverImage}
                  />
                </Link>
              </div>
            </div>
          );
          i++; // Increment the index by 1 to skip the next post
        } else {
          // If there's no next post, render large card
          renderedPosts.push(
            <div key={post.id} className="w-full">
              <Link href={`/posts/${post.slug}`} passHref >
                <ArticleVisual
                  size="large"
                  title={post.title}
                  excerpt={post.excerpt}
                  tags={["horror", "action"]}
                  publishDate="August 18, 2023"
                  image={post.coverImage}
                />
              </Link>
            </div>
          );
        }
      }
    }

    return renderedPosts;
  }
    
  return (
    <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto sm:mt-12 mb-12">
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
        <div className="lg:basis-3/5 flex flex-col mx-auto md:mx-0">
          {/* mobile articles - one column */}
          <div className="lg:hidden flex flex-col gap-8">
            {posts.map((frontMatter: { slug: any; title: string; excerpt: string, coverImage: string }) => {
              return (
                <Link href={`/posts/${frontMatter.slug}`} passHref className="lg:hidden">
                  <ArticleArchiveCurvy 
                    title={frontMatter.title}
                    excerpt={frontMatter.excerpt}
                    tags={["horror", "action"]}
                    publishDate="August 18, 2023"
                    image={frontMatter.coverImage}
                  />
                  {/* <div>
                    {/* <p className="date">
                      {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                      {frontMatter.readingTime}
                    </p> */}
                  {/* </div> */}
                </Link>
              )
            })}
          </div>
          {/* desktop articles - gallery */}
          <div className="hidden lg:flex flex-wrap">
            {renderedPostsGallery(posts)}
          </div>
        </div>
      </div>
    </div>
  )
}
