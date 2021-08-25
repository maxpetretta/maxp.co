import Link from 'next/link'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import Badge from '../components/Badge'
import SkillCard from '../components/SkillCard'
import { getJobs } from '../lib/jobs'

export default function Home({ jobs }) {
  return (
    <>
      <Layout>
        <section className="animate-fade-in flex flex-col justify-center min-h-screen md:min-h-3/4">
          <h4 className="animate-fade-in fade-lg heading" id="about">👋 Hey there!</h4>
          <h1 className="animate-fade-in fade-lg text-3xl xs:text-4xl md:text-6xl my-0">I'm Max Petretta,</h1>
          <p className="animate-fade-in fade-lg">A <a href="https://github.com/maxpetretta">software engineer</a> with a passion for building intuitive applications, reliable services, and systems that scale.  Currently, I'm building the future of cloud at <a href="https://www.gehealthcare.com/">GE Healthcare</a>.</p>
          <ul className="animate-fade-in fade-lg">
            <li>📍 Based out of Milwaukee, WI</li>
            <li>🎓 Proud University of Michigan alumni</li>
            <li>⚽️ Supports Tottenham Hotspur FC</li>
          </ul>
          {/* <p className="animate-fade-in fade-lg">Want to get in touch?  You can find me on <a href="https://twitter.com/maxpetretta">Twitter</a>, connect on <a href="https://www.linkedin.com/in/maxpetretta/">LinkedIn</a>, or send me <Link href="/contact"><a>an email</a></Link>.</p> */}
          <span className="animate-fade-in fade-lg flex justify-end mt-6">
            <a className="button flex items-center" href="https://github.com/maxpetretta/resume">
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
          <span className="animate-fade-in fade-lg mx-auto mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
            </svg>
          </span>
        </section>
        <section className="fade mb-28">
          <h2 className="heading my-0" id="skills">Skill Set</h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <div className="px-4 md:px-0">
            <SkillCard />
          </div>
          <p className="mt-14">Languages that I know:</p>
          <ul className="fade grid grid-cols-3 md:grid-cols-4 md:gap-2">
            {["HTML", "CSS", "JavaScript", "SQL", "Python", "Swift", "Java", "Terraform"].map(skill => {
              return <li className="fade fade-sm" key={skill}><Badge logo={skill} /></li>
            })}
          </ul>
          <p className="mt-14">Technologies I have used:</p>
          <ul className="fade grid grid-cols-3 md:grid-cols-4 md:gap-2">
            {["AWS", "Azure", "DevOps", "Docker", "React", "Next.js", "Node.js", "Tailwind", "Linux", "Git"].map(skill => {
              return <li className="fade fade-sm" key={skill}><Badge logo={skill} /></li>
            })}
          </ul>
        </section>
        <section className="fade mb-28">
          <h2 className="heading my-0" id="work">Work Experience</h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <ul className="list">
            {jobs.map(job => {
              return <Accordion key={job.title} job={job} />
            })}
          </ul>
        </section>
        <section className="fade flex flex-col justify-center min-h-1/3 text-center">
          <h2 className="heading my-0 text-3xl md:text-4xl" id="contact">Keep In Touch</h2>
          <p>I'm always open to hearing about new opportunities.  Let's connect!</p>
          <span className="animate-fade-in fade-lg flex justify-center">
            <a className="button flex items-center" href="mailto:hello@maxpetretta.com">hello@maxpetretta.com</a>
          </span>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const jobs = getJobs()

  return {
    props: { jobs }
  }
}
