import { useState } from 'react'
import Header from './components/Header/Header'
import './styles/App.scss'
import NoteForm from './components/NoteForm/NoteForm'
import Instructions from './components/Instructions/Instructions'
import NoteEntry from './components/NoteEntry/NoteEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Instructions />
      <NoteForm />
      <NoteEntry content="hello" title="hi" />
    </>
  )
}

export default App
