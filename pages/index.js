import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import Entry from '../components/Entry'
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
        <p>A <a href="https://github.com/maxpetretta">software engineer</a> living in Milwaukee, WI.  I work at GE Healthcare, where I design & build infrastructure for our cloud applications.  Previously, I've worked in the web & mobile spaces.  This is my blog, where I keep up with the <Link href="/blog/tech-stack"><a>latest technology trends</a></Link>, and write about the <Link href="/blog"><a>things that interest me</a></Link>.</p>
        <p>Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, connect with me on <a href="https://www.linkedin.com/in/maxpetretta/">LinkedIn</a>, or send me <Link href="/contact"><a>an email</a></Link>.</p>
      </section>
      <section>
        <h2 className="mt-10">Featured Articles</h2>
        <hr/>
        <div className="flex flex-wrap justify-center">
          {getFeaturedPosts(posts).map(post => {
            return <Card key={post.slug} post={post} />
          })}
        </div>
      </section>
      <section>
        <h2 className="mt-10">Latest Posts</h2>
        <hr/>
        <ul className="list">
          {sortPostsByDate(posts).map(post => {
            return <Entry key={post.slug} post={post} />
          })}
        </ul>
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

export function getFeaturedPosts(posts) {
  const featured = ['lorem-ipsum', 'airpods-max', 'hotdox', 'tech-stack']

  const sorted = posts.filter(post => featured.includes(post.slug))
  .sort((a, b) => {
    return featured.indexOf(a.slug) < featured.indexOf(b.slug) ? -1 : 1
  })

  return sorted
}

export function sortPostsByDate(posts) {
  const sorted = posts.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })

  return sorted
}
