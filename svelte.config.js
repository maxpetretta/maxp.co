import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import fs from "fs"
import { escapeSvelte, mdsvex } from "mdsvex"
import { getHighlighter } from "shiki"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extension: ".md",
      highlight: {
        highlighter: async (code, lang = "text") => {
          const theme = JSON.parse(fs.readFileSync("./static/fonts/monokai-pro.json", "utf-8"))
          const highlighter = await getHighlighter({
            theme,
            langs: ["html", "css", "javascript", "typescript", "svelte", "solidity"],
          })
          const html = escapeSvelte(highlighter.codeToHtml(code, { theme, lang }))
          return `{@html \`${html}\` }`
        },
      },
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: { $: "./src" },
  },
}

export default config
