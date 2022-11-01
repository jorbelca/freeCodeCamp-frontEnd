import React from "react"
import "./App.css"

function App() {
  const [text, setText] = React.useState("")
  const pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]

  const reproduceAudio = (key) => {
    let audio
    pads.map((n) => {
      if (key === n) {
        audio = document.getElementById(key)
        audio.play()
        const url = audio.src.split("/")
        const name = url[url.length - 1].split(".")[0]
        setText(name)
        let btn = document.getElementById(name)
        btn.className = "drum-pad pressed"
        setTimeout(() => (btn.className = "drum-pad"), 100)
      }
    })
  }

  window.addEventListener("keydown", (e) => {
    let key = e.key.toUpperCase()
    reproduceAudio(key)
  })

  const play = (e) => {
    let key = e.target.innerText
    reproduceAudio(key)
  }
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{text}</div>
        <div className="label">DRUM MACHINE</div>
        <div id="pads">
          <button className="drum-pad" onClick={play} id="Heater-1">
            <audio
              id="Q"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
            {"Q"}
          </button>
          <button className="drum-pad" onClick={play} id="Heater-2">
            <audio
              id="W"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ></audio>
            {"W"}
          </button>
          <button className="drum-pad" onClick={play} id="Heater-3">
            <audio
              id="E"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ></audio>
            {"E"}
          </button>

          <br />
          <button className="drum-pad" onClick={play} id="Heater-4_1">
            <audio
              id="A"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ></audio>
            {"A"}
          </button>
          <button className="drum-pad" onClick={play} id="Heater-6">
            <audio
              id="S"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ></audio>
            {"S"}
          </button>
          <button className="drum-pad" onClick={play} id="Dsc_Oh">
            <audio
              id="D"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ></audio>
            {"D"}
          </button>

          <br />
          <button className="drum-pad" onClick={play} id="Kick_n_Hat">
            <audio
              id="Z"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ></audio>
            {"Z"}
          </button>
          <button className="drum-pad" onClick={play} id="RP4_KICK_1">
            <audio
              id="X"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ></audio>
            {"X"}
          </button>
          <button className="drum-pad" onClick={play} id="Cev_H2">
            <audio
              id="C"
              className="clip"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ></audio>
            {"C"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
