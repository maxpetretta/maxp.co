import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="card">
        <time className="faint absolute left-3">
          {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})}
        </time>
        <div className="absolute right-3">
          <span className="chip" key={post.tags[0]}>{post.tags[0]}</span>
        </div>
        <img className="max-h-72 m-auto mt-8 rounded-lg" src={post.image} alt={post.alt} />
        <div className="z-10">
          <h2 className="my-0">{post.title}</h2>
          <p className="faint mt-2 mb-0">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
