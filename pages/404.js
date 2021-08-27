import Link from 'next/link'
import Layout from '../components/Layout'

export default function Error404() {
  return (
    <>
      <Layout
        title="Error 404 | Max Petretta"
        description="That page cannot be found!"
      >
        <section>
          <h1>404: Whoops!</h1>
          <h2 className="mt-8">Looks like that page no longer exists</h2>
          <p>Or it could have never existed in the first place.  Come to think of it, maybe none of this actually exists?  This could all be a really complex computer simulation, or something... 🤔</p>
          <p>Weird.  Anyways, if you are looking for another way to pass your simulation cycles, why not <Link href="/"><a>return home</a></Link> or check out <Link href="/blog"><a>the blog</a></Link>.</p>
        </section>
      </Layout>
    </>
  )
}
