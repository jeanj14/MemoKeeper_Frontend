import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Heading from "@ui/Heading";

const Confirmation = ({
  open,
  handleToggle,
  handleDelete,
  mode = "restore",
  handleRestore,
}) => {
  const restoreNote = () => {
    handleRestore();
    handleToggle();
  };
  const deleteNote = () => {
    handleDelete();
    handleToggle();
  };

  return (
    <Dialog open={open} onClose={handleToggle}>
      <DialogTitle className="bg-notes-black !text-notes-white">
        {mode === "restore" ? (
          <Heading>You are about to restore a note</Heading>
        ) : (
          <Heading>Are you sure about this action?</Heading>
        )}
      </DialogTitle>
      <DialogContent className="!bg-notes-white !text-notes-black !pt-4">
        {mode === "restore" && (
          <>
            <p>
              Restoring a note will allow you edit later your notes visualizer!
            </p>
          </>
        )}
        {mode === "delete" && (
          <>
            <Heading>Are you sure about this action?</Heading>
            <p>
              This action will delete your note permanently and this cannot be
              undone!
            </p>
          </>
        )}
      </DialogContent>
      <DialogActions className="bg-notes-teal">
        <Button
          onClick={handleToggle}
          className="!bg-notes-teal !text-notes-black !border-notes-black !border"
        >
          No, I changed my mind!
        </Button>
        {mode === "restore" && (
          <Button
            onClick={restoreNote}
            className="!text-notes-white !bg-notes-black"
          >
            Yes, restore it!
          </Button>
        )}
        {mode === "delete" && (
          <Button
            onClick={deleteNote}
            className="!text-notes-white !bg-red-600"
          >
            Yes, delete it permanently!
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
