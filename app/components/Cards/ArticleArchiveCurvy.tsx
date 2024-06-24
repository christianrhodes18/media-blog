import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  link: string;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  image: string;
}

const ArticleArchiveCurvy: React.FC<ArticleProps> = ({
  link,
  title,
  excerpt,
  tags,
  publishedAt,
  image,
}) => {
  return (
    <>
      {/* mobile view */}
      <div className="sm:hidden relative z-10 w-full max-w-sm h-[300px] rounded-3xl">
        {" "}
        {/* h-[270px] */}
        <Link href={`/posts/${link}`} passHref>
          <Image
            className="relative rounded-xl overflow-hidden object-cover h-full"
            src={image}
            alt="header image"
            width={400}
            height="270"
          />
        </Link>
        <div className="flex flex-row gap-2 absolute bottom-[8rem] caption px-2">
          {" "}
          {/* bottom-[6.5rem] */}
          {tags.map((tag) => {
            return (
              <Link
                href={`/posts?tag=${tag}`}
                key={tag}
                className="z-20 hover:scale-105 transition-all duration-200 rounded-xl cardBGLightDark py-1 px-2"
              >
                {tag}
              </Link>
            );
          })}
        </div>
        <div className="absolute cardBGLightDark opacity-80 rounded-b-xl h-[7.5rem] w-full bottom-0 px-2 py-1">
          <Link href={`/posts/${link}`} passHref className="py-1">
            <h5>{title}</h5>
          </Link>
        </div>
        <p className="subtitle1 absolute bottom-0 p-2">{publishedAt}</p>
      </div>

      {/* desktop view */}
      <div className="hidden sm:flex flex-row mx-auto rounded-xl cardBGLightDark h-auto w-5/6 max-w-[800px]">
        {" "}
        {/* h-[360px] */}
        <div className="basis-1/2 px-4 pt-4 pb-2 md:px-8 md:pt-8 md:pb-4">
          <div className="flex flex-col">
            <Link href={`/posts/${link}`} passHref className="mb-3">
              <h5>{title}</h5>
            </Link>
            <p className="body1">{excerpt}</p>
            <p className="subtitle2 mt-4 opacity-70">{publishedAt}</p>
          </div>
        </div>
        <div className="basis-1/2">
          <Link href={`/posts/${link}`} passHref>
            <Image
              className="relative rounded-r-xl overflow-hidden object-cover h-full hover:scale-105 transition-all"
              src={image}
              alt="header image"
              width={400}
              height="360"
            />
          </Link>
          <div className="flex flex-row gap-2 relative bottom-14 caption px-4">
            {tags.map((tag) => {
              return (
                <Link
                  href={`/posts?tag=${tag}`}
                  key={tag}
                  className="z-20 hover:scale-105 transition-all duration-200 rounded-xl cardBGLightDark py-1 px-2"
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleArchiveCurvy;
