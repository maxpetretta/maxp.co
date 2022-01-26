import Link from "next/link"
import Image from "next/image"

export default function PostCard({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="no-link card max-w-md transform flex-col transition duration-300 hover:scale-105 hover:shadow-xl md:w-5/12">
        <span className="chip absolute top-4 right-4 z-10">{post.tags[0]}</span>
        <div className="relative mx-auto h-60 w-60 md:h-76 md:w-76">
          <Image
            layout="fill"
            objectFit="contain"
            src={post.image}
            alt={post.alt}
          />
        </div>
        <div className="z-10 m-4">
          <h3 className="my-0 text-2xl md:text-3xl">{post.title}</h3>
          <p className="faint mt-2 mb-0">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
