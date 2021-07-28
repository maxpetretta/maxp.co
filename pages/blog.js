import Head from 'next/head'
// import Card from '../components/Card'
import Entry from '../components/Entry'
import { getPosts } from '../lib/posts'

export default function Blog({ postCount, postsByYear, years }) {
  return (
    <>
      <Head>
        <title>Blog - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section>
        <h1>Blog</h1>
        <p>A healthy mix of articles, reviews, and random thoughts.  <strong>{postCount}</strong> posts published since 2020.</p>
      </section>
      {years.map(year => {
        return (
          <section key={year}>
            <h2 className="mt-8 mb-2">{year}</h2>
            <hr/>
            <ul className="list">
              {postsByYear[year].map(post => {
                return <Entry key={post.slug} post={post} />
              })}
            </ul>
          </section>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  const postCount = posts.length
  let postsByYear = {}

  posts.map(post => {
    const year = post.date.split("-")[0]
    postsByYear[year] = [...(postsByYear[year] ?? []), post]
  })

  const years = Object.keys(postsByYear).sort().reverse()

  return {
    props: { postCount, postsByYear, years }
  }
}
