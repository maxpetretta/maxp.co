import Header from './Header'
import Footer from './Footer'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: props => <pre style={{background: props.style[0].split(":")[1]}}>{props.children}</pre>
}

export default function Layout({ children }) {
  return (
    <>
    <div className="brand-gradient fixed top-0 w-full h-full -z-10"/>
    <div className="p-2 md:p-6">
      <div className="transition duration-300 w-full p-2 rounded-xl 
      text-gray-900 bg-gray-100 dark:text-gray-300 dark:bg-gray-900">
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
    <div className="brand-gradient fixed bottom-0 w-full h-full -z-10"/>
    </>
  )
}
