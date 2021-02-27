import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 text-xl font-bold">
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
      </nav>
      {/* <button>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
          <line x1="9.7" y1="17" x2="14.3" y2="17" />
        </svg>
      </button> */}
    </header>
  )
}
