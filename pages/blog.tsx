import type { GetStaticProps } from "next"
import Entry from "../components/Entry"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { getAllPosts } from "../lib/posts"
import { PostMeta } from "../lib/types"

export default function Blog({
  posts,
  postCount,
  postsByYear,
  years,
}: {
  posts: PostMeta[]
  postCount: number
  postsByYear: any
  years: string[]
}) {
  return (
    <>
      <Layout title="Blog | Max Petretta">
        <section>
          <h1 className="mb-0">Blog</h1>
          <p>
            A healthy mix of articles, reviews, and random thoughts.{" "}
            <strong>{postCount}</strong> posts published since 2022.
          </p>
        </section>
        <section>
          <h2 className="mb-0">Featured Articles</h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <div className="flex flex-wrap justify-center">
            {getFeaturedPosts(posts).map((post) => {
              return <PostCard key={post.slug} post={post} />
            })}
          </div>
        </section>
        {years.map((year: string) => {
          return (
            <section key={year}>
              <h2 className="mb-0">{year}</h2>
              <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
              <ul className="list">
                {postsByYear[year].map((post: PostMeta) => {
                  return <Entry key={post.slug} post={post} />
                })}
              </ul>
            </section>
          )
        })}
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().reverse()
  const postCount = posts.length
  let postsByYear: any = {}

  posts
    .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
    .reverse()
  posts.map((post) => {
    const year = post.date.split("-")[0]
    postsByYear[year] = [...(postsByYear[year] ?? []), post]
  })

  const years = Object.keys(postsByYear).sort().reverse()

  return {
    props: { posts, postCount, postsByYear, years },
  }
}

export function getFeaturedPosts(posts: PostMeta[]): PostMeta[] {
  const featured = ["twitt3r", "tech-stack"]

  const sorted = posts
    .filter((post) => featured.includes(post.slug))
    .sort((a, b) => {
      return featured.indexOf(a.slug) < featured.indexOf(b.slug) ? -1 : 1
    })

  return sorted
}
