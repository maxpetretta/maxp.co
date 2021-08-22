export default function Title({ meta }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <div className="flex justify-between mb-8">
        <time className="faint text-lg">{new Date(meta.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</time>
        <div className="flex flex-wrap justify-end">
          {meta.tags.map(tag => {
            return <span className="chip my-1">{tag}</span>
          })}
        </div>
      </div>
    </>
  )
}
