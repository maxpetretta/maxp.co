import fs from "fs"
import path from "path"

const dataDirectory = path.join(process.cwd(), "/public/data")

export function getJobs() {
  const file = fs.readFileSync(dataDirectory + "/jobs.json")
  const jobs = JSON.parse(file)

  return jobs
}
