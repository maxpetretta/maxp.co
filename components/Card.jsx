import Link from 'next/link'
import Image from 'next/image'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex transform transition duration-300 w-full h-96 md:h-full m-3 p-3 font-normal rounded-xl shadow-lg hover:scale-105
        text-gray-900 bg-gray-50 bg-gradient-to-b from-transparent to-gray-300 hover:text-gray-900 hover:bg-white
        dark:bg-gray-800 dark:to-gray-500 dark:hover:text-gray-100 dark:hover:bg-gray-700">
        <time className="absolute left-3 italic text-base font-semibold text-gray-900 dark:text-gray-100">{new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'}) }</time>
        {/* <div className="relative self-start z-0"> */}
          {/* <Image src={post.image} alt={post.alt} width={256} height={256}/> */}
          <img className="max-h-64 mt-0 m-auto md:ml-auto md:mr-6" src={post.image} alt={post.alt} />
        {/* </div> */}
        <div className="absolute self-end w-full z-10 p-3">
          <h2 className="mb-2">{post.title}</h2>
          {post.tags.map(tag => {
            return <span className="text-sm font-semibold rounded-full p-1.5 m-1 bg-accent text-gray-100" key={tag}>{tag}</span>
          })}
          <p className="my-2">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
