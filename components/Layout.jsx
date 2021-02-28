import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-primary-dark to-primary-light p-8">
      <div className="flex-1 bg-gray-100 rounded-xl">
        <div className="max-w-5xl mx-auto w-full">
          <Header />
          <MDXProvider components={components}>
            <main className="max-w-3xl mx-auto text-lg">
              {children}
            </main>
          </MDXProvider>
          <Footer />
        </div>
      </div>
    </div>
  )
}
