import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    const post = await import(`../../lib/posts/${params.post}.md`)
    const metadata = post.metadata
    const content = post.default

    return {
      metadata,
      content,
    }
  } catch (err) {
    error(404, err as string)
  }
}
