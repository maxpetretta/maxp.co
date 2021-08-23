import Title from '../components/Title'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

export default function Post({ meta, children }) {
  return (
    <>
      <Layout
        title={meta.title}
        description={meta.description}
        image={meta.image}
        date={meta.date}
        type="article"
      >
        <article>
          <Title meta={meta} />
          <section className="prose md:prose-xl dark:prose-dark max-w-none">
            {children}
          </section>
          {meta.related != null &&
            <section>
              <hr className="mt-10"/>
              <h2>Related Post</h2>
              <div className="flex flex-wrap justify-center">
                <PostCard post={getPostBySlug(meta.related)} />
              </div>
            </section>
          }
        </article>
      </Layout>
    </>
  )
}

export function getPostBySlug(slug) {
  const post = require(`../pages/blog/${slug}.mdx`)

  return {
    slug: slug,
    ...post.meta
  }
}
