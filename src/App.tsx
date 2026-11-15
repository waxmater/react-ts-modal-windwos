import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useModalContext } from './components/contexts/ModalContext'
import { JaksHomeModal } from './components/modals/JacksHomeModal/JaksHomeModal'

function App() {
  const context = useModalContext();

  return (
    <>
    <button onClick={() => {context?.openModal(<>My First Modal</>)}}>
      <>Open Modal</>
    </button>
    <button onClick={() => {context?.openModal(<JaksHomeModal/>)}}>
      <>Модалка, которую создал Джек</>
    </button>
    </>
  )
}

export default App
