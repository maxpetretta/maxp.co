import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex flex-col flex-grow md:w-5/12 max-w-lg m-3 p-3 rounded-xl shadow-lg hover:shadow-xl
        transform hover:scale-105 text-gray-900 bg-gray-50 bg-gradient-to-b from-gray-50 to-gray-200 hover:text-gray-900
        dark:from-gray-800 dark:to-gray-700">
        <time className="absolute left-3">
          {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})}
        </time>
        <div className="absolute right-3">
          <span className="text-sm rounded-full ml-3 p-1.5 text-gray-100 bg-accent" key={post.tag}>{post.tag}</span>
        </div>
        <img className="max-h-72 m-auto mt-8 rounded-xl" src={post.image} alt={post.alt} />
        <div className="z-10">
          <h2 className="my-0">{post.title}</h2>
          <p className="mt-2 mb-0 text-base font-normal">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
