import Link from "next/link"

export default function Banner({
  link,
  message,
  detail,
}: {
  link: string
  message: string
  detail: string
}) {
  return (
    <>
      <Link href={link}>
        <a className="mt-2 flex animate-slide-in justify-center rounded-xl p-2 opacity-0 [animation-delay:4.0s] md:mt-3 md:p-3">
          <span className="text-center text-xs xs:text-sm md:text-lg">
            {message}
          </span>
          <span className="hidden md:inline">{detail}</span>
        </a>
      </Link>
    </>
  )
}
