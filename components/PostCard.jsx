import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="card flex-col md:w-5/12 max-w-md p-0 overflow-hidden">
        <span className="chip absolute top-4 right-4 z-10 border-2 border-gray-50 dark:border-gray-800" key={post.tags[0]}>{post.tags[0]}</span>
        <Image
          width={200}
          height={200}
          layout="responsive"
          src={"/images/" + post.image}
          alt={post.alt}
          priority
        />
        <div className="z-10 m-4">
          <h3 className="my-0 text-2xl md:text-3xl">{post.title}</h3>
          <p className="faint mt-2 mb-0">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
