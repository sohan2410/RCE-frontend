import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { boilerplate } from "@/utils/boilerplate"
const Ide = dynamic(() => import("../components/Ide"), { ssr: false })

export default function dashboard() {
  const [text, setText] = useState("")
  const [language, setLanguage] = useState("c")
  useEffect(() => {
    setText(boilerplate(language))
  }, [])

  useEffect(() => {
    setText(boilerplate(language))
  }, [language])

  return (
    <>
      <select name="format" id="format" onChange={(e) => setLanguage(e.target.value)}>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="py">Python</option>
        <option value="java">Java</option>
        <option value="js">Javascript</option>
      </select>
      {language && <Ide onChange={(e) => setText(e)} text={text} mode={language} />}
    </>
  )
}
