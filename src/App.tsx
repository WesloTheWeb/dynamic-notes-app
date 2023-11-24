import { useState } from 'react'
import Header from './components/Header/Header'
import './styles/App.scss'
import NoteForm from './components/NoteForm/NoteForm'
import Instructions from './components/Instructions/Instructions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Instructions />
      <NoteForm />
    </>
  )
}

export default App
