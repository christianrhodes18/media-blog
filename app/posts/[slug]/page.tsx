import { getArticleFromSlug } from "@/app/utils/mdx"
import { remark } from 'remark';
import html from 'remark-html';
import Image from "next/image"
import "../styles.css"

export default async function Page({ params }: { params: { slug: string } }) {

  async function getArticle() {
    const article = await getArticleFromSlug(params.slug)
    return article
  }

  async function getArticleContents() {
    const result = await remark().use(html).process(article.content)
    return result.toString()
  }

  const article = await getArticle()
  const articleContent = await getArticleContents()

  return (
    <main className="mt-6 min-[700px]:mt-12 mb-12 max-w-[700px] mx-auto">
      {/* list of tags */}
      <div className="w-[95%] min-[700px]:w-full mx-auto my_overline flex flex-wrap gap-4">
        {article.frontmatter.tags.map((tag: string) => {
          return (
            <p>{tag}</p>
          )}
        )}
      </div> 
      <h3 className="w-[95%] min-[700px]:w-full mx-auto mt-2">{article.frontmatter.title}</h3>
      <h6 className="w-[95%] min-[700px]:w-full mx-auto mt-2">{article.frontmatter.excerpt}</h6>
      <p className="w-[95%] min-[700px]:w-full mx-auto my-3 subtitle1">Published: {article.frontmatter.date}</p>
      <Image className="mt-3 w-full h-auto" src={article.frontmatter.coverImage} alt={article.frontmatter.title} width={500} height={200} />
      <p className="w-[95%] min-[700px]:w-full mx-auto my-2 caption">Image by {article.frontmatter.coverImageCredit}</p>
      <hr className="w-[95%] min-[700px]:w-full mx-auto mb-6" />
      <article className="w-[95%] min-[700px]:w-full mx-auto body1" dangerouslySetInnerHTML={{ __html: articleContent }} />
    </main>
  )
}