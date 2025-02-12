import notes from "@dev_data/notes";
import NoteForm from "@components/Main/NoteForm";

const NotesForm = ({ isEdit = false, note = {} }) => {
  return (
    <>
      {isEdit && <NoteForm isEdit editNote={note} />}
      {!isEdit && <NoteForm />}
    </>
  );
};

export default NotesForm;
