import React, { useEffect, useState } from "react"
import { render } from "react-dom"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/theme-solarized_dark"
import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-jsx"
import "ace-builds/src-noconflict/snippets/c_cpp"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-min-noconflict/ext-searchbox"
import "ace-builds/src-noconflict/ext-language_tools"
import { boilerplate } from "@/utils/boilerplate"

const languages = ["python", "javascript", "java"]
languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`)
  require(`ace-builds/src-noconflict/snippets/${lang}`)
})
export default function Ide({ lang }) {
  const [mode, setMode] = useState(lang === "c" || lang === "cpp" ? "c_cpp" : lang)
  const [text, setText] = useState(boilerplate(lang))
  const [fontSize, setFontSize] = useState(14)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setText(boilerplate(lang))
    if (lang === "c" || lang === "cpp") setMode("c_cpp")
    else {
      setMode(lang)
    }
    setLoading(false)
  }, [lang])

  const onChange = (value) => {
    setText(value)
  }

  return (
    <>
      <select name="fontSize" id="fontSize" onChange={(e) => setFontSize(parseInt(e.target.value))}>
        <option value={14}>14</option>
        <option value={16}>16</option>
        <option value={18}>18</option>
        <option value={20}>20</option>
      </select>
      {!loading ? (
        <AceEditor
          mode={mode}
          theme="solarized_dark"
          fontSize={fontSize}
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          defaultValue={text}
          editorProps={{ $blockScrolling: true }}
          setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true }}
        />
      ) : null}
    </>
  )
}
