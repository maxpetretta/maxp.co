import Link from 'next/link'
import Image from 'next/image'
import Badge from './Badge'

export default function Accordion({ job }) {
  return (
    <li className="link m-0 p-0 rounded-none list-none" id={job.id}>
      <label className="flex flex-wrap items-center">
        <input className="peer hidden appearance-none overflow-hidden" id={job.id} type="radio" name="jobs" />
        <div className="hidden md:block relative w-16 h-16 mx-3">
          <Image
              layout="fill"
              objectFit="contain"
              src={job.image}
              alt={"The logo for " + job.company}
            />
        </div>
        <div className="flex-grow mx-2 md:mx-0">
          <h3 className="mt-4 mb-0">{job.company}</h3>
          <div className="faint flex flex-col md:flex-row justify-between w-full mt-0 mb-4 pr-4 md:pr-8">
            <span>{job.title}</span>
            <time className="inline md:hidden">{new Date(job.startDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})} - {job.endDate == "Current" ? "Current" : new Date(job.endDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})}</time>
            <time className="hidden md:inline">{new Date(job.startDate).toLocaleDateString("en-US", {year: 'numeric', month: 'long'})} - {job.endDate == "Current" ? "Current" : new Date(job.endDate).toLocaleDateString("en-US", {year: 'numeric', month: 'long'})}</time>
          </div>
        </div>
        <span className="transition-transform duration-500 transform rotate-90 peer-checked:-rotate-90 mr-3 md:mr-5 font-normal">&#10095;</span>
        <div className="bg-gray-100 transition-all duration-500 flex flex-col-reverse md:flex-row justify-end w-full h-0 peer-checked:h-96 md:peer-checked:h-72 peer-checked:border-t-2 border-gray-300 overflow-hidden">
          <div className="prose prose-sm xs:prose dark:prose-dark w-full md:w-2/3 px-2 md:px-4 pt-2 font-normal" dangerouslySetInnerHTML={{ __html: job.description }} />
          <div className="flex flex-row md:flex-col w-full md:w-1/3 pt-3">
            {job.skills.map(skill => {
              return <span className="flex-grow mx-1 md:ml-6 md:mr-4"><Badge key={skill} logo={skill} /></span>
            })}
          </div>
        </div>
      </label>
    </li>
  )
}
