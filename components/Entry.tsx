import Link from "next/link"
import { PostMeta } from "../lib/types"

export default function Entry({ post }: { post: PostMeta }) {
  return (
    <li className="list-none" key={post.slug}>
      <Link href={"/blog/" + post.slug}>
        <a className="link m-0 flex items-center rounded-none py-0">
          <span className="ml-2 mr-6 hidden text-lg md:block md:text-2xl">
            {post.icon}
          </span>
          <div>
            <h3 className="mt-4 mb-0">{post.title}</h3>
            <p className="faint mt-0 mb-4">{post.description}</p>
          </div>
          <span className="mx-auto mr-1 font-normal md:mr-2">&#10095;</span>
        </a>
      </Link>
    </li>
  )
}
