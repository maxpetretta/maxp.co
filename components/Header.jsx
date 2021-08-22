import Link from 'next/link'
import Toggle from './Toggle'
import TabBar from './TabBar'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  var navigation = {}

  if (router.pathname == "/") {
    navigation = (<TabBar sections={["About", "Skills", "Work", "Contact"]} />)
  } else {
    navigation = (
      <>
        <Link href="/about">
          <a className="link rounded-lg">About</a>
        </Link>
        <Link href="/blog">
          <a className="link rounded-lg">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="link rounded-lg">Contact</a>
        </Link>
      </>
    )
  }
  
  return (
    <header className="flex justify-between sticky top-0 z-20 py-2 bg-gray-100 dark:bg-gray-900">
      <Link href="/">
        <a className="no-link flex items-center">
          <img
            width={48}
            height={48}
            src="/favicons/android-chrome-192x192.png"
            alt="Max's personal logo"
            className="hidden xs:inline"
          />
          <span className="link hidden md:inline rounded-lg">Max Petretta</span>
        </a>
      </Link>
      <nav className="flex flex-grow max-w-lg items-center justify-end">
        {navigation}
        <Toggle id="toggleTheme" alt="Toggle dark mode" onClick={() => { 
          document.body.classList.add("transition-stop");
          setTheme(theme === 'dark' ? 'light' : 'dark');
          setTimeout(() => {document.body.classList.remove("transition-stop");}, 1000);
        }} />
      </nav>  
    </header>
  )
}
