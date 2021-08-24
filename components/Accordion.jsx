import Link from 'next/link'
import Image from 'next/image'
import Badge from './Badge'

export default function Accordion({ job }) {
  return (
    <li className="link m-0 p-0 rounded-none list-none" key={job.id}>
      <label className="flex flex-wrap items-center">
        <input className="peer hidden appearance-none overflow-hidden" type="radio" name="jobs" defaultChecked={job.id == 1 ? true : false} />
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
          <div className="faint flex flex-col md:flex-row justify-between w-full mt-0 mb-4 md:pr-8 text-sm xs:text-base">
            <span>{job.title}</span>
            <time className="inline md:hidden">{new Date(job.startDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})} &#8212; {job.endDate == "Current" ? "Current" : new Date(job.endDate).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})}</time>
            <time className="hidden md:inline">{new Date(job.startDate).toLocaleDateString("en-US", {year: 'numeric', month: 'long'})} &#8212; {job.endDate == "Current" ? "Current" : new Date(job.endDate).toLocaleDateString("en-US", {year: 'numeric', month: 'long'})}</time>
          </div>
        </div>
        <span className="transition-transform duration-500 transform rotate-90 peer-checked:-rotate-90 mr-3 md:mr-5 font-normal">&#10095;</span>
        <div className="transition-all duration-500 flex flex-col-reverse md:flex-row justify-end w-full h-0 peer-checked:h-88 ph:peer-checked:h-76 md:peer-checked:h-72 peer-checked:border-t-2 overflow-hidden bg-gray-100 border-gray-300 dark:bg-gray-900 dark:border-gray-700">
          <div className="prose prose-sm md:prose dark:prose-dark w-full md:w-2/3 px-2 md:px-4 pt-2 font-normal" dangerouslySetInnerHTML={{ __html: job.description }} />
          <ul className="grid grid-cols-3 md:grid-cols-1 md:grid-rows-3 md:w-1/3 xs:m-2">
            {job.skills.map(skill => {
              return <li className=" md:ml-6" key={skill}><Badge logo={skill} /></li>
            })}
          </ul>
        </div>
      </label>
    </li>
  )
}
