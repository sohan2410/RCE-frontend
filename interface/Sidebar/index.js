import React from "react"
import Button from "@/components/Button"
import C from "../../assets/c.png"
import Cpp from "../../assets/c++.png"
import Python from "../../assets/python.png"
import Java from "../../assets/java.png"
import Javascript from "../../assets/js.png"
export default function Sidebar({ click }) {
  const language = [
    [C, "c"],
    [Cpp, "cpp"],
    [Python, "python"],
    [Javascript, "javascript"],
    [Java, "java"],
  ]
  return (
    <div className="w-20">
      {language.map((value, i) => {
        return <Button src={value[0]} Click={click} language={value[1]} />
      })}
    </div>
  )
}
