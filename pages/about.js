import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/images/max.jpeg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Max Petretta</title>
        <meta name="description" content="A blog by Max Petretta, software engineer" />
      </Head>
      <section>
        <h1>About Me</h1>
        <div className="flex justify-center items-center my-16">
          <div className="brand-gradient animate-spin-slow absolute w-72 h-72 md:w-96 md:h-96 z-0 rounded-full shadow-2xl"/>
          <div className="w-64 h-64 md:w-80 md:h-80">
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
        <p>Hello!</p>
        <p>My name is Max Petretta.  I'm a software engineer with ~5 years of professional work experience.  During that time, I've worked on a variety of projects in the web, mobile, and cloud fields.  Currently, I work as a software engineer at <a href="https://www.gehealthcare.com/">GE Healthcare</a>.  My focus is in the cloud space, working to modernize our applications using automation & infrastructure-as-code.</p>
        <p>Originally from Michigan, I graduated with a B.S. in computer science from the <a href="https://umdearborn.edu/">University of Michigan</a>.  In our senior design competition, my team and our Android app were fortunate enough to win the <a href="https://umdearborn.edu/news/articles/senior-design-day-takes-students-beyond-books">Most Innovative Project</a> award.  While working towards my degree, I also studied abroad at <a href="https://www.ucl.ac.uk/">University College London</a>.</p>
        <p>After graduating college, I joined GE's Digital Technology Leadership Program (DTLP), where I spent two years traveling around the country (and the globe!) working in different businesses & roles.  I currently live in Milwaukee, Wisconsin.</p>
        <p>In my spare time, I maintain a pretty diverse set of hobbies: I practice woodworking, I wire & assemble mechanical keyboards, and I'm an avid Premier League fan (<strong>#COYS</strong>).</p>
      </section>
      <section>
        <h2>About This Site</h2>
        <p>This site was built using React, Next.js, and TailwindCSS.  It is completely static 🚀, and is deployed with ▲Vercel.  If you are interested in how any of that works, you can <Link href="/blog/tech-stack"><a>read more here</a></Link>, or take a glance at the <a href="https://github.com/maxpetretta/blog">source code!</a></p>
      </section>
      <section>
        <h2>Inspiration</h2>
        <p>I'd like to give credit to a few people who inspired the design of this site:</p>
        <ul className="list-disc list-inside">
          <li><a href="https://leerob.io/">Lee Robinson</a>, who <a href="https://leerob.io/blog/mdx">wrote extensively</a> about the <a href="https://leerob.io/blog/tailwind">tech stack</a> that I ultimately decided on</li>
          <li><a href="https://www.taniarascia.com/">Tania Rascia</a>, and her excellent web-focused <a href="https://www.taniarascia.com/guides">technology guides</a></li>
          <li><a href="https://paulstamatiou.com/">Paul Stamatiou</a> & <a href="https://barrowclift.me/">Marc Barrowclift</a>, and their beautifully designed personal sites</li>
        </ul>
      </section>
    </>
  )
}
