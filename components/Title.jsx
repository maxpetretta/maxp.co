export default function Title({ meta }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <div className="flex justify-between mb-8">
        <time className="faint text-lg">{new Date(meta.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</time>
        <div>
          {meta.tags.map(tag => {
            return <span className="chip" key={tag}>{tag}</span>
          })}
        </div>
      </div>
    </>
  )
}
