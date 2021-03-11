import Head from 'next/head'
import Link from 'next/link'

export default function Error404() {
  return (
    <>
      <Head>
        <title>Max Petretta - Software Engineer</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section>
        <h1>404: Whoops!</h1>
        <h3 className="mt-8">Looks like that page no longer exists</h3>
        <p>Or it could have never existed in the first place.  Come to think of it, maybe none of this actually exists?  This could all be a really complex computer simulation, or something... 🤔</p>
        <p>Weird.  Anyways, if you are looking for another way to pass your simulation cycles, why not <Link href="/"><a>return home</a></Link> or check out <Link href="/blog"><a>the blog</a></Link>.</p>
      </section>
    </>
  )
}
