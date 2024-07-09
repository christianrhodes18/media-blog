import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

interface ArticleProps {
  link: string;
  size: string;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  image: string;
}

const ArticleVisual: React.FC<ArticleProps> = ({
  link,
  size,
  title,
  excerpt,
  tags,
  publishedAt,
  image,
}) => {
  return (
    <div className={`relative ${size === "small" ? "h-[260px]" : "h-[360px]"}`}>
      <Image
        className="rounded-xl overflow-hidden object-cover h-full"
        src={image}
        alt="header image"
        width={800}
        height="270"
      />
      <div
        className={`absolute w-full top-0 left-0 rounded-xl bg-black opacity-30 ${
          size === "small" ? "h-[260px]" : "h-[360px]"
        }`}
      ></div>
      <div
        className={`flex flex-row relative h-[88%] ${
          size === "small" ? "-top-60" : " -top-[20.5rem]"
        }`}
      >
        <div className={`basis-1/2 ${size === "small" ? "hidden" : ""}`}></div>
        <div className={`${size === "small" ? "mx-4" : "basis-1/2"}`}>
          <div
            className={`flex gap-2 caption text-white ${
              size === "small" ? "" : "basis-1/2"
            }`}
          >
            {tags.map((tag) => {
              return (
                <Link href={`/posts?tag=${tag}`} key={tag} passHref>
                  <p className="rounded-xl pr-2">{tag}</p>
                </Link>
              );
            })}
          </div>
          {/* <Link href={`/posts/${link}`} passHref> */}
          <h4
            className={`text-white my-2 lg:pr-2 ${
              size === "small" ? "text-xl" : ""
            }`}
          >
            {title}
          </h4>
          {/* </Link> */}
          <p className="subtitle1 text-white">{publishedAt}</p>
          <div className={`absolute bottom-0 ${size === "small" ? "" : ""}`}>
            <Link href={`/posts/${link}`} passHref>
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleVisual;
