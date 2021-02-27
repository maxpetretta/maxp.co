import Link from 'next/link'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex flex-wrap m-3 p-3 w-full font-normal bg-white rounded-xl shadow-xl transition ease-in-out duration-300 transform hover:scale-105 hover:text-black hover:bg-white">
        <div className="min-w-1/4 p-3">
          <img src={post.image} alt={post.alt} />
        </div>
        <div className="p-3">
          <time className="text-gray-500 italic">{new Date(post.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'}) }</time>
          <h2 className="font-bold text-3xl my-2">{post.title}</h2>
          {post.tags.map(tag => {
            return <span className="justify-right font-bold bg-red-700 text-gray-100 rounded-full p-1.5 m-1" key={tag}>{tag}</span>
          })}
          <p className="my-3">{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
