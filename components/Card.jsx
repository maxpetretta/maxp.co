import Link from 'next/link'

export default function Card({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a>
        <div>
          <img src={post.image} alt={post.alt} />
        </div>
        <div>
          <h2>{post.title}</h2>
          <time>{post.date}</time>
          {post.tags.map(tag => {
            return <div key={tag}>{tag}</div>
          })}
          <p>{post.description}</p>
        </div>
      </a>
    </Link>
  )
}
