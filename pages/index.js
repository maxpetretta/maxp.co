import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Max Petretta - Software Engineer</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section>
        <h4>👋 Hey there!</h4>
        <h1>I'm Max Petretta,</h1>
        <p>A <a href="https://github.com/maxpetretta">software engineer</a> living in Milwaukee, WI.  I work for GE Healthcare, where I design & build infrastructure for our cloud-hosted applications.  This is my personal site, where I experiment with new technology, and write about the <Link href="/blog"><a>topics that interest me</a></Link>.</p>
        <p>Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, or send me <Link href="/contact"><a>an email</a></Link>.</p>
      </section>
      <section>
        <h2 className="mt-10">Recent Blog Posts</h2>
        <hr/>
        <div className="flex flex-wrap justify-center">
          {posts.slice(0, 3).map(post => {
            return <Card key={post.slug} post={post} />
          })}
        </div>
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
