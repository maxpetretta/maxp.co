import Link from "next/link"
import Image from "next/image"
import { getPostBySlug } from "../lib/posts"

export default async function PostCard({ post }) {
  console.log(post)
  const { slug, code, meta } = await getPostBySlug(post)
  console.log(slug)
  return (
    <Link href={"/" + slug}>
      <a className="transition duration-300 no-link card flex-col max-w-md md:w-5/12 transform hover:scale-105 hover:shadow-xl">
        <span className="chip absolute top-4 right-4 z-10">{meta.tags[0]}</span>
        <div className="relative w-60 h-60 md:w-76 md:h-76 mx-auto">
          <Image
            layout="fill"
            objectFit="contain"
            src={meta.image}
            alt={meta.alt}
          />
        </div>
        <div className="z-10 m-4">
          <h3 className="my-0 text-2xl md:text-3xl">{meta.title}</h3>
          <p className="faint mt-2 mb-0">{meta.description}</p>
        </div>
      </a>
    </Link>
  )
}
