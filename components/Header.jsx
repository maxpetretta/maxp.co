import Link from 'next/link'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  
  return (
    <header className="flex justify-between sticky top-0 transition duration-300 z-20 py-4 
    bg-gray-100 dark:bg-gray-900">
      <Link href="/">
        <a className="flex items-center bg-transparent hover:bg-transparent 
        dark:bg-transparent dark:hover:bg-transparent">
          <img className="w-12 h-12" src="/android-chrome-192x192.png"/>
          <span className="btn hidden md:inline">Max Petretta</span>
        </a>
      </Link>
      <nav className="flex items-center">
        <Link href="/about">
          <a className="btn">About</a>
        </Link>
        <Link href="/blog">
          <a className="btn">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="btn">Contact</a>
        </Link>
        <label className="inline-flex align-middle w-14 h-8 ml-4 rounded-full cursor-pointer bg-gray-400">
          <input className="transform transition duration-300 w-6 h-6 m-1 rounded-full cursor-pointer appearance-none
          bg-white dark:bg-gray-900 checked:translate-x-full" id="toggleTheme" type="checkbox" defaultChecked onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}/>
        </label>
      </nav>
    </header>
  )
}
