import AddForm from "@components/Main/Notes/AddForm";
import NotesList from "@components/Main/NotesList";
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
      <AddForm />
      <Divider className="bg-notes-teal/50 !m-3 w-full" />
      <NotesList />
    </>
  );
};

export default Home;
