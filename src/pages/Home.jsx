import NotesForm from "@components/Main/NotesForm";
import NotesList from "@components/Main/NotesList";
import React, { useEffect } from "react";
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
      <NotesForm />
      <NotesList />
    </>
  );
};

export default Home;
