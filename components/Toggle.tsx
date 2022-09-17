export default function Toggle({ id, alt, onClick }) {
  return (
    <label
      className="ml-2 inline-flex h-6 w-10 flex-shrink-0 cursor-pointer rounded-full bg-gray-400 align-middle shadow-inner dark:bg-gray-500 xs:h-7 xs:w-12 md:ml-5"
      aria-label={"A toggle controlling " + alt}
    >
      <input
        className="m-1 h-4 w-4 transform cursor-pointer appearance-none rounded-full bg-white transition-transform duration-300 checked:translate-x-full dark:bg-gray-900 xs:h-5 xs:w-5"
        id={id}
        type="checkbox"
        defaultChecked
        onClick={onClick}
      />
    </label>
  )
}
