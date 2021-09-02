const rehypeShiki = require("rehype-shiki")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: "./styles/monokai-pro.json",
          useBackground: true,
        },
      ],
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
})
