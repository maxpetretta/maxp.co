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
        <section className="flex flex-wrap">
          <hr className="w-full mt-10"/>
          <h2>Related Post</h2>
          <Card key={meta.related} post={getPostBySlug(meta.related)} />
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
