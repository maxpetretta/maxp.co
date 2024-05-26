import fs from "fs"
import path from "path"

export const prerender = true

export function entries() {
  const directory = path.resolve("src/lib/posts")
  const files = fs.readdirSync(directory)
  return files.map((file) => ({ slug: file.replace(".md", "") }))
}
