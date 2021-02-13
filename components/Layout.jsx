import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <Header />
      <MDXProvider components={components}>
        <main className="max-w-3xl mx-auto">
          {children}
        </main>
      </MDXProvider>
      <Footer />
    </div>
  )
}
