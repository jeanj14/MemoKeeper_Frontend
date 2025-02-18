import useNotes from "@api/useNotes";
import EditForm from "@components/Main/Notes/EditForm";
import NotFound from "@pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { pathname } = useLocation();

  const { posts } = useNotes.useGetPosts();

  const edtNote = posts?.at(0);

  useEffect(() => {
    if (pathname === "/edit") document.title = "Notes Keeper // Edit Note";
  }, [pathname, posts]);

  if (!posts) return <NotFound resource="note" />;

  return <>{edtNote && <EditForm note={edtNote} />}</>;
};

export default Edit;
