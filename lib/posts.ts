import fs from "fs"
import path from "path"
import { Post } from "./types"

const postDirectory = path.join(process.cwd(), "/pages/blog")

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postDirectory)
  const posts = files.map((file) => {
    const post = require(`../pages/blog/${file}`)

    return {
      slug: file.replace(".mdx", ""),
      ...post.meta,
    }
  })
  console.log(posts)
  return posts
}
