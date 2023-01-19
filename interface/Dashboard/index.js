import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { boilerplate } from "@/utils/boilerplate"
import InputBox from "../../components/InputBox"
import OutputBox from "../../components/OutputBox"
import { FaPython, FaCuttlefish } from "react-icons/fa"
import { DiJavascript1, DiJava } from "react-icons/di"
import axios from "axios"

const Ide = dynamic(() => import("../../components/Ide"), { ssr: false })

export default function Dashboard() {
  const [lang, setLang] = useState("cpp")
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")
  const handleSubmit = async () => {
    setLoading(true)
    setOutput("")
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/code/execute`
    const format = { javascript: "js", c: "c", cpp: "cpp", java: "java", python: "py" }
    try {
      const { data } = await axios.post(url, {
        format: format[lang],
        code: text,
      })
      if (data.status) setOutput(data.output)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const onChange = (value) => {
    setText(value)
  }
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
          onClick={() => setLang("cpp")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <FaPython className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("javascript")}
          className=" w-full m-auto p-2 flex justify-center item-center hover:bg-purple-500 dark:hover:bg-green-500"
        >
          <DiJavascript1 className="w-10 h-10" />
        </button>
        <button
          type="submit"
          onClick={() => setLang("python")}
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
  useEffect(() => {
    const data = window.localStorage.getItem(`${lang}-localStorage`)
    console.log(data)
    if (data !== null) setText(JSON.parse(data))
    else setText(boilerplate(lang))
  }, [lang])

  useEffect(() => {
    window.localStorage.setItem(`${lang}-localStorage`, JSON.stringify(text))
  }, [lang, text])

  return (
    <div className="h-5/6 flex">
      <Sidebar />

      <div className="w-full flex-col h-full">
        <div className="p-1 w-full flex justify-between">
          <p>Language</p>
          <button
            className="py-1 px-3 m-2 bg-purple-500 rounded-md hover:bg-purple-800 dark:hover:bg-green-800 dark:bg-green-500"
            onClick={handleSubmit}
          >
            Run
          </button>
        </div>
        <div className=" w-full flex ">
          <div className="w-2/3 h-full">
            <Ide lang={lang} text={text} onChange={onChange} />
          </div>
          <div className="w-1/3 h-full">
            <div className="h-1/2">
              {loading && <span>Loading...</span>}
              {output && <span>{output}</span>}
            </div>
            {/* <div className=" h-1/2">output box</div> */}
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
