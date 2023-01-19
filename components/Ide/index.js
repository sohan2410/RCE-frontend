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
import { useTheme } from "next-themes"

const languages = ["python", "javascript", "java"]
languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`)
  require(`ace-builds/src-noconflict/snippets/${lang}`)
})
export default function Ide({ lang, fontSize }) {
  const [mode, setMode] = useState(lang === "c" || lang === "cpp" ? "c_cpp" : lang)
  const [text, setText] = useState(boilerplate(lang))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (lang === "c" || lang === "cpp") setMode("c_cpp")
    else {
      setMode(lang)
    }
  }, [lang])

  const onChange = (value) => {
    setText(value)
  }
  const { systemTheme, theme, setTheme } = useTheme()
  return (
    <div className="w-full p-4">
      {!loading ? (
        <AceEditor
          mode={mode}
          theme={theme === "dark" ? "solarized_dark" : "github"}
          fontSize={fontSize}
          onChange={onChange}
          height="25rem"
          width="80%"
          name="UNIQUE_ID_OF_DIV"
          defaultValue={text}
          value={text}
          editorProps={{ $blockScrolling: true }}
          setOptions={{ enableBasicAutocompletion: true, enableLiveAutocompletion: true }}
        />
      ) : null}
    </div>
  )
}
