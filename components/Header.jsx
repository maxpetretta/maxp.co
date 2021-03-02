import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between py-4">
      <Link href="/">
        <a className="btn">Max Petretta</a>
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
          <input className="transform transition duration-300 h-6 w-6 m-1 rounded-full cursor-pointer appearance-none bg-white dark:bg-gray-900 checked:translate-x-full" type="checkbox" defaultChecked onClick={() => {
          document.documentElement.classList.toggle('dark')
        }}/>
        </label>
      </nav>
    </header>
  )
}
