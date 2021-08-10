import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4361a2"/>
        <meta name="msapplication-TileColor" content="#c73156"/>
        <meta name="theme-color" content="#4361a2"/>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <Script
        id="animate"
        src="/scripts/animate.js"
      />
      <Script
        id="smoothscroll"
        src="/scripts/smoothscroll.min.js"
      />
      <Script
        id="smoothscroll-anchor"
        src="/scripts/smoothscroll-anchor.min.js"
      />
    </>
  )
}
