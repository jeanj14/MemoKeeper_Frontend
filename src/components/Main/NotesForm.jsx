import notes from "@dev_data/notes";
import NoteForm from "@components/Main/NoteForm";

const NotesForm = ({ isEdit = false, note = {} }) => {
  return (
    <>
      {isEdit && <NoteForm note={notes.at(1)} />}
      {!isEdit && <NoteForm />}
    </>
  );
};

export default NotesForm;
