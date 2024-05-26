import { dev } from "$app/environment"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

export const prerender = true

inject({ mode: dev ? "development" : "production" })
injectSpeedInsights()

export async function load({ fetch }) {
  const response = await fetch(`/api/posts`)
  const posts = await response.json()
  return { posts }
}
