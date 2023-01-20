import { IIdeNav } from "@/interface"
import React from "react"

export default function IdeNav({ Fontsize, Lang, HandleSubmit }: IIdeNav): JSX.Element {
  return (
    <div className="py-1 item-center px-2 w-full flex justify-between bg-gray-100 dark:bg-gray-700">
      <div className="w-1/2 flex justify-between">
        <p className="py-2">
          Language: <span className="font-bold text-purple-500 dark:text-green-500">{Lang}</span>
        </p>
        <select
          name="fontSize"
          id="fontSize"
          className="m-1"
          onChange={(e) => {
            Fontsize(e.target.value)
          }}
        >
          <option value={14}>14</option>
          <option value={16}>16</option>
          <option value={18}>18</option>
          <option value={20}>20</option>
        </select>
      </div>
      <button className="py-1 px-3 m-2 bg-purple-500 rounded-md hover:bg-purple-800 dark:hover:bg-green-800 dark:bg-green-500" onClick={HandleSubmit}>
        Run
      </button>
    </div>
  )
}
