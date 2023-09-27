//"use client"
//import { useEffect } from 'react'
import Link from 'next/link'
import { getAllArticles } from "../utils/mdx"
import ArticleArchiveBoxy from '../components/Cards/ArticleArchiveBoxy'
import FilterButton from '../components/Filter/FilterButton'
import ClearFilterButton from '../components/Filter/ClearFilterButton'

//TRYING OTHER SEARCHPARAMS CALL - export default async function Posts({ searchParams }: { searchParams: { tag: string, aesthetic: string, date: string }}) {


// TODO: make async function and get tags and aesthetics from mdx files
export default async function Posts({ searchParams }: { searchParams: { [key: string]: string | string[]} }) {
  // get tags from searchParams and convert to strings
  let selectedTagString: string = Array.isArray(searchParams.tag) ? searchParams.tag.join(',') : searchParams.tag || "all"
  const selectedTagArray: string[] = selectedTagString.split(',')

  // get aesthetics from searchParams and convert to strings
  let selectedAestheticString: string = Array.isArray(searchParams.aesthetic) ? searchParams.aesthetic.join(',') : searchParams.aesthetic || "all"
  const selectedAestheticArray: string[] = selectedAestheticString.split(',')
  
  //DEV LOGGING
  console.log('selectedTagString: ', selectedTagString)
  console.log('selectedTagString type: ', typeof(selectedTagString))
  console.log('selectedAestheticString: ', selectedAestheticString)

  const isFilterActive: boolean = selectedTagString !== "all" || selectedAestheticString !== "all"
  console.log('isFilterActive: ', isFilterActive)

  //const selectedDate = (searchParams.date || "newest") as string

  const articles = await getAllArticles()
  articles
    .map((article: { data: any }) => article.data)
    .sort((a: { data: { publishedAt: number } }, b: { data: { publishedAt: number } }) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1
      return 0
    })
  let posts = articles.reverse()
  //console.log(posts)
  //console.log(posts[0].tags)
  
  const updatePosts = () => {
    console.log("updating posts")
    let filteredPosts: any[] = []

    //filter posts by tag and aesthetic if both are selected
    if (selectedTagString !== "all" && selectedAestheticString !== "all") {
      filteredPosts = posts.filter((post) => {
        // return true if post tags includes any element of selectedTagArray or post aesthetics includes any element of selectedAestheticArray
        return post.tags.some((tag: string) => selectedTagArray.includes(tag)) && post.aesthetics.some((aesthetic: string) => selectedAestheticArray.includes(aesthetic))
      })
    }

    // filter posts by tag
    if (selectedTagString !== "all") {
      filteredPosts = posts.filter((post) => {
        // DEV LOGGING
        // console.log('post tags: ', post.tags) //log for DEV
        // console.log('selectedTagArray: ', selectedTagArray) //log for DEV
        // console.log('will be included?', post.tags.includes(selectedTagArray)) //log for DEV

        // return true if post tags includes any element of selectedTagArray
        return post.tags.some((tag: string) => selectedTagArray.includes(tag))
      })
    }
    // filter posts by aesthetic
    if (selectedAestheticString !== "all") {
      filteredPosts = posts.filter((post) => {
        // DEV LOGGING
        // console.log('post aesthetics: ', post.aesthetics) //log for DEV
        // console.log('selectedAestheticsArray: ', selectedAestheticsArray) //log for DEV
        
        // return true if post tags includes any element of selectedAestheticsArray
        return post.aesthetics.some((aesthetic: string) => selectedAestheticArray.includes(aesthetic))
      })
    }
    //console.log(filteredPosts)
    return filteredPosts
  }

  // update posts if filter is active
  if (isFilterActive) {
    posts = updatePosts()
  }

  // function to clear filters
  const clearFilters = () => {
    console.log("clearing filters")
    selectedTagString = "all"
    selectedAestheticString = "all"
    posts = articles.reverse()
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
        {(selectedTagString !== "all" || selectedAestheticString !== "all") && (
          <div className="flex flex-row gap-2 mb-4">

            {/* display selected tags if any */}
            {selectedTagString !== "all" && (
              <ClearFilterButton 
                type="tag" 
                appliedFilters={selectedTagArray} 
                //onClear={clearFilters}
              />
            )}

            {/* display selected aesthetics if any */}
            {selectedAestheticString !== "all" && (
              <ClearFilterButton 
                type="aesthetic" 
                appliedFilters={selectedAestheticArray} 
                //onClear={clearFilters}
              />
              // <div className="flex cardBGLightDark rounded-3xl px-4 h-8 my-auto">
              //   <p className="font-bold mr-2 my-auto">aesthetics: </p>
              //   {/* list current aesthetic filters */}
              //   <div className="flex gap-2 align-middle">
              //     {selectedAestheticArray.map((aesthetic) => {
              //       return (
              //         <p key={aesthetic} className="my-auto italic">{aesthetic}</p>
              //       )
              //     })}
              //   </div>
              //   {/* clear aesthetic filters */}
              //   <button className="pl-2">
              //     x
              //   </button>
              // </div>
            )}

          </div>
        )}

        {/* display posts */}
        <hr className="mb-8" />
        <div className="flex flex-col mx-auto md:mx-0 gap-6">
          {posts.map((frontMatter: { slug: any; title: string; publishedAt: string; excerpt: string, tags: string[]; coverImage: string }) => {
          return (
              <Link key={frontMatter.slug} href={`/posts/${frontMatter.slug}`} passHref>
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