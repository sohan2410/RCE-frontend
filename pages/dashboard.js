import React, { useState } from "react"
import dynamic from "next/dynamic"
const Ide = dynamic(() => import("../components/Ide"), { ssr: false })

export default function dashboard() {
  const [code, setCode] = useState("")
  function onChange(newValue) {
    setCode(newValue)
  }

  return (
    <>
      <Ide onChange={onChange} />
    </>
  )
}
