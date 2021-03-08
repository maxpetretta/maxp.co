import Link from 'next/link'

export default function Entry({ post }) {
  return (
    <Link href={"/blog/" + post.slug}>
      <a className="btn flex items-center py-0 rounded border-b-2 border-gray-300 dark:border-gray-600">
        <span className="mr-5 text-lg md:text-2xl">{post.icon}</span>
        <h3>{post.title}</h3>
        <time className="md:hidden min-w-max mx-auto mr-0">
          {new Date(post.date).toLocaleDateString("en-US", {month: 'short', day: 'numeric'})}
        </time>
        <time className="hidden md:block mx-auto mr-0">
          {new Date(post.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}
        </time>
      </a>
    </Link>
  )
}
