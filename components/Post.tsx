import Layout from "./Layout"
import PostCard from "./PostCard"
import Title from "./Title"

export default function Post({ meta, children }) {
  return (
    <>
      <Layout
        title={meta.title + " | Max Petretta"}
        description={meta.description}
        image={"https://maxpetretta.com" + meta.image}
        date={meta.date}
        type="article"
      >
        <article>
          <Title meta={meta} />
          <section className="prose max-w-none dark:prose-dark md:prose-lg">
            {children}
          </section>
          {meta.related != null && (
            <section>
              <hr className="mt-10" />
              <h2>Related Post</h2>
              <div className="flex flex-wrap justify-center">
                <PostCard post={getPostBySlug(meta.related)} />
              </div>
            </section>
          )}
        </article>
      </Layout>
    </>
  )
}

export function getPostBySlug(slug) {
  const post = require(`../pages/blog/${slug}.mdx`)

  return {
    slug: slug,
    ...post.meta,
  }
}
