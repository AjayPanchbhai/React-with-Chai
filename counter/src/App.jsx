import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let c = 10;
  const [counter, setCounter] = useState(c);

  const increament = () => {
    if(counter < 20)
    setCounter(counter + 1);
  }
  // const Emfiincree = () => {
  //   if(counter < 20)
  //     setCounter(counter + 1);
  // }

  const decreament = () => {
    if(counter > 0)
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Couter React App</h1>
      <h3>Couter: {counter}</h3>
      <button onClick={increament}  >Increament By 1</button>
      <br />
      <br />
      <button onClick={decreament} >Decreament By 1</button>
    </>
  )
}

export default App
