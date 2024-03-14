import { useState } from 'react'
import {Navbar} from './components/navbar'
import {About} from './components/about'
import {Login} from './components/login'
import './App.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    { path: '/', element: <><Navbar /> </> },
    { path: '/about', element: <><Navbar /> <About /></> },
    { path: '/login', element: <><Navbar /> <Login /></> },
  ])
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
