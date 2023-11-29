import Header from './components/Header/Header'
import './styles/App.scss'
import NoteForm from './components/NoteForm/NoteForm'
import Instructions from './components/Instructions/Instructions'
import NoteEntry from './components/NoteEntry/NoteEntry'

function App() {

  const SAMPLE_DATA = [
    {
      id: 1,
      title: `Introduction`,
      content: `Hello, I'm Shelley Duvall.`
    },
    {
      id: 2,
      title: `Introduction`,
      content: `Hello. I'm Shelley Duvall.`
    },
    {
      id: 3,
      title: `Introduction`,
      content: `Hello! I'm Shelley Duvall!`
    }
  ]

  return (
    <>
      <Header />
      <Instructions />
      <NoteForm />
      <section className="noteEntry-container">
        {
          SAMPLE_DATA.map((note, id) => {
            return (
              <NoteEntry
                key={id}
                content={note.content}
                title={note.title}
                id={note.id}
              />
            )
          })
        }
      </section>
    </>
  )
}

export default App
