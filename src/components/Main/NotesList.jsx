import notes from "@dev_data/notes";
import Note from "@components/Main//Notes/Note";

const NotesList = () => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </div>
  );
};

export default NotesList;
