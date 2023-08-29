import { getArticleFromSlug } from "@/app/utils/mdx"
import { remark } from 'remark';
import html from 'remark-html';
import Image from "next/image"

export default async function Page({ params }: { params: { slug: string } }) {

  async function getArticle() {
    const article = await getArticleFromSlug(params.slug)
    return article
  }

  async function blah() {
    const result = await remark().use(html).process(article.content)
    return result.toString()
  }

  const article = await getArticle()
  const articleContent = await blah()

  return (
    <>
      <p className="subtitle1">Tags: </p> 
      <h2>{article.frontmatter.title}</h2>
      <h5>{article.frontmatter.excerpt}</h5>
      <h6>Published: </h6>
      <Image src={article.frontmatter.coverImage} alt={article.frontmatter.title} width={500} height={200} />
      <p className="caption">{article.frontmatter.coverImage}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: articleContent }} />
    </>
  )
}