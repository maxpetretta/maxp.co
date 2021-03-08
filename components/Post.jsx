import Head from 'next/head'
import Card from '../components/Card'

export default function Post({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title} - Max Petretta</title>
        <meta name="description" content={meta.description} />
      </Head>
      <article className="prose prose-lg dark:prose-dark">
        {children}
      </article>
      {meta.related != null &&
        <section>
          <hr className="mt-10"/>
          <h2>Related Post</h2>
          <div className="flex flex-wrap justify-center">
            <Card key={meta.related} post={getPostBySlug(meta.related)} />
          </div>
        </section>
      }
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
