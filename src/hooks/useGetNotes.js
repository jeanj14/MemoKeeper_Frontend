import startNotes from "@dev_data/notes";
import { useEffect, useState } from "react";

const useGetNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = () => {
      setNotes(startNotes);
    };
    getNotes();
  }, [notes]);

  return { notes };
};

export default useGetNotes;
