import Head from 'next/head'
import Title from '../components/Title'
import PostCard from '../components/PostCard'

export default function Post({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title} - Max Petretta</title>
        <meta name="description" content={meta.description} />
      </Head>
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
              <PostCard key={meta.related} post={getPostBySlug(meta.related)} />
            </div>
          </section>
        }
      </article>
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
