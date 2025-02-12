import useGetNotes from "@api/useNotes";
import Note from "@components/Main/Notes/Note";
import { CircularProgress, Grid2 as Grid } from "@mui/material";

const NotesList = () => {
  const { posts: notes, isLoading } = useGetNotes.useGetPosts();

  if (isLoading)
    return (
      <Grid className="flex grow flex-col items-center justify-center gap-4 justify-self-center">
        <CircularProgress className="!text-notes-teal" />
        <p className="text-notes-black text-xl">Loading notes...</p>
      </Grid>
    );

  if (!notes)
    return (
      <Grid className="flex grow flex-col items-center justify-center gap-4 justify-self-center">
        <p className="text-notes-black text-xl">
          There are no notes to be displayed. Consider adding your first note!
        </p>
      </Grid>
    );

  return (
    <Grid className="flex w-full grow">
      {!isLoading && (
        <Grid className="notes-list">
          {notes.map((note) => (
            <Note note={note} key={note.id} />
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default NotesList;
