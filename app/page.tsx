import Link from "next/link"
import Image from "next/image"
import { getAllArticles, sortArticlesByDate } from "./utils/mdx"
import CharacterGif from "@/public/character.gif"
import ArticleArchiveCurvy from "./components/Cards/ArticleArchiveCurvy"
import ArticleVisual from "./components/Cards/ArticleVisual"
import Parallax from "./components/Motions/Parallax"
import AestheticsPreviews from "./components/Cards/AestheticsPreviews"

export default async function Home() {
  const articles = await getAllArticles()
  const sortedArticles = await sortArticlesByDate(articles)
  const posts = sortedArticles.reverse()
  
  // //format dates
  // articles.map((article) => {
  //   const date = new Date(article.data.publishedAt)
  //   article.data.publishedAt = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  // })


  const renderedPostsGallery = (posts: any, postCount: number) => {
    const renderedPosts: JSX.Element[] = []

    for (let i = 0; i < postCount; i++) {
      const post = sortedArticles[i];
      if (i % 5 === 0) {
        // Render the first component for every 5th post (0, 5, 10, etc.)
        renderedPosts.push(
          <div key={post.id} className="w-full">
            <Link href={`/posts/${post.slug}`} passHref >
              <ArticleVisual
                size="large"
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
                publishedAt={post.publishedAt}
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
                    tags={post.tags}
                    publishedAt={post.publishedAt}
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
                    tags={nextPost.tags}
                    publishedAt={post.publishedAt}
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
                  tags={post.tags}
                  publishedAt={post.publishedAt}
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
    <>
      <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto sm:mt-12 mb-12">
        {/* desktop two columns */}
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-4">
          {/* desktop left column */}
          <div className="lg:basis-2/5">
            <div className="flex flex-row justify-center lg:justify-start align-middle gap-4 mb-5">
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
              {/* render 3 most recent posts on mobile */}
              {posts.slice(0, 3).map((frontMatter: { slug: any; title: string; publishedAt: string, excerpt: string, coverImage: string, tags: [string] }) => {
                return (
                  <Link href={`/posts/${frontMatter.slug}`} passHref className="lg:hidden">
                    <ArticleArchiveCurvy 
                      title={frontMatter.title}
                      excerpt={frontMatter.excerpt}
                      tags={frontMatter.tags}
                      publishedAt={frontMatter.publishedAt}
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
              {renderedPostsGallery(posts, 5)} {/* render 5 posts here */}
            </div>
          </div>
        </div>
      </div>

      {/* site intro section */}
      <section className="w-full mt-28 bg-cover">
        <div className="">
          <Parallax />
        </div>
        <div className="flex flex-col sm:flex-row w-[90%] md:w-[85%] max-w-6xl mx-auto sm:mt-12 sm:mb-12">
          <div className="hidden sm:block basis-1/3"> {/* desktop version */}
            <Image src={"/aki_wallpaper.jpeg"} alt="banner" width={564} height={1081} className="-translate-y-16" />
          </div>
          <div className="sm:hidden max-h-80 flex"> {/* mobile version */}
            <Image src={"/aki_wallpaper.jpeg"} alt="banner" width={250} height={500} className="rotate-90 -translate-y-20 m-auto" />
          </div>
          <div className="basis-2/3 px-2 md:px-8 lg:px-20">
            <h3 className="md:mt-4">Venture into the worlds between worlds; dark and light, good and evil</h3>
            <h6 className="mt-4 sm:mt-10 md:mt-20">At Aesthete's Digest, we believe that the media we consume can make us better, more cultured and sensitive people. By having an open mind and the diligence to research topics of interest, you can grow into a person capable of growth, compassion, and greatness</h6>
            <Link href="/about" passHref>
              <h5 className="mt-8 sm:mt-16 underline">Learn more about us</h5>
            </Link>
          </div>
        </div>
      </section>

      {/* more articles section */}
      <section className="mt-16 sm:mt-28 h-auto moreArticlesSectionBG">
        <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto">
          <h2>More Articles</h2>
          {/* show proper articles for desktop */}
          <div className="hidden lg:flex flex-col gap-8 py-12 mx-auto">
              {/* render 3 recent articles */}
              {posts.slice(5, 8).map((frontMatter: { slug: any; title: string; publishedAt: string, excerpt: string, coverImage: string, tags: [string] }) => {
                return (
                  <Link href={`/posts/${frontMatter.slug}`} passHref className="max-w-[1130px]">
                    <ArticleArchiveCurvy 
                      title={frontMatter.title}
                      excerpt={frontMatter.excerpt}
                      tags={frontMatter.tags}
                      publishedAt={frontMatter.publishedAt}
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
            {/* show proper articles for mobile */}
            <div className="lg:hidden flex flex-col gap-8 py-12 mx-auto">
              {/* render 3 recent articles */}
              {posts.slice(3, 6).map((frontMatter: { slug: any; title: string; publishedAt: string, excerpt: string, coverImage: string, tags: [string] }) => {
                return (
                  <Link href={`/posts/${frontMatter.slug}`} passHref className="max-w-[1130px]">
                    <ArticleArchiveCurvy 
                      title={frontMatter.title}
                      excerpt={frontMatter.excerpt}
                      tags={frontMatter.tags}
                      publishedAt={frontMatter.publishedAt}
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
            <Link href="/posts" passHref>
``              <button className="my-auto w-auto h-10 cardBGLightDark rounded-lg px-4 py-2 subtitle1 mb-8">
                View All Articles
              </button>
            </Link>
        </div>
      </section>

      {/* Explore Aesthetics section */}
      <section className="viewAestheticsSectionBG min-h-[500px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-none justify-between align-middle text-darkText py-11 w-4/5 mx-auto">
          <h2>Explore Aesthetics</h2>
          <Link href="/about#aesthetics" passHref>
            <button className="my-auto w-auto h-10 bg-primaryPurple rounded-lg px-4 py-2 subtitle1">
              View All Aesthetics
            </button>
          </Link>
        </div>
        <div className="h-[260px] flex">
          <AestheticsPreviews />
        </div>
      </section>
    </>
  )
}
