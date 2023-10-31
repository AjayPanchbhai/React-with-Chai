import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex justify-evenly'>
    <App laptop="Macbook" p1="Macbook" p2="apple" p3="Better"/>
    <App laptop="Macbook" p1="Macbook" p2="apple" p3="Better"/>
    <App laptop="Macbook" p1="Macbook" p2="apple" p3="Better"/>
    <App laptop="Dell" p1="Hardware" p2="fast CPU" p3="performace" />
    </div>
  </React.StrictMode>,
)
