import NotesForm from "@components/Main/NotesForm";
import NotesList from "@components/Main/NotesList";
import React from "react";

const Home = () => {
  return (
    <>
      <NotesForm />
      <NotesList />
    </>
  );
};

export default Home;
