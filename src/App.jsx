import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'

function App() {

  return (
    <> 
     <Sidenav />
     <Main />
     <About />
     <Projects />
    </>
  )
}

export default App
