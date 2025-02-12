import ErrorMessage from "@components/Form/ErrorMessage";
import inputMask from "@libs/helpers/inputMask";
import {
  Grid2 as Grid,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

const Input = forwardRef((props, ref) => {
  const { onChange, mask, name, ...other } = props;
  return (
    <IMaskInput
      mask={inputMask(mask)}
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(val) => onChange({ target: { name, value: val } })}
      overwrite
      {...other}
    />
  );
});
Input.displayName = "TextField";

const MaskInput = ({
  className = "",
  startIcon,
  endIcon,
  control,
  fieldName = "",
  mask = "",
  ...props
}) => {
  const { id, type, errors, hidden } = props;
  return (
    <Grid className={`${className}`} hidden={hidden}>
      <InputLabel className="!font-highlight" htmlFor={id}>
        {fieldName}
      </InputLabel>
      <Controller
        mask={mask}
        control={control}
        name={id}
        render={({ field: { value, onChange, ref, ...field } }) => (
          <TextField
            hiddenLabel
            id={id}
            type={type}
            value={value}
            onChange={(value) => onChange(value || "")}
            inputRef={ref}
            ref={ref}
            className="w-full"
            slotProps={{
              input: {
                startAdornment: startIcon && (
                  <InputAdornment
                    position="start"
                    className={`${errors && "text-rarity-lightGray"}`}
                  >
                    {startIcon}
                  </InputAdornment>
                ),
                endAdornment: endIcon && (
                  <InputAdornment
                    position="end"
                    className={`${errors && "text-rarity-lightGray"}`}
                  >
                    {endIcon}
                  </InputAdornment>
                ),
                className: `${errors && "error"}`,
                inputComponent: Input,
                inputProps: {
                  className: `${endIcon && "!text-right"}`,
                  mask,
                },
              },
            }}
            mask={mask}
            {...props}
            {...field}
          />
        )}
      />
      {errors && <ErrorMessage text={errors.message} className="w-full" />}
    </Grid>
  );
};

export default MaskInput;
