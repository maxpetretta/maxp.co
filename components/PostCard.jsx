import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="no-link card flex-col max-w-md md:w-5/12 transform hover:scale-105 hover:shadow-xl">
        <span className="chip absolute top-4 right-4 z-10" key={post.tags[0]}>{post.tags[0]}</span>
        <div className="relative w-60 h-60 xs:w-76 xs:h-76 mx-auto">
          <Image
            layout="fill"
            objectFit="contain"
            src={"/images/" + post.image}
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
