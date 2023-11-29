import classes from './NoteEntry.module.scss';

const { noteEntryContainer, noteEntryHeader, noteTimeStamp } = classes;

interface NoteEntryProps {
    id?: number,
    title?: string,
    content: string
};

const NoteEntry = ({ id, title, content }: NoteEntryProps) => {

    return (
        <section className={noteEntryContainer}>
            <div className={noteEntryHeader}>
                <h3>{title}</h3>
                <div className={noteTimeStamp}>
                    <p>{id}</p>
                    <label>{Date.now().toLocaleString()}</label>
                </div>
            </div>
            <div>{content}</div>
        </section>
    )
};

export default NoteEntry;