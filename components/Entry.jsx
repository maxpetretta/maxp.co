import Link from 'next/link'

export default function Entry({ post }) {
  return (
    <li className="transition duration-300 list-none">
      <Link href={"/blog/" + post.slug}>
        <a className="btn flex items-center py-0 m-0 rounded-none bg-transparent dark:bg-transparent">
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
    </li>
  )
}
