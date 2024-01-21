import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import fs from "fs"
import { mdsvex } from "mdsvex"
import rehypePrettyCode from "rehype-pretty-code"

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: JSON.parse(fs.readFileSync("./static/fonts/monokai-pro.json", "utf-8")),
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extension: ".md",
      highlight: false,
      rehypePlugins: [[rehypePrettyCode, options]],
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $: "./src",
    },
  },
}

export default config
