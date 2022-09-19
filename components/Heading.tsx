import { ReactNode } from "react"

export default function Heading({
  tag,
  children,
}: {
  tag: string
  children: ReactNode
}) {
  const HTag = `${tag}` as keyof JSX.IntrinsicElements
  const anchor = getAnchor(children as string)
  const link = `#${anchor}`
  return (
    <HTag className="group flex items-center" id={anchor}>
      <a
        className="no-link absolute -translate-x-6 font-medium text-accent
      opacity-0 hover:text-accent group-hover:opacity-100 dark:text-accent-light dark:hover:text-accent-light"
        href={link}
      >
        §
      </a>
      {children}
    </HTag>
  )
}

function getAnchor(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}
