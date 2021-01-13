import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MDXProvider components={components}>
        <main>
          {children}
        </main>
      </MDXProvider>
      <Footer />
    </>
  )
}
