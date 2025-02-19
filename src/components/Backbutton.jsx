import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Backbutton = ({ text = "Go back", to = -1 }) => {
  const navigate = useNavigate();
  return (
    <Button
      className="button alternate"
      onClick={() => {
        navigate(to);
      }}
    >
      {text}
    </Button>
  );
};

export default Backbutton;
