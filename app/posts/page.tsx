//"use client"
//import { useEffect } from 'react'
import Link from 'next/link'
import { getAllArticles, sortArticlesByDate } from "../utils/mdx"

import ArticleArchiveBoxy from '../components/Cards/ArticleArchiveBoxy'
import FilterButton from '../components/Filter/FilterButton'
import ClearFilterButton from '../components/Filter/ClearFilterButton'

//TRYING OTHER SEARCHPARAMS CALL - export default async function Posts({ searchParams }: { searchParams: { tag: string, aesthetic: string, date: string }}) {


// TODO: make async function and get tags and aesthetics from mdx files
export default async function Posts({ searchParams }: { searchParams: { [key: string]: string | string[]} }) {
  // get tags from searchParams and convert to strings
  let selectedTagString: string = Array.isArray(searchParams.tag) ? searchParams.tag.join(',') : searchParams.tag || "all"
  let selectedTagArray: string[] = selectedTagString.split(',')

  // get aesthetics from searchParams and convert to strings
  let selectedAestheticString: string = Array.isArray(searchParams.aesthetic) ? searchParams.aesthetic.join(',') : searchParams.aesthetic || "all"
  let selectedAestheticArray: string[] = selectedAestheticString.split(',')
  
  //DEV LOGGING
  // console.log('selectedTagString: ', selectedTagString)
  // console.log('selectedTagString type: ', typeof(selectedTagString))
  // console.log('selectedAestheticString: ', selectedAestheticString)

  const isFilterActive: boolean = selectedTagString !== "all" || selectedAestheticString !== "all"
  console.log('isFilterActive: ', isFilterActive)

  //const selectedDate = (searchParams.date || "newest") as string

  const articles = await getAllArticles()
  const sortedArticles = await sortArticlesByDate(articles)
  let posts = sortedArticles.reverse()
  articles
    .map((article: { data: any }) => article.data)
    .sort((a: { data: { publishedAt: number } }, b: { data: { publishedAt: number } }) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1
      return 0
    })
  // let posts = articles.reverse()
  //console.log(posts)
  //console.log(posts[0].tags)

  const updateFilters = (filterType: string, newFilterOptions: string[]) => {
    console.log("updating filters")
    if (filterType === "tag") {
      // update tag filters
      if (selectedTagString !== "all") { // tags already selected from URL
        selectedTagString = newFilterOptions.join(',') // update selectedTagString
        newFilterOptions.map((tag) => { // add new tags to selectedTagArray
          if (!selectedTagArray.includes(tag)) {
            selectedTagArray.push(tag)
          }
        })
      }
      else { // no tags selected from URL so it is "all"
        selectedTagString = newFilterOptions.join(',') // update selectedTagString
        selectedTagArray = newFilterOptions // update selectedTagArray
      }
    }

    if (filterType === "aesthetic") {
      // update aesthetic filters
      if (selectedAestheticString !== "all") { // aesthetics already selected from URL
        selectedAestheticString = newFilterOptions.join(',') // update selectedAestheticString
        newFilterOptions.map((aesthetic) => { // add new aesthetics to selectedAestheticArray
          if (!selectedAestheticArray.includes(aesthetic)) {
            selectedAestheticArray.push(aesthetic)
          }
        })
      }
      else { // no aesthetics selected from URL so it is "all"
        selectedAestheticString = newFilterOptions.join(',') // update selectedAestheticString
        selectedAestheticArray = newFilterOptions // update selectedAestheticArray
      }
    }

    // call updatePosts now that filters have been updated
    posts = updatePosts()
  }
  
  const updatePosts = () => {
    console.log("updating posts")
    let filteredPosts: any[] = []

    //filter posts by tag and aesthetic if both are selected
    if (selectedTagString !== "all" && selectedAestheticString !== "all") {
      filteredPosts = posts.filter((post: { tags: string[]; aesthetics: string[] }) => {
        // return true if post tags includes any element of selectedTagArray or post aesthetics includes any element of selectedAestheticArray
        return post.tags.some((tag: string) => selectedTagArray.includes(tag)) && post.aesthetics.some((aesthetic: string) => selectedAestheticArray.includes(aesthetic))
      })
    }

    // filter posts by tag
    if (selectedTagString !== "all") {
      filteredPosts = posts.filter((post: { tags: string[] }) => {
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
      filteredPosts = posts.filter((post: { aesthetics: string[] }) => {
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
          {selectedTagString !== "all" ? 
            <FilterButton 
              type="tag"
              currentTagFilters={selectedTagArray}
            /> : 
            <FilterButton
                type="tag"
              />
            }
          {selectedAestheticString !== "all" ?
            <FilterButton 
              type="aesthetic"
              currentAestheticFilters={selectedAestheticArray}
            /> :
            <FilterButton
              type="aesthetic"
            />
          }
          {/* <FilterButton 
            type="date"
          /> */}
        </div>

        {/* display selected filters if there are any */}
        {(selectedTagString !== "all" || selectedAestheticString !== "all") && (
          <div className="flex flex-col min-[450px]:flex-row gap-2 mb-4">

            {/* display selected tags if any */}
            {selectedTagString !== "all" && (
              <ClearFilterButton 
                type="tag" 
                appliedFilters={selectedTagArray} 
              />
            )}

            {/* display selected aesthetics if any */}
            {selectedAestheticString !== "all" && (
              <ClearFilterButton 
                type="aesthetic" 
                appliedFilters={selectedAestheticArray} 
              />
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
        {/* display message if no posts exist */}
        {posts.length === 0 && (
          <div className="mx-auto md:mx-0">
              <h6 className="">No articles found with the selected filters. </h6>
          </div>
        )}
      </div>
    )
  }