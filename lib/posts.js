import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), "/pages/blog")

export function getPosts() {
  const files = fs.readdirSync(postDirectory)
  const posts = files.map(file => {
    const post = fs.readFileSync(path.join(postDirectory, file), "utf8")
    const {data, content} = matter(post)

    return {
      slug: file.replace(".mdx", ""),
      ...data
    }
  })

  return posts
}

export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    a.date > b.date ? -1 : 1
  })
}
