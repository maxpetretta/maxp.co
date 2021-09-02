export default function Title({ meta }) {
  return (
    <>
      <h1 className="mb-3 md:mb-4">{meta.title}</h1>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <time className="faint text-lg mb-2 md:mb-0">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="flex">
          {meta.tags.map((tag) => {
            return (
              <span className="chip my-1 first:ml-0" key={tag}>
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}
