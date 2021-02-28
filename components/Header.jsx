import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/">
        <a className="btn">Max Petretta</a>
      </Link>
      <nav>
        <Link href="/about">
          <a className="btn">About</a>
        </Link>
        <Link href="/blog">
          <a className="btn">Blog</a>
        </Link>
        <Link href="/contact">
          <a className="btn">Contact</a>
        </Link>
        <button className="btn" onClick={() => {
          document.documentElement.classList.toggle('dark')
        }}>
          Dark Mode
        </button>
      </nav>
    </header>
  )
}
