import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen parent"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-container">
          <button
            style={{ backgroundColor: "#16a34a" }}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            onClick={() => setColor("#16a34a")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "#db2777" }}
            onClick={() => setColor("#db2777")}
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            style={{ backgroundColor: "#1f2937" }}
            onClick={() => setColor("#1f2937")}
          >
            Grey
          </button>
          <button
            style={{ backgroundColor: "#6d28d9" }}
            onClick={() => setColor("#6d28d9")}
          >
            Violet
          </button>
          <button
            style={{ backgroundColor: "#e11d48" }}
            onClick={() => setColor("#e11d48")}
          >
            Rosy
          </button>
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "skyblue" }}
            onClick={() => setColor("skyblue")}
          >
            Skyblue
          </button>
          <button
            style={{ backgroundColor: "#f97316" }}
            onClick={() => setColor("#f97316")}
          >
            Orange
          </button>
        </div>

        {/* <div className="flex-container">
        <button style="background: #16a34a" onClick={()=> setColor("#16a34a")}a')">
          Green
        </button>
        <button style="background: red" onClick="changeColor('red')">
          Red
        </button>
        <button style="background: blue" onClick="changeColor('blue')">
          Blue
        </button>
        <button style="background: yellow" onClick="changeColor('yellow')">
          Yellow
        </button>
        <button style="background: #db2777" onClick="changeColor('#db2777')">
          Pink
        </button>
        <button style="background: purple" onClick="changeColor('purple')">
          Purple
        </button>
        <button style="background: #1f2937" onClick="changeColor('#1f2937')">
          Grey
        </button>
        <button style="background: #6d28d9" onClick="changeColor('#6d28d9')">
          Violet
        </button>
        <button
          style="background: #e11d48"
          onClick="changeColor('#e11d48')"
        >
          Rosy
        </button>
        <button style="background: black" onClick="changeColor('black')">
          Black
        </button>
        <button style="background: skyblue" onClick="changeColor('skyblue')">
          Skyblue
        </button>
        <button style="background: #f97316" onClick="changeColor('#f97316')">
          Orange
        </button>
      </div> */}

        {/* <div className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-green-100 py-2 px-3 rounded-3xl"
          style={{paddingRight: 30}}>test
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red"}}
              onClick={()=> setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow"}}
              onClick={() => setColor("yellow")}>Yello</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#111827"}}
              onClick={() => setColor("#111827")}>Grey</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green"}}
              onClick={() => setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#2e1065"}}
              onClick={() => setColor("#2e1065")}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#4c0519"}}
              onClick={() => setColor("#4c0519")}>Rose</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#65a30d"}}
              onClick={() => setColor("#65a30d")}>Lime</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "#be185d"}}
              onClick={() => setColor("#be185d")}>Pink</button>
          </div>
       </div>*/}
      </div>
    </>
  );
}

export default App;
