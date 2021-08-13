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
      <section className="show-on-scroll flex flex-col justify-center min-h-3/4 mb-24" >
        <h4 className="fade-delay-lg heading" id="about">👋 Hey there!</h4>
        <h1 className="fade-delay-lg">I'm Max Petretta,</h1>
        <p className="fade-delay-lg">A <a href="https://github.com/maxpetretta">software engineer</a> living in Milwaukee, WI.  I work at GE Healthcare, where I design & build infrastructure for our cloud applications.  Previously, I've worked in the web & mobile spaces.  This is my blog, where I keep up with the <Link href="/blog/tech-stack"><a>latest technology trends</a></Link>, and write about the <Link href="/blog"><a>things that interest me</a></Link>.</p>
        <p className="fade-delay-lg">Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, connect with me on <a href="https://www.linkedin.com/in/maxpetretta/">LinkedIn</a>, or send me <Link href="/contact"><a>an email</a></Link>.</p>
        <span className="fade-delay-lg flex justify-end">
          <a className="button flex items-center mt-4" href="https://github.com/maxpetretta/resume">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline mr-2" width="36" height="36" viewBox="4 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <line x1="9" y1="9" x2="10" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="15" y2="17" />
            </svg>
            Resume
          </a>
        </span>
        <span className="fade-delay-lg mx-auto mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
          </svg>
        </span>
      </section>
      <section className="show-on-scroll mb-24">
        <h2 className="heading" id="skills">Skills</h2>
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
          {["AWS", "Azure", "Docker", "Linux", "React", "Tailwind", "Next.js", "Node.js", "DevOps", "Jenkins", "Git"].map(tech => {
            return <Badge key={tech} logo={tech} />
          })}
        </ul>
      </section>
      <section className="show-on-scroll mb-24">
        <h2 className="heading" id="articles">Featured Articles</h2>
        <hr/>
        <div className="flex flex-wrap justify-center">
          {getFeaturedPosts(posts).map(post => {
            return <PostCard key={post.slug} post={post} />
          })}
        </div>
      </section>
      <section className="show-on-scroll mb-24">
        <h2 className="heading" id="posts">Latest Posts</h2>
        <hr/>
        <ul className="list">
          {sortPostsByDate(posts).map(post => {
            return <Entry key={post.slug} post={post} />
          })}
        </ul>
      </section>
      <section className="show-on-scroll">
        <h2 className="heading" id="contact">Contact</h2>
        <form action="https://formspree.io/f/xeqpbarr" method="POST">
          <input className="form" type="email" name="_replyto" tabIndex="1" placeholder="Email address" required />
          <input type="hidden" name="_subject" value="Contact Form"/>
          <textarea className="form" rows="8" type="text" tabIndex="2" placeholder="Message" required />
          <input className="button block mt-4 ml-auto mr-0 outline-none" type="submit" tabIndex="3" value="Send"/>
        </form>
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
