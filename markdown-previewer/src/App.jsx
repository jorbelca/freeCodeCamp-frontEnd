import { useEffect, useState } from "react"
import "./App.css"
import { marked } from "marked"
const initial = require("./Initial.md")

function App() {
  const [text, setText] = useState("")
  marked.setOptions({
    breaks: true,
  })

  const handleChange = (e) => {
    let markdown = e.target.value
    setText(marked.parse(markdown))
  }
  const pushMarkDown = (text) => {
    let previewEl = document.getElementById("preview")
    previewEl.innerHTML = marked.parse(text)
  }

  useEffect(() => {
    if (text == "") {
      fetch(initial)
        .then((response) => {
          return response.text()
        })
        .then((text) => {
          console.log(text)
          document.getElementById("editor").textContent = text
          setText(marked.parse(text))
        })
    }
    pushMarkDown(text)
  }, [text])

  return (
    <div className="App">
      <div id="markdown-previewer">
        <div id="top-bar">
          <span className="title">MARKDOWN PREVIEWER</span>

          <div className="btns">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div id="edit">
          <textarea
            name="Editor"
            id="editor"
            cols="50"
            rows="50"
            onChange={handleChange}
          ></textarea>
          <div id="preview"></div>
        </div>
      </div>
    </div>
  )
}

export default App
