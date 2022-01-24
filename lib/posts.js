import fs from "fs"
import path from "path"

const postDirectory = path.join(process.cwd(), "/pages/blog")

export function getAllPosts() {
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
