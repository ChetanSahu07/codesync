import { useState } from 'react'
import React from 'react'
import {Outlet} from 'react-router-dom'
import { Header , Input, UserForm , Footer } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
      <Outlet />
      </main>
      
      <Footer />
    </>
  )
}

export default App
