import Head from 'next/head'

export default function Post({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title} - Max Petretta</title>
        <meta name="description" content={meta.description} />
      </Head>
      <article>
        {children}
      </article>
    </>
  )
}
