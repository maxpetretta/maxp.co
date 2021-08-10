import Link from 'next/link'
import Toggle from '../components/Toggle'
import { useTheme } from 'next-themes'

export default function TabBar({ sections }) {
  var tabs = []
  const widths = ["w-full", "w-1/2", "w-1/3", "w-1/4", "w-1/5", "w-1/6"]
  const columns = ["grid-cols-1", "grid-cols-2", "grid-cols-3", "grid-cols-4", "grid-cols-5", "grid-cols-6"]
  const classes = ["translate-x-0", "translate-x-full", "translate-x-fullx2", "translate-x-fullx3", "translate-x-fullx4", "translate-x-fullx5"]

  sections.forEach(function (section, i) {  
    tabs.push({
      section: section,
      class: classes[i]
    })
  })

  var current = tabs[0]
  const numColumns = columns[sections.length - 1]
  const tabWidth = widths[sections.length - 1]
  
  return (
    <div className="transition duration-300 relative flex h-8 ml-2 text-sm md:text-lg bg-gray-400 dark:bg-gray-700 border-3 border-gray-400 dark:border-gray-700 rounded-lg" onClick={() => {
        document.getElementById("selector").classList.remove(...classes)
        document.getElementById("selector").classList.add(current.class)
      }}>
      <div className={"transition duration-300 absolute inset-x-0 inset-y-0 bg-white dark:bg-gray-500 rounded-md shadow-md transform translate-x-0 " + tabWidth} id="selector" />
      {tabs.map(tab => {
        return (
          <label className="flex-1 flex items-center justify-center w-13 sm:w-24 cursor-pointer" key={tab.section.toLowerCase()} onClick={() => { current = tab }}>
            <input className="appearance-none" id={tab.section.toLowerCase() + "Tab"} type="radio" name="tabs" />
            <a className="no-link relative z-10 font-bold leading-none" href={"#" + tab.section.toLowerCase()}>{tab.section}</a>
          </label>
      )})}
    </div>
  )
}
