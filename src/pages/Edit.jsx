import useNotes from "@api/useNotes";
import EditForm from "@components/Main/Notes/EditForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { pathname } = useLocation();

  const { posts } = useNotes.useGetPosts();

  const edtNote = posts?.at(0);

  useEffect(() => {
    if (pathname === "/edit") document.title = "Notes Keeper // Edit";
  }, [pathname, posts]);

  console.log({ editPageNote: edtNote });

  return <>{edtNote && <EditForm note={edtNote} />}</>;
};

export default Edit;
