export default function Toggle({id, alt, onClick}) {
  return (
    <label className="transition duration-300 inline-flex flex-shrink-0 align-middle w-14 h-8 ml-2 md:ml-5 rounded-full shadow-inner cursor-pointer bg-gray-400 dark:bg-gray-500" alt={alt}>
      <input className="transform transition duration-300 w-6 h-6 m-1 rounded-full cursor-pointer appearance-none checked:translate-x-full bg-white dark:bg-gray-900" id={id} type="checkbox" defaultChecked onClick={onClick} />
    </label>
  )
}
