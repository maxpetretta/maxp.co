import type { GetStaticProps } from "next"
import Link from "next/link"
import Accordion from "../components/Accordion"
import Badge from "../components/Badge"
import Layout from "../components/Layout"
import SkillCard from "../components/SkillCard"
import { getJobs } from "../lib/jobs"

export default function Home({ jobs }) {
  return (
    <>
      <Layout>
        <section className="flex min-h-screen animate-fade-in flex-col justify-center md:min-h-3/4">
          <h4 className="fade-lg animate-fade-in">👋 Hey there!</h4>
          <h1 className="fade-lg my-0 animate-fade-in text-3xl xs:text-4xl md:text-6xl">
            I'm Max Petretta,
          </h1>
          <p className="fade-lg animate-fade-in">
            A <a href="https://github.com/maxpetretta">software engineer</a>{" "}
            with a passion for building intuitive applications, reliable
            services, and systems that scale.{"  "}Currently, I'm building the
            future of cloud infrastructure at{" "}
            <a href="https://www.gehealthcare.com/">GE Healthcare</a>.
          </p>
          <ul className="fade-lg animate-fade-in">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 md:mr-3 md:h-10 md:w-10"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span className="align-middle">Based out of Detroit, MI</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 md:mr-3 md:h-10 md:w-10"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
              </svg>
              <span className="align-middle">
                Proud University of Michigan alumni
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 md:mr-3 md:h-10 md:w-10"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <line x1="12" y1="12" x2="12" y2="12.01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
              <span className="align-middle">
                Over 4 years of work experience
              </span>
            </li>
          </ul>
          <span className="fade-lg mt-6 flex animate-fade-in justify-end">
            <a
              className="button flex items-center"
              href="https://raw.githubusercontent.com/maxpetretta/resume/master/Maximilian%20Petretta%20Resume.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-7 w-7 md:mr-3 md:h-10 md:w-10"
                viewBox="4 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <line x1="9" y1="9" x2="10" y2="9" />
                <line x1="9" y1="13" x2="15" y2="13" />
                <line x1="9" y1="17" x2="15" y2="17" />
              </svg>
              Resume
            </a>
          </span>
          <span className="fade-lg mx-auto mt-10 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 animate-bounce"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
          </span>
        </section>
        <section className="fade mb-28">
          <h2 className="heading my-0" id="about">
            About Me
          </h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <p>
            I've always had a love of technology, and have been more-or-less in
            front of a keyboard since{" "}
            <a href="https://98.js.org/">Windows 98</a> and{" "}
            <a href="https://www.dialupsound.com/">AOL</a> were the hot new
            things.{"  "}I discovered programming much later, while looking for
            fun electives to distract from my college engineering courses.
          </p>
          <p>
            One major change later, and the rest is history.{"  "}I graduated
            with a B.S. in Computer Science from the University of
            Michigan-Dearborn.{"  "}Afterwards, I joined GE's{" "}
            <a href="https://jobs.gecareers.com/global/en/leadership-dtlp-page">
              Digital Technology Leadership Program
            </a>
            , and spent two years honing my technical and leadership abilities.
          </p>
          <p>
            If I'm not coding, you can probably find me: golfing (poorly 😅),
            woodworking, building mechanical keyboards, or watching Premier
            League <strong>#COYS</strong>
          </p>
          <span className="flex justify-end">
            <Link href="/about">
              <a className="button flex items-center">Read More</a>
            </Link>
          </span>
        </section>
        <section className="fade mb-28">
          <h2 className="heading my-0" id="skills">
            Skill Set
          </h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <div className="px-4 md:px-0">
            <SkillCard />
          </div>
          <p className="mt-14">Languages I know:</p>
          <ul className="fade grid grid-cols-3 md:grid-cols-4 md:gap-2">
            {[
              "Solidity",
              "Python",
              "Terraform",
              "Java",
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
            ].map((skill) => {
              return (
                <li className="fade fade-sm" key={skill}>
                  <Badge logo={skill} />
                </li>
              )
            })}
          </ul>
          <p className="mt-14">Technologies I've used:</p>
          <ul className="fade grid grid-cols-3 md:grid-cols-4 md:gap-2">
            {[
              "Ethereum",
              "Hardhat",
              "AWS",
              "Azure",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind",
              "DevOps",
              "Docker",
              "Linux",
              "git",
            ].map((skill) => {
              return (
                <li className="fade fade-sm" key={skill}>
                  <Badge logo={skill} />
                </li>
              )
            })}
          </ul>
        </section>
        <section className="fade mb-28">
          <h2 className="heading my-0" id="work">
            Work Experience
          </h2>
          <hr className="mt-2 mb-8 md:mt-3 md:mb-10" />
          <ul className="list">
            {jobs.map((job) => {
              return <Accordion key={job.title} job={job} />
            })}
          </ul>
        </section>
        <section className="fade flex min-h-1/3 flex-col justify-center text-center">
          <h2 className="heading my-0 text-3xl md:text-4xl" id="contact">
            Keep In Touch
          </h2>
          <p>
            I'm always open to hearing about new opportunities.{"  "}Let's
            connect!
          </p>
          <span className="flex justify-center">
            <a
              className="button flex items-center"
              href="mailto:hello@maxpetretta.com"
            >
              hello@maxpetretta.com
            </a>
          </span>
        </section>
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {
  const jobs = getJobs()

  return {
    props: { jobs },
  }
}
