import { Tabs } from "../lib/types"

export default function TabBar({ sections }: { sections: string[] }) {
  var tabs: Tabs[] = []
  const widths = ["w-full", "w-1/2", "w-1/3", "w-1/4", "w-1/5", "w-1/6"]
  const classes = [
    "translate-x-0",
    "translate-x-full",
    "translate-x-fullx2",
    "translate-x-fullx3",
    "translate-x-fullx4",
    "translate-x-fullx5",
  ]

  sections.forEach(function (section, i) {
    tabs.push({
      section: section,
      class: classes[i],
    })
  })

  var current = tabs[0]
  const tabWidth = widths[sections.length - 1]

  return (
    <div
      className="relative ml-0 flex h-8 flex-1 rounded-lg border-3 border-gray-400 bg-gray-400 text-sm dark:border-gray-700 dark:bg-gray-700 xs:ml-2 md:w-96 md:text-lg"
      onClick={() => {
        if (document.getElementById("selector")) {
          var selector = document.getElementById("selector")!
          selector.classList.remove(...classes)
          selector.classList.add(current.class, "clicked")
          setTimeout(() => {
            selector.classList.remove("clicked")
          }, 1000)
        }
      }}
    >
      <div
        className={
          "absolute inset-x-0 inset-y-0 translate-x-0 transform rounded-md bg-white shadow-md transition-transform duration-300 dark:bg-gray-500 " +
          tabWidth
        }
        id="selector"
      />
      {tabs.map((tab) => {
        return (
          <label
            className="flex flex-1 cursor-pointer items-center justify-center"
            key={tab.section.toLowerCase()}
            onClick={() => {
              current = tab
            }}
          >
            <input
              className="hidden appearance-none"
              type="radio"
              name="tabs"
            />
            <a
              className="no-link relative z-10 w-full text-center font-bold leading-none"
              href={"#" + tab.section.toLowerCase()}
            >
              {tab.section}
            </a>
          </label>
        )
      })}
    </div>
  )
}
