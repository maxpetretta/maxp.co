import fs from 'fs'
import path from 'path'

const postDirectory = path.join(process.cwd(), "/pages/blog")

export function getPosts() {
  const files = fs.readdirSync(postDirectory)
  const posts = files.map(file => {
    const post = require(`../pages/blog/${file}`)
    
    return {
      slug: file.replace(".mdx", ""),
      ...post.meta
    }
  })

  return posts
}

export function sortPostsByDate(posts) {
  return posts.sort((a, b) => {
    a.date > b.date ? -1 : 1
  })
}
