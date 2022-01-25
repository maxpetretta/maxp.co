export default function Heading({ tag, children }) {
  const HTag = `${tag}`
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <HTag className="group flex items-center" id={anchor}>
      <a
        className="no-link absolute text-accent hover:text-accent dark:text-accent-light
      dark:hover:text-accent-light font-medium opacity-0 group-hover:opacity-100 -translate-x-6"
        href={link}
      >
        §
      </a>
      {children}
    </HTag>
  )
}

function getAnchor(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-")
}
