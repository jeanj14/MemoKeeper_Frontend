import React from "react";
import EditNote from "./Form/EditNote";
import AddNote from "./Form/AddNote";
import notes from "@dev_data/notes";

const NotesForm = ({ isEdit = false, note = {} }) => {
  return (
    <>
      {isEdit && <EditNote note={notes.at(1)} />}
      {!isEdit && <AddNote />}
    </>
  );
};

export default NotesForm;
