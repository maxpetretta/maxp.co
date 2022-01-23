import Image from "next/image"
import Title from "../components/Title"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"
import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { getAllPosts, getPostBySlug } from "../lib/posts"

export default function Post({ code, meta }) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <Layout
        title={meta.title + " | Max Petretta"}
        description={meta.description}
        image={"https://maxpetretta.com" + meta.image}
        date={meta.date}
        type="article"
      >
        <article>
          <Title meta={meta} />
          <section className="prose md:prose-lg dark:prose-dark max-w-none">
            <Component components={{ Image }} />
          </section>
          {meta.related != null && (
            <section>
              <hr className="mt-10" />
              <h2>Related Post</h2>
              <div className="flex flex-wrap justify-center">
                <PostCard post={meta.related} />
              </div>
            </section>
          )}
        </article>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // const tweets = getTweetsFromPost(params.post)
  // console.log(tweets)
  // return tweets

  const post = await getPostBySlug(params.slug)
  // console.log(post)

  return {
    props: {
      ...post,
    },
  }
}

export function getTweetsFromPost(post) {
  const regex = /<StaticTweet\sid="[0-9]+"\s\/>/g
  const tweets = post.match(regex)
  const tweetIDs = tweets?.map((tweet) => {
    const id = tweet.match(/[0-9]+/g)
    return id
  })

  // console.log(tweetIDs)

  return {
    tweetIDs: tweetIDs || [],
  }
}
