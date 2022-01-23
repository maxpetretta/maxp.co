// import Title from "../components/Title"
// import Layout from "../components/Layout"
// import PostCard from "../components/PostCard"

// export default function Post({ meta, children }) {
//   return (
//     <>
//       <Layout
//         title={meta.title + " | Max Petretta"}
//         description={meta.description}
//         image={"https://maxpetretta.com" + meta.image}
//         date={meta.date}
//         type="article"
//       >
//         <article>
//           <Title meta={meta} />
//           <section className="prose md:prose-lg dark:prose-dark max-w-none">
//             {children}
//           </section>
//           {meta.related != null && (
//             <section>
//               <hr className="mt-10" />
//               <h2>Related Post</h2>
//               <div className="flex flex-wrap justify-center">
//                 {/* <PostCard post={getPostBySlug(meta.related)} /> */}
//               </div>
//             </section>
//           )}
//         </article>
//       </Layout>
//     </>
//   )
// }

// export async function getStaticProps({ params }) {
//   const tweets = getTweetsFromPost(params.post)
//   console.log(tweets)
//   return tweets
// }

// export function getPostBySlug(slug) {
//   const post = require(`../posts/${slug}.mdx`)

//   return {
//     slug: slug,
//     ...post.meta,
//   }
// }

// export function getTweetsFromPost(post) {
//   const regex = /<StaticTweet\sid="[0-9]+"\s\/>/g
//   const tweets = post.match(regex)
//   const  tweetIDs = tweets?.map((tweet) => {
//     const id = tweet.match(/[0-9]+/g)
//     return id
//   })

//   console.log(tweetIDs)

//   return {
//     tweetIDs: tweetIDs || []
//   }
// }
