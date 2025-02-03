import Note from "@components/Main//Notes/Note";
import useNotes from "@hooks/useGetNotes";

const NotesList = () => {
  const { notes } = useNotes();

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NotesList;
