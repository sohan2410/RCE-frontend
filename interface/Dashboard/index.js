import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { boilerplate } from "@/utils/boilerplate"
import InputBox from "../../components/InputBox"
import OutputBox from "../../components/OutputBox"
import { FaPython, FaCuttlefish } from "react-icons/fa"
import { DiJavascript1, DiJava } from "react-icons/di"

const Ide = dynamic(() => import("../../components/Ide"), { ssr: false })

export default function Dashboard() {
  const [lang, setLang] = useState("")
  console.log(lang)
  const Sidebar = () => {
    return (
      <div className="w-20">
        <button
          type="submit"
          onClick={() => setLang("c")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <FaCuttlefish className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("c++")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <FaPython className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("js")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <DiJavascript1 className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("py")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <FaPython className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("java")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <DiJava className="w-10 h-10" />
        </button>
      </div>
    )
  }
  return (
    <div className="h-5/6 flex">
      <Sidebar />

      <div className="w-full flex-col h-full">
        <div className="p-1 w-full flex justify-between">
          <p>Language</p>
          <button className="py-1 px-3 m-2 bg-purple-500 rounded-md hover:bg-purple-800 dark:hover:bg-green-800 dark:bg-green-500">Run</button>
        </div>
        <div className=" w-full flex ">
          <div className="w-2/3 h-full">IDE</div>
          <div className="w-1/3 h-full">
            <div className="h-1/2">input box</div>
            <div className=" h-1/2">output box</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// const [text, setText] = useState("")
// const [language, setLanguage] = useState("c")

// useEffect(() => {
//   setText(boilerplate(language))
// }, [language])
// console.log("text", text)
{
  /* <select name="format" id="format" onChange={(e) => setLanguage(e.target.value)}>
  <option value="c">C</option>
  <option value="cpp">C++</option>
  <option value="py">Python</option>
  <option value="java">Java</option>
  <option value="js">Javascript</option>
</select>
{language && <Ide onChange={(e) => setText(e)} text={text} mode={language} />} */
}
