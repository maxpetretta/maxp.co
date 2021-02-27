import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Max Petretta - Software Development Engineer</title>
        <meta name="description" content="A blog by Max Petretta, software development engineer" />
      </Head>
      <section>
        <h2 className="text-lg text-gray-600 my-3">👋 Well hello!</h2>
        <h1 className="text-5xl font-extrabold my-6">I'm Max Petretta</h1>
        <p className="my-6">I am a <a href="https://github.com/maxpetretta">software engineer</a> living in Milwaukee, WI.  I work for GE Healthcare, where I build infrastructure for our cloud-enabled applications.  You'll find my <Link href="/blog"><a>blog here</a></Link>, where I plan to write about development, technology, and more!</p>
        <p className="my-6">Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, or send me <a href="mailto:max.petretta@gmail.com">an email</a>.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-6">Recent Blog Posts</h2>
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
