import fs from "fs"
import path from "path"
import { Job } from "./types"

const dataDirectory = path.join(process.cwd(), "/public/data")

export function getJobs(): Job[] {
  const file = fs.readFileSync(dataDirectory + "/jobs.json").toString()
  const jobs = JSON.parse(file)

  return jobs
}
