import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <div className="brand-gradient flex justify-center min-h-screen p-4 md:p-8">
      <div className="transition duration-300 flex-1 w-full rounded-xl p-2 text-gray-900 bg-gray-100 dark:text-gray-300 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
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
