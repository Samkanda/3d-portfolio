import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './book.css'
import { NavBar } from './components/NavBar.jsx'
import { BotBar } from './components/BotBar.jsx'
import { NavBar2 } from './components/NavBar2.jsx'
import { Projects } from './Projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <NavBar/> */}
    {/* <NavBar2/> */}
    <App />
    <Projects/>
  </React.StrictMode>,
)
