import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"
import { remarkMdxImages } from "remark-mdx-images"
// const rehypeShiki = require("rehype-shiki")

const postDirectory = path.join(process.cwd(), "/posts")

export async function getAllPosts() {
  const files = fs.readdirSync(postDirectory)
  const posts = files.map((file) => {
    const source = fs.readFileSync(path.join(postDirectory, file))
    const { data } = matter(source)

    return {
      slug: file.replace(".mdx", ""),
      data,
    }
  })

  return posts
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(fullPath, "utf8")

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: postDirectory,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ]
      // options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeShiki]

      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      }

      return options
    },
  })

  return {
    slug,
    code,
    meta: frontmatter,
  }
}
