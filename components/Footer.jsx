import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-8">
      <address className="flex justify-center">
        <a className="btn rounded-full hover:text-gray-100 hover:bg-black dark:hover:text-black dark:hover:bg-gray-100" href="https://github.com/maxpetretta">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="githubTitle githubDesc" role="img">
            <title id="githubTitle">GitHub link</title>
            <desc id="githubDesc">A link to Max's GitHub profile</desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        <a className="btn rounded-full hover:text-gray-100 hover:bg-blue-400 dark:hover:text-white dark:hover:bg-blue-400" href="https://twitter.com/maxpetretta">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="twitterTitle twitterDesc" role="img">
            <title id="twitterTitle">Twitter link</title>
            <desc id="twitterDesc">A link to Max's Twitter profile</desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
        </a>
        <a className="btn rounded-full hover:text-gray-100 hover:bg-blue-800 dark:hover:text-white dark:hover:bg-blue-800" href="https://www.linkedin.com/in/maxpetretta/">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="linkedinTitle linkedinDesc" role="img">
            <title id="linkedinTitle">LinkedIn link</title>
            <desc id="linkedinDesc">A link to Max's LinkedIn profile</desc>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <Link href="/contact">
          <a className="btn rounded-full hover:text-gray-100 hover:bg-accent dark:hover:text-white dark:hover:bg-accent">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="emailTitle emailDesc" role="img">
              <title id="emailTitle">Email link</title>
              <desc id="emailDesc">A link to an email contact page</desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>
        </Link>
      </address>
      <nav className="flex justify-center gap-6 mt-3">
        <Link href="/home">
          <a className="no-link faint">/home</a>
        </Link>
        <Link href="/about">
          <a className="no-link faint">/about</a>
        </Link>
        <Link href="/blog">
          <a className="no-link faint">/blog</a>
        </Link>
        <Link href="/contact">
          <a className="no-link faint">/contact</a>
        </Link>
      </nav>
      <p className="faint my-3 text-sm text-center text-gray-400">&copy; 2020 - {new Date().getFullYear()} Max Petretta</p>
    </footer>
  )
}
