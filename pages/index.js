import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Max Petretta's Website</title>
        <meta name="description" content="Personal website of Max Petretta" />
      </Head>
      <section>
        <h1>Hi, I'm Max Petretta 👋</h1>
        <p>I am a software engineer working at GE Healthcare.  This is my personal site, home to my blog</p>
      </section>
      <section>
        <h2>Recent Blog Posts</h2>
        {posts.slice(0, 3).map(post => {
          return <Card key={post.slug} post={post} />
        })}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  return {
    props: { posts }
  }
}
