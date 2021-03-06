import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex flex-col flex-grow transition duration-300 w-full md:w-5/12 max-w-lg m-3 p-3 font-normal rounded-xl shadow-lg hover:shadow-xl
        transform hover:scale-105 text-gray-900 bg-gray-50 bg-gradient-to-b from-gray-50 to-gray-200 hover:text-gray-900 hover:bg-white 
        dark:bg-gray-800 dark:from-gray-800 dark:to-gray-700">
        <time className="absolute left-3 transition duration-300 text-base font-semibold italic text-gray-900 dark:text-gray-100">
          {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'}) }
        </time>
        <div className="absolute right-3">
          {post.tags.map(tag => {
            return <span className="text-sm font-semibold rounded-full ml-3 p-1.5 text-gray-100 bg-accent" key={tag}>{tag}</span>
          })}
        </div>
        <img className="m-auto mt-8" src={post.image} alt={post.alt} />
        <div className="z-10">
          <h2 className="transition duration-300 my-0">{post.title}</h2>
          <p className="transition duration-300 my-0 text-base md:text-lg">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
