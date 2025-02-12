import useGetNotes from "@api/useNotes";
import Note from "@components/Main/Notes/Note";
import { Grid2 as Grid } from "@mui/material";

const NotesList = () => {
  const { posts: notes } = useGetNotes.useGetPosts();

  if (!notes) return <p>There are no notes</p>;

  return (
    <Grid className="notes-list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </Grid>
  );
};

export default NotesList;
