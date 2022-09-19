import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/router"
import TabBar from "./TabBar"
import Toggle from "./Toggle"

export default function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  var navigation = {}

  if (router.pathname == "/") {
    navigation = <TabBar sections={["About", "Skills", "Work", "Contact"]} />
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
    <header className="sticky top-0 z-20 flex justify-between bg-white py-2 dark:bg-gray-900">
      <Link href="/">
        <a
          className="no-link hidden xs:inline"
          aria-label="A link to the homepage"
        >
          {
            // eslint-disable-next-line
          }
          <img
            width={48}
            height={48}
            src="/favicons/android-chrome-192x192.png"
            alt="Max's personal logo"
            className="hidden xs:inline"
          />
          <span className="link hidden rounded-lg align-middle md:inline">
            Max Petretta
          </span>
        </a>
      </Link>
      <nav className="flex max-w-lg flex-grow items-center justify-end">
        <>
          {navigation}
          <Toggle
            id="toggleTheme"
            alt="Toggle dark mode"
            onClick={() => {
              document.body.classList.add("transition-stop")
              setTheme(theme === "dark" ? "light" : "dark")
              setTimeout(() => {
                document.body.classList.remove("transition-stop")
              }, 1000)
            }}
          />
        </>
      </nav>
    </header>
  )
}
