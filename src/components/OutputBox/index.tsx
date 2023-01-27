import React from "react"

export default function OutputBox(Loading: any, Output: any) {
  console.log("output", Loading)
  return (
    <div className=" flex flex-col p-3">
      <textarea rows={7} readOnly={true} placeholder="Output" className="p-2 resize-none" value={Loading.Output} />
      {!Loading && <span>Loading...</span>}
    </div>
  )
}
