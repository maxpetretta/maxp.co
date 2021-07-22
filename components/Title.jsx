export default function Title({ meta }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <div className="flex justify-between mb-8">
        <time className="text-lg not-italic">{new Date(meta.date).toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'})}</time>
        <div>
          {meta.tags.map(tag => {
            return <span className="text-sm font-bold rounded-full ml-3 p-1.5 text-gray-100 bg-accent" key={tag}>{tag}</span>
          })}
        </div>
      </div>
    </>
  )
}
