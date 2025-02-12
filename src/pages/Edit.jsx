import useNotes from "@api/useNotes";
import EditForm from "@components/Main/Notes/EditForm";
import NotesForm from "@components/Main/NotesForm";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { pathname } = useLocation();
  // const [edtNote, setEdtNote] = useState({});

  const { posts } = useNotes.useGetPosts();

  const edtNote = posts?.at(0);

  useEffect(() => {
    if (pathname === "/edit") document.title = "Notes Keeper // Edit";
  }, [pathname, posts]);
  // const editNote = posts?.at(0);

  console.log({ editPageNote: edtNote });

  return (
    <>
      {edtNote && <EditForm note={edtNote} />}
      {/* {JSON.stringify(note)} */}
    </>
  );
};

export default Edit;
