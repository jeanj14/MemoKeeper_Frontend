import NoteForm from "@components/Notes/NoteForm";
import NotesList from "@components/Notes/NotesList";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Notes Keeper // Home";
    }
  }, [pathname]);

  return (
    <>
      <NoteForm />
      <Divider className="bg-notes-teal/50 !m-3 w-full" />
      <NotesList />
    </>
  );
};

export default Home;
