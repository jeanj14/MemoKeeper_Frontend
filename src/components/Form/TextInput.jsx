import ErrorMessage from "@components/Form/ErrorMessage";
import {
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

const TextInput = ({
  id,
  type,
  errors,
  rows,
  limit,
  disabled,
  variant = "filled",
  fieldName,
  className = "",
  charCount = 0,
  startIcon,
  endIcon,
  hidden = false,
  register,
  ref = null,
  ...props
}) => {
  return (
    <Grid className={`${className}`} hidden={hidden}>
      <InputLabel className="!font-highlight" htmlFor={id}>
        {fieldName}
      </InputLabel>
      <TextField
        id={id}
        ref={ref}
        rows={rows}
        type={type}
        limit={limit}
        error={errors}
        variant={variant}
        className="w-full"
        disabled={disabled}
        multiline={rows && true}
        slotProps={{
          input: {
            className: `bg-rarity-yellow ${errors && "error"}`,
            startAdornment: startIcon && (
              <InputAdornment
                position="start"
                className={`${errors && "!text-rarity-lightGray"}`}
              >
                {startIcon}
              </InputAdornment>
            ),
            endAdornment: endIcon && (
              <InputAdornment
                position="end"
                className={`${errors && "!text-rarity-lightGray"}`}
              >
                {endIcon}
              </InputAdornment>
            ),
            inputProps: {
              name: id,
            },
          },
        }}
        {...register}
        {...props}
        hiddenLabel
      />
      {errors && <ErrorMessage text={errors.message} />}
      {limit && !errors && (
        <Grid container className="grow justify-end">
          <Grid>
            <p className="text-sm">
              {charCount}/{limit}
            </p>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default TextInput;
