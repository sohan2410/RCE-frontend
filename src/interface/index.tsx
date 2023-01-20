export interface IButton {
  src: string
  Click: (value: string) => void
  language: string
  key: React.Key
}

export interface ILang {
  c: string
  cpp: string
  java: string
  python: string
  javascript: string
}

export interface IIde {
  lang: string
  text: string
  fontSize: number
  onChange: (value: string) => void
}

export interface IIdeNav {
  Fontsize: (value: string) => void
  Lang: string
  HandleSubmit: () => Promise<void>
}
export interface ISidebar {
  click: (value: string) => void
}
