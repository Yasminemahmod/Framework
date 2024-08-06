import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'



function App() {
  const [count, setCount] = useState(0)
  const routes = createBrowserRouter([
    {path: "", element: <LayOut />, children: [
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "portfolio", element: <Portfolio />},
      {path: "contact", element: <Contact />},
    ]}
  ])

  return (
    <>
    
      <RouterProvider router={routes}>

      </RouterProvider>

    </>
  )
}

export default App
