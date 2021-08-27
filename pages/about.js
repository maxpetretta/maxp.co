import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import profilePic from '../public/images/max.jpeg'

export default function About() {
  return (
    <>
      <Layout
        title="About | Max Petretta"
      >
        <section>
          <h1>About</h1>
          <div className="flex justify-center items-center my-16">
            <div className="brand-gradient animate-spin-slow absolute w-56 h-56 md:w-80 md:h-80 z-0 rounded-full shadow-2xl overflow-hidden"/>
            <div className="w-48 h-48 md:w-72 md:h-72">
              <Image
                width={256}
                height={256}
                layout="responsive"
                src={profilePic}
                alt="A picture of the author, Max Petretta"
                placeholder="blur"
                className="z-10 rounded-full"
                priority
              />
            </div>
          </div>
          <h2>Hello!</h2>
          <p>My name is Max Petretta.  I'm a software engineer with over 4 years of professional work experience.  You've found my corner of the internet, where I experiment with <Link href="/blog/tech-stack"><a>new tech</a></Link> and sometimes <Link href="/blog"><a>write too</a></Link>.</p>
          <p>Born in '94, I practically grew up as the world came online.  Plenty of fond memories come to mind: AIM conversations, forum posts, and long nights spent playing <a href="https://oldschool.runescape.com/">RuneScape</a> with friends.  My love of technology really started in 2008, when I bought my first iPod Touch, jailbroke it 😈, and started downloading any app I could find.</p>
          <p>Originally from Michigan, I graduated with a B.S. in Computer Science from the <a href="https://umdearborn.edu/">University of Michigan</a> after a brief foray in mechanical engineering.  In my senior design competition, my team was fortunate enough to win <a href="https://umdearborn.edu/news/articles/senior-design-day-takes-students-beyond-books">"Most Innovative Project"</a> for our Android application.</p>
          <p>After graduating college, I joined General Electric's <a href="https://jobs.gecareers.com/global/en/leadership-dtlp-page">Digital Technology Leadership Program</a>, where I spent two years traveling around the country (and the globe!) working in different businesses & roles.  From front-end web development to launching a new hardware product, I grew as both an engineer and a leader.</p>
          <p>I work for <a href="https://www.gehealthcare.com/">GE Healthcare</a> now, and live in Milwaukee, Wisconsin.  My role is in the cloud space, where I work to modernize our applications and processes by delivering reliable services, advanced automation, and infrastructure-as-code.</p>
          <p>In my spare time, I maintain a pretty diverse set of hobbies: I play golf, practice woodworking (poorly 😅), wire & assemble mechanical keyboards, and I'm an avid Premier League fan <strong>#COYS</strong>.</p>

        </section>
        <section>
          <h2>About This Site</h2>
          <p>This site was built using Next.js, TailwindCSS, and MDX.  It is completely static 🚀, and is deployed with ▲Vercel.  If you are interested in how any of that works, you can <Link href="/blog/tech-stack"><a>read more here</a></Link>, or take a glance at the <a href="https://github.com/maxpetretta/blog">source code!</a></p>
        </section>
        <section>
          <h2>Inspiration</h2>
          <p>I'd like to give credit to a few people who inspired the design of this site:</p>
          <ul className="list-disc ml-4">
            <li><a href="https://leerob.io/">Lee Robinson</a>, who <a href="https://leerob.io/blog/mdx">wrote extensively</a> about the <a href="https://leerob.io/blog/tailwind">tech stack</a> that I ultimately decided on</li>
            <li><a href="https://www.taniarascia.com/">Tania Rascia</a>, and her excellent web-focused <a href="https://www.taniarascia.com/guides">technology guides</a></li>
            <li><a href="https://paulstamatiou.com/">Paul Stamatiou</a>, <a href="https://brittanychiang.com/">Brittany Chiang</a>, & <a href="https://barrowclift.me/">Marc Barrowclift</a>, and their beautifully designed personal sites</li>
          </ul>
          <p>And a special thanks to <a href="https://github.com/tabler/tabler-icons">Tabler icons</a> and <a href="https://www.flaticon.com/authors/freepik">Freepik graphics</a>.</p>
        </section>
      </Layout>
    </>
  )
}
