import useNotes from "@api/useNotes";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { posts } = useNotes.useGetDelNotes();
  const [delCount, setDelCount] = useState(false);

  useEffect(() => {
    posts?.length > 0 ? setDelCount(true) : setDelCount(false);
  }, [posts]);

  return (
    <Button
      LinkComponent={NavLink}
      to="/deleted"
      disabled={!delCount}
      className={`!bg-notes-teal !text-notes-black ${!delCount && "!bg-notes-teal/50 !text-notes-black/50"}`}
    >
      Check your deleted notes
    </Button>
  );
};

export default Navbar;
