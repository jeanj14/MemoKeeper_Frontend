import NotesForm from "@components/Main/NotesForm";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/edit") document.title = "Notes Keeper // Edit";
  }, [pathname]);

  return <NotesForm isEdit />;
};

export default Edit;
