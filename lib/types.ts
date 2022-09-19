import { ReactNode } from "react"

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

export type PostMeta = {
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

export type LayoutProps = {
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
  children?: React.ReactNode
}

export type HeadingProps = {
  tag?: string
  children: ReactNode
}

export type Tabs = {
  section: string
  class: string
}
