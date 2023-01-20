import React from "react"
import Button from "@/components/Button"
export default function Sidebar({ click }) {
  const language = ["c", "cpp", "python", "javascript", "java"]
  return (
    <div className="w-20">
      {language.map((value) => {
        return <Button src={`/static/images/${value}.png`} Click={click} language={value} />
      })}
    </div>
  )
}
