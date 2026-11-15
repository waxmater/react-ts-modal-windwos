import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useModalContext } from './components/contexts/ModalContext'

function App() {
  const context = useModalContext();

  return (
    <>
    <button onClick={() => {context?.openModal(<>My First Modal</>)}}>
      <>Open Modal</>
    </button>
    </>
  )
}

export default App
