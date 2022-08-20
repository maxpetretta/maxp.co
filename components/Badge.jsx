import Image from "next/image"

export default function Badge({ logo }) {
  return (
    <div className="m-1 flex max-w-xs transform items-center rounded-lg bg-gray-300 shadow-md transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-700">
      <div className="m-1 flex h-6 w-6 items-center justify-center rounded bg-white p-0.5 dark:bg-gray-300 md:m-2 md:h-14 md:w-14 md:rounded-lg md:p-2">
        <Image
          width={38}
          height={38}
          layout="intrinsic"
          src={"/logos/" + logo.toLowerCase() + ".svg"}
          alt={"A logo representing " + logo}
        />
      </div>
      <span className="mx-auto text-xs font-bold text-gray-900 dark:text-gray-300 xs:text-sm md:text-lg">
        {logo}
      </span>
    </div>
  )
}
