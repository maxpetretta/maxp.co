import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex transition duration-300 w-full h-96 md:h-full m-3 p-3 font-normal rounded-xl shadow-lg hover:shadow-xl
        transform hover:scale-105 text-gray-900 bg-gray-50 bg-gradient-to-b from-gray-50 to-gray-200  hover:text-gray-900 hover:bg-white 
        dark:bg-gray-800 dark:from-gray-800 dark:to-gray-700">
        <time className="absolute left-3 transition duration-300 text-base font-semibold italic text-gray-900 dark:text-gray-100">
          {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'}) }
        </time>
        <div className="absolute md:relative self-end w-full z-10 p-3">
          {post.tags.map(tag => {
            return <span className="text-sm font-semibold rounded-full ml-0 mr-3 p-1.5 text-gray-100 bg-accent" key={tag}>{tag}</span>
          })}
          <h2 className="transition duration-300 mb-2">{post.title}</h2>
          <p className="transition duration-300 my-2">{post.description}</p>
        </div>
        <img className="self-center max-h-64 mt-0 m-auto md:ml-auto md:mr-6" src={post.image} alt={post.alt} />
      </a>
    </Link>
  )
}
