import Image from 'next/image'

export default function Badge({ logo }) {
  return (
    <li className="transition duration-300 flex items-center max-w-1/3 md:max-w-1/4 m-1 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-md transform hover:-translate-y-2">
        {/* <img className="bg-white w-6 h-6 md:w-14 md:h-14 m-1 p-1 md:m-2 md:p-2 rounded-lg" src={"/logos/" + logo.toLowerCase() + ".svg"} alt={"A logo representing " + logo} /> */}
        <div className="flex items-center justify-center bg-white w-6 h-6 md:w-14 md:h-14 m-1 p-1 md:m-2 md:p-2 rounded-lg">
          <Image
            width={38}
            height={38}
            layout="intrinsic"
            src={"/logos/" + logo.toLowerCase() + ".svg"}
            alt={"A logo representing " + logo}
          />
        </div>
        <span className="transition duration-300 mx-auto text-sm md:text-lg font-bold">{logo}</span>
    </li>
  )
}
