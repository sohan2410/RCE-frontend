import React from "react"
import Image from "next/image"
export default function Button({ src, Click, language }) {
  return (
    <button
      type="submit"
      onClick={() => Click(language)}
      className="w-full m-auto p-4 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      <Image src={src} />
    </button>
  )
}
