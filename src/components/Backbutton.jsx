import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Backbutton = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="button alternate"
      onClick={() => {
        navigate(-1);
      }}
    >
      Go back
    </Button>
  );
};

export default Backbutton;
