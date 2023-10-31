import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div classNameName="flex">
          <button style={{ backgroundColor: "#16a34a" }}
            classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={()=> setColor("#16a34a")}>
          Green
        </button>
          <button style={{ backgroundColor: "red"}} onclick=" ">
          Red
        </button>
          <button style={{ backgroundColor: "blue" }} onclick=" ">
          Blue
        </button>
          <button style={{ backgroundColor: "yellow" }} onclick=" ">
          Yellow
        </button>
          <button style={{ backgroundColor: "#db2777" }} onclick=" ">
          Pink
        </button>
          <button style={{ backgroundColor: "purple" }} onclick="">
          Purple
        </button>
          <button style={{ backgroundColor: "#1f2937" }} onclick=" ">
          Grey
        </button>
          <button style={{ backgroundColor: "#6d28d9" }} onclick="">
          Violet
        </button>
        <button
            style={{ backgroundColor: "#e11d48" }}
          onclick=" "
        >
          Rosy
        </button>
          <button style={{ backgroundColor: "black" }} onclick=" ">
          Black
        </button>
          <button style={{ backgroundColor: "skyblue" }} onclick=" ">
          Skyblue
        </button>
          <button style={{ backgroundColor: "#f97316" }} onclick="">
          Orange
        </button>
        </div>



      {/* <div className="flex-container">
        <button style="background: #16a34a" onclick=" "a')">
          Green
        </button>
        <button style="background: red" onclick="changeColor('red')">
          Red
        </button>
        <button style="background: blue" onclick="changeColor('blue')">
          Blue
        </button>
        <button style="background: yellow" onclick="changeColor('yellow')">
          Yellow
        </button>
        <button style="background: #db2777" onclick="changeColor('#db2777')">
          Pink
        </button>
        <button style="background: purple" onclick="changeColor('purple')">
          Purple
        </button>
        <button style="background: #1f2937" onclick="changeColor('#1f2937')">
          Grey
        </button>
        <button style="background: #6d28d9" onclick="changeColor('#6d28d9')">
          Violet
        </button>
        <button
          style="background: #e11d48"
          onclick="changeColor('#e11d48')"
        >
          Rosy
        </button>
        <button style="background: black" onclick="changeColor('black')">
          Black
        </button>
        <button style="background: skyblue" onclick="changeColor('skyblue')">
          Skyblue
        </button>
        <button style="background: #f97316" onclick="changeColor('#f97316')">
          Orange
        </button>
      </div> */}

      {/* <div classNameName="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div classNameName="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div classNameName="flex flex-wrap justify-center gap-3 shadow-lg bg-green-100 py-2 px-3 rounded-3xl"
          style={{paddingRight: 30}}>test
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red"}}
              onClick={()=> setColor("red")}>Red</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow"}}
              onClick={() => setColor("yellow")}>Yello</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#111827"}}
              onClick={() => setColor("#111827")}>Grey</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}>Blue</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green"}}
              onClick={() => setColor("green")}>Green</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#2e1065"}}
              onClick={() => setColor("#2e1065")}>Purple</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#4c0519"}}
              onClick={() => setColor("#4c0519")}>Rose</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#65a30d"}}
              onClick={() => setColor("#65a30d")}>Lime</button>
            <button classNameName="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#be185d"}}
              onClick={() => setColor("#be185d")}>Pink</button>
          </div>
    </div>*/}
      </div>
     </>
  )
}

export default App
