import { Grid2 as Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Grid
      className="text-notes-teal cursor-pointer text-2xl font-extrabold uppercase"
      onClick={() => navigate("/")}
    >
      Notes Keeper
    </Grid>
  );
};

export default Logo;
