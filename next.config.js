const rehypePrettyCode = require("rehype-pretty-code")
const fs = require("fs")

const options = {
  theme: JSON.parse(
    fs.readFileSync(require.resolve("./styles/monokai-pro.json"), "utf-8")
  ),
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
})
