import Image from "next/image"
import { Job } from "../lib/types"
import Badge from "./Badge"

export default function Accordion({ job }: { job: Job }) {
  return (
    <li className="link m-0 list-none rounded-none p-0" key={job.id}>
      <label className="flex flex-wrap items-center">
        <input
          className="peer hidden appearance-none overflow-hidden"
          type="radio"
          name="jobs"
          defaultChecked={job.id == 1 ? true : false}
        />
        <div className="relative mx-3 hidden h-16 w-16 md:block">
          <Image
            layout="fill"
            objectFit="contain"
            src={job.image}
            alt={"The logo for " + job.company}
          />
        </div>
        <div className="mx-2 flex-grow md:mx-0">
          <h3 className="mt-4 mb-0">{job.company}</h3>
          <div className="faint mt-0 mb-4 flex w-full flex-col justify-between text-sm xs:text-base md:flex-row md:pr-8">
            <span>{job.title}</span>
            <time className="inline md:hidden">
              {new Date(job.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}{" "}
              &#8212;{" "}
              {job.endDate == "Current"
                ? "Current"
                : new Date(job.endDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                  })}
            </time>
            <time className="hidden md:inline">
              {new Date(job.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}{" "}
              &#8212;{" "}
              {job.endDate == "Current"
                ? "Current"
                : new Date(job.endDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
            </time>
          </div>
        </div>
        <span className="mr-3 rotate-90 transform font-normal transition-transform duration-500 peer-checked:-rotate-90 md:mr-5">
          &#10095;
        </span>
        <div className="flex h-0 w-full flex-col-reverse justify-end overflow-hidden border-gray-300 bg-white transition-all duration-500 peer-checked:h-[27rem] peer-checked:border-t-2 dark:border-gray-700 dark:bg-gray-900 xs:peer-checked:h-[25rem] ph:peer-checked:h-88 md:flex-row md:peer-checked:h-88">
          <div
            className="prose prose-sm w-full px-2 pt-2 font-normal dark:prose-dark md:prose md:w-2/3 md:px-4"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <ul className="grid grid-cols-3 xs:m-2 md:w-1/3 md:grid-cols-1 md:grid-rows-3">
            {job.skills.map((skill: string) => {
              return (
                <li className=" md:ml-6" key={skill}>
                  <Badge logo={skill} />
                </li>
              )
            })}
          </ul>
        </div>
      </label>
    </li>
  )
}
