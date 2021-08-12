import Head from 'next/head'
import Link from 'next/link'
import Badge from '../components/Badge'
import Entry from '../components/Entry'
import PostCard from '../components/PostCard'
import SkillCard from '../components/SkillCard'
import { getPosts } from '../lib/posts'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Max Petretta - Software Engineer</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section className="show-on-scroll flex flex-col justify-center min-h-75" id="about">
        <h4 className="show-on-scroll fade-delay">👋 Hey there!</h4>
        <h1 className="show-on-scroll fade-delay">I'm Max Petretta,</h1>
        <p className="show-on-scroll fade-delay">A <a href="https://github.com/maxpetretta">software engineer</a> living in Milwaukee, WI.  I work at GE Healthcare, where I design & build infrastructure for our cloud applications.  Previously, I've worked in the web & mobile spaces.  This is my blog, where I keep up with the <Link href="/blog/tech-stack"><a>latest technology trends</a></Link>, and write about the <Link href="/blog"><a>things that interest me</a></Link>.</p>
        <p className="show-on-scroll fade-delay">Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, connect with me on <a href="https://www.linkedin.com/in/maxpetretta/">LinkedIn</a>, or send me <Link href="/contact"><a>an email</a></Link>.</p>
        <a className="show-on-scroll fade-delay btn" href="https://github.com/maxpetretta/resume">See My Resume</a>
        <span className="show-on-scroll fade-delay absolute bottom-0 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
          </svg>
        </span>
      </section>
      <section className="show-on-scroll" id="skills">
        <h2 className="mt-24">Skills</h2>
        <hr/>
        <div className="px-4 md:px-0">
          <SkillCard />
        </div>
        <p>Languages that I know:</p>
        <ul className="show-on-scroll grid grid-cols-3 md:grid-cols-4 md:gap-2">
          {["HTML", "CSS", "JavaScript", "SQL", "Python", "Swift", "Java", "Terraform"].map(lang => {
            return <Badge key={lang} logo={lang} />
          })}
        </ul>
        <p>Technologies I am proficient in:</p>
        <ul className="show-on-scroll grid grid-cols-3 md:grid-cols-4 md:gap-2">
          {["AWS", "Azure", "Docker", "Linux", "React", "Tailwind CSS", "Next.js", "Node.js", "Azure DevOps", "Jenkins", "Git"].map(tech => {
            return <Badge key={tech} logo={tech} />
          })}
        </ul>
      </section>
      <section className="show-on-scroll" id="articles">
        <h2 className="mt-24">Featured Articles</h2>
        <hr/>
        <div className="flex flex-wrap justify-center">
          {getFeaturedPosts(posts).map(post => {
            return <PostCard key={post.slug} post={post} />
          })}
        </div>
      </section>
      <section className="show-on-scroll" id="posts">
        <h2 className="mt-24">Latest Posts</h2>
        <hr/>
        <ul className="list">
          {sortPostsByDate(posts).map(post => {
            return <Entry key={post.slug} post={post} />
          })}
        </ul>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  return {
    props: { posts }
  }
}

export function getFeaturedPosts(posts) {
  const featured = ['lorem-ipsum', 'airpods-max', 'hotdox', 'tech-stack']

  const sorted = posts.filter(post => featured.includes(post.slug))
  .sort((a, b) => {
    return featured.indexOf(a.slug) < featured.indexOf(b.slug) ? -1 : 1
  })

  return sorted
}

export function sortPostsByDate(posts) {
  const sorted = posts.sort((a, b) => {
    return a.date > b.date ? -1 : 1
  })

  return sorted
}
