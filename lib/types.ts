export type Job = {
  id: number
  company: string
  title: string
  startDate: string
  endDate: string
  location: string
  image: string
  skills: string[]
  description: string
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  image: string
  alt: string
  icon: string
  related: string
}
