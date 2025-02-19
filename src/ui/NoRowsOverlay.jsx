import Backbutton from "@components/Backbutton";
import { Grid2 as Grid } from "@mui/material";

const NoRowsOverlay = () => {
  return (
    <Grid className="flex h-full flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold">There are no deleted notes</h2>
      <Backbutton text="Check your notes" to="/" />
    </Grid>
  );
};

export default NoRowsOverlay;
