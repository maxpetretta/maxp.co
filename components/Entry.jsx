import Link from 'next/link'

export default function Entry({ post }) {
  return (
    <li className="transition duration-300 list-none">
      <Link href={"/blog/" + post.slug}>
        <a className="btn flex items-center py-0 m-0 rounded-none bg-transparent dark:bg-transparent">
          <span className="ml-2 mr-6 text-lg md:text-2xl">{post.icon}</span>
          <h3 className="">{post.title}</h3>
          <span className="mx-auto mr-2 font-normal">&#10095;</span>
        </a>
      </Link>
    </li>
  )
}
