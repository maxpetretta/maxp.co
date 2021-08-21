import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <>
      <div className="brand-gradient fixed bottom-0 w-full h-full -z-10"/>
      <div className="flex min-h-screen p-2 md:p-6">
        <div className="flex-1 w-full p-3 rounded-2xl text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <Header />
            <MDXProvider components={components}>
              <main className="max-w-4xl mx-auto md:text-xl">
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
