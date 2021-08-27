import Image from 'next/image'

export default function Badge({ logo }) {
  return (
      <div className="transition-transform duration-300 flex items-center max-w-1/3 md:max-w-1/4 m-1 rounded-lg shadow-md transform hover:-translate-y-2 bg-gray-300 dark:bg-gray-700">
        <div className="flex items-center justify-center w-6 h-6 md:w-14 md:h-14 m-1 p-0.5 md:m-2 md:p-2 rounded md:rounded-lg bg-white dark:bg-gray-300">
            <Image
              width={38}
              height={38}
              layout="intrinsic"
              src={"/logos/" + logo.toLowerCase() + ".svg"}
              alt={"A logo representing " + logo}
            />
          </div>
          <span className="mx-auto text-xs xs:text-sm md:text-lg font-bold">{logo}</span>
      </div>
  )
}
