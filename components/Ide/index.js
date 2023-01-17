import React, { useEffect, useState } from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/theme-github"
import "ace-builds/src-noconflict/ext-language_tools"
export default function Ide({ text, onChange, mode }) {
  return (
    <div>IDE</div>
    // <AceEditor
    //   mode={mode}
    //   theme="github"
    //   onChange={onChange}
    //   name="UNIQUE_ID_OF_DIV"
    //   defaultValue={text}
    //   editorProps={{ $blockScrolling: true }}
    //   setOptions={{ enableBasicAutocompletion: true }}
    // />
  )
}
