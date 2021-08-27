import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout(props) {
  const { children, ...pageMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Max Petretta | Software Engineer',
    description: 'I design and build intuitive applications, reliable services, and systems that scale.',
    image: 'https://maxpetretta.com/images/card.png',
    type: 'website',
    ...pageMeta
  };
  
  return (
    <>
      <Head>
        {/* Dynamic SEO, courtesy of Lee Robinson [leerob.io] */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://maxpetretta.com${router.asPath}`} />
        <meta property="og:url" content={`https://maxpetretta.com${router.asPath}`} />
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
      <div className="brand-gradient fixed bottom-0 w-full h-full -z-10"/>
      <div className="flex min-h-screen p-2 md:p-6">
        <div className="flex-1 w-full p-3 rounded-2xl text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <Header />
            <MDXProvider components={components}>
              <main className="max-w-4xl mx-auto text-sm xs:text-base md:text-xl">
                {children}
              </main>
            </MDXProvider>
            <Footer />
          </div>
        </div>
      </div>
      <div className="brand-gradient fixed bottom-0 w-full h-full -z-10"/>
    </>
  )
}
