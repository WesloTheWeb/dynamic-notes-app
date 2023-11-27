
interface NoteEntryProps {
    id?: number,
    title?: string,
    content: string
};


const NoteEntry = ({id, title, content}: NoteEntryProps) => {

    return (
        <section>
            <h3>{title}</h3>
            <div>{content}</div>
        </section>
    )
};

export default NoteEntry;