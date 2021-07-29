import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="card md:w-5/12 max-w-md">
        <div className="flex justify-between">
          <time className="faint">
            {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})}
          </time>
          <span className="chip" key={post.tags[0]}>{post.tags[0]}</span>
        </div>
        <Image
          width={200}
          height={200}
          layout="responsive"
          src={"/images/" + post.image}
          alt={post.alt} 
          className="rounded-lg"
        />
        <div className="z-10">
          <h2 className="my-0">{post.title}</h2>
          <p className="faint mt-2 mb-0">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
