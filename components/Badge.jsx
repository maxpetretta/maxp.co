import Image from 'next/image'

export default function Badge({ logo }) {
  return (
    <li className="transition duration-300 list-none flex items-center w-36 md:w-52 m-2 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md transform hover:-translate-y-2">
        <div className="flex items-center justify-center bg-white w-12 h-12 md:w-14 md:h-14 m-2 rounded-xl">
          <Image
            width={38}
            height={38}
            layout="intrinsic"
            src={"/logos/" + logo + ".svg"}
            alt={"A logo representing " + logo}
          />
        </div>
        <span className="mx-auto text-sm md:text-lg font-bold">{logo}</span>
    </li>
  )
}
