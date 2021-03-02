import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Contact - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software development engineer" />
      </Head>
      <section>
        <h1>Contact</h1>
        <p>Do you have a question/comment for me?  Want to share something cool and interesting?  Or maybe you just want to talk;  The easiest way to reach me is <a href="https://twitter.com/maxpetretta">via Twitter</a>.  You can also send me an email if you'd like:</p>
      </section>
      <section>
        <form action="https://formspree.io/f/xeqpbarr" method="POST">
          <input className="form" type="email" name="_replyto" tabIndex="1" placeholder="Email address"/>
          <input type="hidden" name="_subject" value="Contact Form"/>
          <textarea className="form" rows="8" type="text" tabIndex="2" placeholder="Message"/>
          <input className="btn flex transform ml-auto mr-0 px-8 outline-none cursor-pointer text-gray-100 bg-accent hover:scale-110 hover:text-white hover:bg-accent-light focus:scale-110 focus:bg-accent-light dark:bg-accent dark:hover:text-white dark:hover:bg-accent-light" type="submit" tabIndex="3" value="Send"/>
        </form>
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
