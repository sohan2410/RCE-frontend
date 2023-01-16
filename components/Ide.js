import React from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/ext-language_tools"
export default function Ide({ text, onChange, mode }) {
  return (
    <AceEditor
      mode={mode}
      theme="github"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      defaultValue={text}
      setOptions={{ enableBasicAutocompletion: true }}
    />
  )
}
