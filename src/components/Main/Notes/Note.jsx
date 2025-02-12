import useNotes from "@api/useNotes";
import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const Note = ({ note }) => {
  const { delNotes } = useNotes.useDelNotes();
  const { id, title, content, createdAt, updatedAt, user } = note;
  const crtDate = new Date(createdAt).toISOString();
  const updDate = new Date(updatedAt).toISOString();

  const handleDeleteNote = (id) => {
    delNotes({ id });
  };

  return (
    <Card className="flex h-[300px] w-full flex-col drop-shadow-md sm:w-[45%] md:w-[30%]">
      <CardHeader
        title={title}
        subheader={`Created by: ${user?.username ?? "Administrator"}`}
        slotProps={{
          subheader: {
            className: "!text-xs !text-notes-teal",
          },
          title: {
            className: "!text-xl !text-notes-teal !font-extrabold",
          },
        }}
        className="bg-notes-black/80"
      />
      <CardContent className="hidden-scroll bg-notes-white grow overflow-y-auto">
        <p>{content}</p>
      </CardContent>
      <CardContent className="text-notes-white/50 bg-notes-black/80 !py-1 text-right text-xs">
        {updDate !== crtDate ? (
          <p>
            <span className="font-extrabold">Updated at:</span>{" "}
            {updDate.split("T").at(0)}
          </p>
        ) : (
          <p>
            <span className="font-extrabold">Created at:</span>{" "}
            {crtDate.split("T").at(0)}
          </p>
        )}
      </CardContent>
      <CardActions className="bg-notes-black/80 flex items-center justify-evenly">
        <Button
          to={`/edit?id=${id}`}
          className="button"
          LinkComponent={NavLink}
          startIcon={<Edit />}
        >
          Edit
        </Button>

        <Button
          className="button alternate"
          onClick={() => handleDeleteNote(id)}
          startIcon={<Delete />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Note;
