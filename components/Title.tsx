import { PostMeta } from "../lib/types"

export default function Title({ meta }: { meta: PostMeta }) {
  return (
    <>
      <h1 className="mb-3 md:mb-4">{meta.title}</h1>
      <div className="mb-8 flex flex-col justify-between md:flex-row md:items-center">
        <time className="faint mb-2 text-lg md:mb-0">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="flex">
          {meta.tags.map((tag: string) => {
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
