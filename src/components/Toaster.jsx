import { Alert, Snackbar } from "@mui/material";
import { clearMsg } from "@store/toaster.slice";
import { useDispatch, useSelector } from "react-redux";

const Toaster = () => {
  const { msg, status } = useSelector((state) => state.toaster);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearMsg());
  };

  return (
    <Snackbar
      open={msg && true}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      className="!bg-transparent"
    >
      <Alert
        severity={status ?? "success"}
        variant="filled"
        className={`${status === "success" && "!bg-notes-teal"} `}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
