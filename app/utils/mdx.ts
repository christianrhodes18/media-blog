import path from 'path'
import * as fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

const articlesPath = path.join(process.cwd(), 'data/articles')

export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`)
  return paths.map((path) => {
    // holds the paths to the directory of the article
    const pathContent = path.split('/')

    //use filename as slug
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getArticleFromSlug(slug: String) {
  const articleDir = path.join(articlesPath, `${slug}.mdx`)
  const source = fs.readFileSync(articleDir)
  const { content, data } = matter(source)
  
  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      publishedAt: data.publishedAt,
      author: data.author,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      coverImageCredit: data.coverImageCredit,
      tags: data.tags,
      aesthetics: data.aesthetics,
      creator: data.creator,
      franchise: data.franchise,
      song: data.song,
      songName: data.songName,
      songAuthor: data.songAuthor,
      songCover: data.songCover,
      //readingTime: readingTime(source).text,
      ...data,
    },
  }
}

export async function getAllArticles() {
  const articles = fs.readdirSync(path.join(process.cwd(), 'data/articles'))

  return articles.reduce((allArticles: any, articleSlug: any) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data/articles', articleSlug),
      'utf-8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: articleSlug.replace('.mdx', ''),
        //readingTime: readingTime(source).text,
      },
      ...allArticles,
    ]
  }, [])
}

// export async function getArticlesByTag(tag: string) {
//   const articles = await getAllArticles()
//   return articles.filter((article: any) => article.tags.includes(tag))
// }

// export async function getArticlesByAesthetics(aesthetics: string) {
//   const articles = await getAllArticles()
//   return articles.filter((article: any) => article.aesthetics.includes(aesthetics))
// }

// export async function getArticlesByCreator(creator: string) {
//   const articles = await getAllArticles()
//   return articles.filter((article: any) => article.creator.includes(creator))
// }

// export async function getAllTags() {
//   //const articles = await getAllArticles()
//   // const tags = articles.reduce((allTags: any, article: any) => {
//   //   //return array of strings
//   //   return [...new Set([...allTags, ...article.tags])]
//   // }, [])

//   //return tags
//   return ["tag1", "tag2", "tag3"]
// }

// export async function getAllAesthetics() {
//   const articles = await getAllArticles()
//   const aesthetics = articles.reduce((allAesthetics: any, article: any) => {
//     return [...new Set([...allAesthetics, ...article.aesthetics])]
//   }, [])

//   return aesthetics
// }