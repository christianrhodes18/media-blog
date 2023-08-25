import path from 'path'
import fs from 'fs'
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

interface MarkdownData {
    title: string;
    date: string;
    author: string;
}


export async function getArticleFromSlug(slug: MarkdownData) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`)
    const source = fs.readFileSync(articleDir)
    const { content, data } = matter(source)
  
    return {
      content,
      frontmatter: {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        //publishedAt: data.publishedAt,
        //readingTime: readingTime(source).text,
        ...data,
      },
    }
  }