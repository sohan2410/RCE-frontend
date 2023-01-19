import React, { useEffect, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { boilerplate } from "@/utils/boilerplate"
import InputBox from "../../components/InputBox"
import OutputBox from "../../components/OutputBox"
import { FaPython, FaCuttlefish } from "react-icons/fa"
import { DiJavascript1, DiJava } from "react-icons/di"
import C from "../../assets/c.png"
import Cpp from "../../assets/c++.png"
import Py from "../../assets/python.png"
import Java from "../../assets/java.png"
import Js from "../../assets/js.png"

const Ide = dynamic(() => import("../../components/Ide"), { ssr: false })

export default function Dashboard() {
  const [lang, setLang] = useState("cpp")
  const [fontSize, setFontSize] = useState(14)

  const Sidebar = () => {
    return (
      <div className="w-20">
        <button
          type="submit"
          onClick={() => setLang("c")}
          className="w-full m-auto p-4 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {/* <FaCuttlefish className="w-10 h-10" /> */}
          <Image src={C} />
        </button>
        <button
          type="submit"
          onClick={() => setLang("cpp")}
          className=" w-full m-auto p-4 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <Image src={Cpp} />
          {/* <FaPython className="w-10 h-10" /> */}
        </button>
        <button
          type="submit"
          onClick={() => setLang("javascript")}
          className=" w-full m-auto p-5 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {/* <DiJavascript1 className="w-10 h-10" /> */}
          <Image src={Js} />
        </button>
        <button
          type="submit"
          onClick={() => setLang("python")}
          className=" w-full m-auto p-5 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {/* <FaPython className="w-10 h-10" /> */}
          <Image src={Py} />
        </button>
        <button
          type="submit"
          onClick={() => setLang("java")}
          className=" w-full m-auto p-5 flex justify-center item-center hover:bg-gray-200 dark:hover:bg-gray-500"
        >
          {/* <DiJava className="w-10 h-10" /> */}
          <Image src={Java} />
        </button>
      </div>
    )
  }
  return (
    <div className="h-full flex ">
      <Sidebar />

      <div className="w-full flex-col h-full bg-gray-200 dark:bg-gray-800">
        <div className="py-1 item-center px-2 w-full flex justify-between bg-gray-100 dark:bg-gray-700">
          <div className="w-1/2 flex justify-between">
            <p className="">
              Language: <span className="font-bold text-purple-500 dark:text-green-500">{lang}</span>
            </p>
            <select name="fontSize" id="fontSize" onChange={(e) => setFontSize(parseInt(e.target.value))}>
              <option value={14}>14</option>
              <option value={16}>16</option>
              <option value={18}>18</option>
              <option value={20}>20</option>
            </select>
          </div>
          <button className="py-1 px-4 mx-2 bg-purple-500 rounded-md hover:bg-purple-800 dark:hover:bg-green-800 dark:bg-green-500">Run</button>
        </div>
        <div className=" w-full flex h-5/6 ">
          <div className="w-2/3">
            <Ide lang={lang} fontSize={fontSize} />
          </div>
          <div className="w-1/3 h-full">
            <div className="h-1/2 p-2">Input</div>
            <div className=" h-1/2 p-2">output</div>
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
