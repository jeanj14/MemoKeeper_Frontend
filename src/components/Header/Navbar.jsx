import useNotes from "@api/useNotes";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { posts } = useNotes.useGetDelNotes();
  const [delCount, setDelCount] = useState(false);

  useEffect(() => {
    posts?.length > 0 ? setDelCount(true) : setDelCount(false);
  }, [posts]);

  return (
    <>{delCount && <NavLink to="/deleted">Manage deleted posts</NavLink>}</>
  );
};

export default Navbar;
