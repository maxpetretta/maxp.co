import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    const post = await import(`../../lib/posts/${params.slug}.md`)
    const metadata = post.metadata
    const content = post.default

    return {
      metadata: {
        title: metadata.title,
        date: metadata.date,
      },
      content,
    }
  } catch (err) {
    error(404, err as string)
  }
}
