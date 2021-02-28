import Head from 'next/head'
import Card from '../components/Card'
import { getPosts } from '../lib/posts'

export default function Blog({ years, postsByYear }) {
  return (
    <>
      <Head>
        <title>Blog - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software development engineer" />
      </Head>
      <section>
        <h1>Posts</h1>
        <p>This is my blog, where I write about development, technology, and anything else that catches my fancy</p>
      </section>
      {years.map(year => {
        return (
          <section key={year}>
            <h2 className="mb-1">{year}</h2>
            <hr/>
            <div className="flex flex-wrap justify-center">
              {postsByYear[year].map(post => {
                return <Card key={post.slug} post={post} />
              })}
            </div>
          </section>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  let postsByYear = {}

  posts.map(post => {
    const year = post.date.split("-")[0]
    postsByYear[year] = [...(postsByYear[year] ?? []), post]
  })

  const years = Object.keys(postsByYear).sort().reverse()

  return {
    props: { years, postsByYear }
  }
}
