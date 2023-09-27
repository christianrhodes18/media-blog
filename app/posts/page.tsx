//"use client"
//import { useEffect } from 'react'
import Link from 'next/link'
import { getAllArticles } from "../utils/mdx"
import ArticleArchiveBoxy from '../components/Cards/ArticleArchiveBoxy'
import FilterButton from '../components/FilterButton'

//TRYING OTHER SEARCHPARAMS CALL - export default async function Posts({ searchParams }: { searchParams: { tag: string, aesthetic: string, date: string }}) {


// TODO: make async function and get tags and aesthetics from mdx files
export default async function Posts({ searchParams }: { searchParams: { [key: string]: string | string[]} }) {
  //const selectedTag = (searchParams.tag || "all") as string // all is default state
  //const selectedAestheticString = (searchParams.aesthetic || "all") as string

  // get tags from searchParams and convert to strings
  const selectedTagString: string = Array.isArray(searchParams.tag) ? searchParams.tag.join(',') : searchParams.tag || "all"
  const selectedTagArray: string[] = selectedTagString.split(',')

  // get aesthetics from searchParams and convert to strings
  const selectedAestheticString: string = Array.isArray(searchParams.aesthetic) ? searchParams.aesthetic.join(',') : searchParams.aesthetic || "all"
  const selectedAestheticArray: string[] = selectedAestheticString.split(',')

  //const selectedDate = (searchParams.date || "newest") as string

  const articles = await getAllArticles()
  articles
    .map((article: { data: any }) => article.data)
    .sort((a: { data: { publishedAt: number } }, b: { data: { publishedAt: number } }) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1
      return 0
    })
  const posts = articles.reverse()
  
  const updatePosts = () => {
    // filter posts by tag
    if (selectedTagString !== "all") {
      posts.filter((post: { data: { tags: string[] } }) => {
        return post.data.tags.includes(selectedTagString)
      })
    }
  }

  // call updatePosts when page loads
  // useEffect(() => {
  //   updatePosts()
  // }, [])

  // update posts when selectedTag changes
  // useEffect(() => {
  //   updatePosts()
  // }, [selectedTag, selectedAestheticString, selectedDate])

    return (
      <div className="w-[90%] md:w-[85%] flex flex-col max-w-5xl mx-auto sm:mt-12 mb-12">
        <h2 className="text-center mb-8">Articles</h2>
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

        {/* display selected filters if there are any */}
        {selectedTagString !== "all" || selectedAestheticString !== "all" && (
          <div className="flex flex-row gap-2 mb-4">

            {/* display selected tags if any */}
            {selectedTagString !== "all" && (
              <div className="flex cardBGLightDark rounded-3xl px-4 h-8 my-auto">
                <p className="font-bold mr-2 my-auto">tags: </p>
                {/* list current aesthetic filters */}
                <div className="flex gap-2 align-middle">
                  {selectedTagArray.map((tag) => {
                    return (
                      <p key={tag} className="my-auto italic">{tag}</p>
                    )
                  })}
                </div>
                {/* clear tag filters */}
                <button className="pl-2">
                  x
                </button>
              </div>
            )}

            {/* display selected aesthetics if any */}
            {selectedAestheticString !== "all" && (
              <div className="flex cardBGLightDark rounded-3xl px-4 h-8 my-auto">
                <p className="font-bold mr-2 my-auto">aesthetics: </p>
                {/* list current aesthetic filters */}
                <div className="flex gap-2 align-middle">
                  {selectedAestheticArray.map((aesthetic) => {
                    return (
                      <p key={aesthetic} className="my-auto italic">{aesthetic}</p>
                    )
                  })}
                </div>
                {/* clear aesthetic filters */}
                <button className="pl-2">
                  x
                </button>
              </div>
            )}

          </div>
        )}

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