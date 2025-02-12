// import { Collapse, FormHelperText } from "@mui/material";
import { FormHelperText, Zoom } from "@mui/material";

const ErrorMessage = ({ text, className = "", ...props }) => {
  return (
    <Zoom in={text}>
      <FormHelperText
        className={`!-mt-1 rounded-b-lg !bg-rarity-red px-4 pb-1 pt-2 !font-extrabold !text-rarity-lightGray ${className}`}
        content={text}
        {...props}
      >
        {text}
      </FormHelperText>
    </Zoom>
  );
};

export default ErrorMessage;
