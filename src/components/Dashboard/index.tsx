import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { boilerplate } from "@/utils/boilerplate"
import axios from "axios"
import Sidebar from "../Sidebar"
import IdeNav from "@/components/IdeNav"
import { ILang } from "@/interface/index"
import { API_PATH } from "../../../common/Constants"
const Ide = dynamic(() => import("../../components/Ide"), { ssr: false })

export default function Dashboard() {
  const [lang, setLang] = useState<string>("c")
  const [fontSize, setFontSize] = useState<number>(14)
  const [loading, setLoading] = useState<boolean>(false)
  const [text, setText] = useState<string>("")
  const [output, setOutput] = useState<string>("")
  const handleSubmit = async (): Promise<void> => {
    setLoading(true)
    setOutput("")
    const url = `${API_PATH}/code/execute`
    const format = { javascript: "js", c: "c", cpp: "cpp", java: "java", python: "py" }
    try {
      const { data } = await axios.post(url, {
        format: format[lang as keyof ILang],
        code: text,
      })
      if (data.status) setOutput(data.output)
      console.log(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const onChange = (value: string): void => {
    setText(value)
  }
  const onClick = (value: string): void => {
    setLang(value)
  }
  const fontSizeHandle = (value: string): void => {
    setFontSize(parseInt(value))
  }
  useEffect(() => {
    const data = window.localStorage.getItem(`${lang}-localStorage`)
    if (data !== null) setText(JSON.parse(data))
    else setText(boilerplate(lang))
  }, [lang])

  useEffect(() => {
    const dataDebounce = setTimeout(() => {
      window.localStorage.setItem(`${lang}-localStorage`, JSON.stringify(text))
    }, 1000)
    return () => {
      clearTimeout(dataDebounce)
    }
  }, [lang, text])
  return (
    <div className="h-full flex ">
      <Sidebar click={onClick} />

      <div className="w-full flex-col h-full bg-gray-200 dark:bg-gray-800">
        <IdeNav Fontsize={fontSizeHandle} Lang={lang} HandleSubmit={handleSubmit} />
        <div className=" w-full flex h-5/6 ">
          <div className="w-2/3">
            <Ide lang={lang} text={text} onChange={onChange} fontSize={fontSize} />
          </div>
          <div className="w-1/3 h-full">
            <div className="h-1/2 p-2">Input</div>
            <div className="h-1/2">
              {loading && <span>Loading...</span>}
              {output && <span>{output}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
