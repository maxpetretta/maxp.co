import Head from 'next/head'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="manifest" href="/favicons/site.webmanifest"/>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#4361a2"/>
        <meta name="msapplication-TileColor" content="#c73156"/>
        <meta name="theme-color" content="#4361a2"/>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
      <Script
        src="/scripts/fade-in.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/scripts/update-selector.js"
      />
      <Script
        src="/scripts/smoothscroll.min.js"
      />
      <Script
        src="/scripts/smoothscroll-anchor.min.js"
      />
    </>
  )
}
