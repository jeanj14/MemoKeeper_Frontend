import useNotes from "@api/useNotes";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Note = ({ note }) => {
  const { delNotes } = useNotes.useDelNotes();
  const { id, title, content, createdAt } = note;
  const date = new Date(createdAt);

  const handleDeleteNote = (id) => {
    delNotes({ id });
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{date.toISOString()}</p>
      <span>{id}</span>
      <NavLink to={`/edit?id=${id}`}>Edit note</NavLink>
      <Button onClick={() => handleDeleteNote(id)}>Delete note</Button>
    </div>
  );
};

export default Note;
