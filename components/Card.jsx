import Link from 'next/link'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="flex flex-wrap transform transition ease-in-out duration-300 w-full font-normal m-3 p-3 rounded-xl shadow-lg bg-gray-50 hover:scale-105 hover:text-black hover:bg-white">
        <div className="w-1/3 p-3">
          <img src={post.image} alt={post.alt} />
        </div>
        <div className="m-3">
          <time className="italic text-base text-gray-400">{new Date(post.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'}) }</time>
          <h3 className="mb-2">{post.title}</h3>
          {post.tags.map(tag => {
            return <span className="text-sm font-semibold rounded-full p-1.5 m-1 bg-accent text-gray-100" key={tag}>{tag}</span>
          })}
          <p>{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
