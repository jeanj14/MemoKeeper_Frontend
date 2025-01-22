import React from "react";
import EditNote from "./Form/EditNote";
import AddNote from "./Form/AddNote";
import notes from "@dev_data/notes";

const NotesForm = ({ isEdit = false }) => {
  return (
    <>
      {/* {isEdit && <EditNote />}
      {!isEdit && <AddNote />} */}
      <EditNote />
      {/* <AddNote /> */}
    </>
  );
};

export default NotesForm;
