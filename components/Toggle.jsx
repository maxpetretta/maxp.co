export default function Toggle({id, alt, onClick}) {
  return (
    <label className="inline-flex flex-shrink-0 align-middle w-10 h-6 xs:w-12 xs:h-7 ml-2 md:ml-5 rounded-full shadow-inner cursor-pointer bg-gray-400 dark:bg-gray-500" alt={alt} aria-label={"A toggle controlling " + alt}>
      <input className="transition-transform duration-300 w-4 h-4 xs:w-5 xs:h-5 m-1 rounded-full cursor-pointer appearance-none transform checked:translate-x-full bg-white dark:bg-gray-900" id={id} type="checkbox" defaultChecked onClick={onClick} />
    </label>
  )
}
