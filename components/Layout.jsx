import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import Heading from "./Heading"
import { useRouter } from "next/router"
import { MDXProvider } from "@mdx-js/react"
import { Tweet } from "mdx-embed"

const H2 = (props) => <Heading tag="h2" {...props} />
const H3 = (props) => <Heading tag="h3" {...props} />
const H4 = (props) => <Heading tag="h4" {...props} />
const H5 = (props) => <Heading tag="h5" {...props} />

const components = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  Tweet,
  pre: (props) => (
    <pre style={{ background: props.style[0].split(":")[1] }}>
      {props.children}
    </pre>
  ),
}

export default function Layout(props) {
  const { children, ...pageMeta } = props
  const router = useRouter()
  const meta = {
    title: "Max Petretta | Software Engineer",
    description:
      "I design and build intuitive applications, reliable services, and systems that scale.",
    image: "https://maxpetretta.com/images/card.png",
    type: "website",
    ...pageMeta,
  }

  return (
    <>
      <Head>
        {/* Dynamic SEO, courtesy of Lee Robinson [leerob.io] */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link
          rel="canonical"
          href={`https://maxpetretta.com${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`https://maxpetretta.com${router.asPath}`}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Max Petretta" />
        <meta name="twitter:site" content="@maxpetretta" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="brand-gradient fixed top-0 -z-10 h-full w-full" />
      <div className="flex min-h-screen p-2 md:p-6">
        <div className="w-full flex-1 rounded-2xl bg-white p-3 text-gray-900 dark:bg-gray-900 dark:text-gray-300">
          <div className="mx-auto max-w-4xl">
            <Header />
            <MDXProvider components={components}>
              <main className="mx-auto max-w-3xl text-sm xs:text-base md:text-lg">
                {children}
              </main>
            </MDXProvider>
            <Footer />
          </div>
        </div>
      </div>
      <div className="brand-gradient fixed bottom-0 -z-10 h-full w-full" />
    </>
  )
}
