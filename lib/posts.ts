import fs from "fs"
import path from "path"
import { PostMeta } from "../lib/types"

const postDirectory = path.join(process.cwd(), "/pages/blog")

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postDirectory)
  const posts = files.map((file) => {
    const post = require(`../pages/blog/${file}`)

    return {
      slug: file.replace(".mdx", ""),
      ...post.meta,
    }
  })
  return posts
}
