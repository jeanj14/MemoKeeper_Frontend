import useGetNotes from "@api/useNotes";
import Note from "@components/Main/Notes/Note";
import { CircularProgress, Grid2 as Grid } from "@mui/material";

const NotesList = ({ isDeleted = false }) => {
  const { posts: notes, isLoading: loadingAll } = useGetNotes.useGetPosts();
  const { posts: deletedNotes, isLoading: loadingDeleted } =
    useGetNotes.useGetDelNotes();

  if (loadingAll || loadingDeleted)
    return (
      <Grid className="flex grow flex-col items-center justify-center gap-4 justify-self-center">
        <CircularProgress className="!text-notes-teal" />
        <p className="text-notes-black text-xl">Loading notes...</p>
      </Grid>
    );

  if (!isDeleted && !notes.length)
    return (
      <Grid className="flex grow flex-col items-center justify-center gap-4 justify-self-center">
        <p className="text-notes-black text-xl">
          There are no notes to be displayed. Consider adding your first note!
        </p>
      </Grid>
    );

  if (isDeleted && !deletedNotes.length)
    return (
      <Grid className="flex grow flex-col items-center justify-center gap-4 justify-self-center">
        <p className="text-notes-black text-xl">
          There are no deleted notes to be displayed!
        </p>
      </Grid>
    );

  return (
    <Grid className="flex w-full grow">
      {(!loadingAll || !loadingDeleted) && (
        <Grid className="notes-list">
          {!isDeleted
            ? notes.map((note) => <Note note={note} key={note.id} />)
            : deletedNotes.map((note) => <Note note={note} key={note.id} />)}
        </Grid>
      )}
    </Grid>
  );
};

export default NotesList;
