import Link from 'next/link'
import Toggle from './Toggle'
import TabBar from './TabBar'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  var navBar = {}

  if (router.pathname == "/") {
    navBar = (<TabBar sections={["About", "Skills", "Articles", "Posts"]} />)
  } else {
    navBar = (
      <>
        <Link href="/about">
          <a className="btn rounded-lg">About</a>
        </Link>
        <Link href="/blog">
          <a className="btn rounded-lg">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="btn rounded-lg">Contact</a>
        </Link>
      </>
    )
  }
  
  return (
    <header className="transition duration-300 flex justify-between sticky top-0 z-20 py-2 bg-gray-100 dark:bg-gray-900">
      <Link href="/">
        <a className="no-link flex items-center">
          <img
            width={48}
            height={48}
            src="/favicons/android-chrome-192x192.png"
            alt="Max's personal logo"
            className="hidden xs:inline"
          />
          <span className="btn hidden md:inline rounded-lg">Max Petretta</span>
        </a>
      </Link>
      <nav className="flex flex-grow max-w-lg items-center justify-end">
        {navBar}
        <Toggle id="toggleTheme" alt="Toggle dark mode" onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }} />
      </nav>  
    </header>
  )
}
