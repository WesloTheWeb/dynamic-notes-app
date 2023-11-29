import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import './styles/App.scss'
import NoteForm from './components/NoteForm/NoteForm'
import Instructions from './components/Instructions/Instructions'
import NoteEntry from './components/NoteEntry/NoteEntry'

function App() {

  const generatedNotes = useSelector((state) => state.note.notes)

  return (
    <>
      <Header />
      <Instructions />
      <NoteForm />
      <section className="noteEntry-container">
      {
        generatedNotes.map((note, index) => (
          <NoteEntry
            key={index}
            content={note.content}
            title={note.title}
            id={note.id}
          />
        ))
      }
      </section>
    </>
  )
}

export default App
