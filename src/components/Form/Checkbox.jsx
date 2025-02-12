import ErrorMessage from "@components/Form/ErrorMessage";
import { Checkbox as BaseCheckbox, Grid2 as Grid } from "@mui/material";
import { Controller } from "react-hook-form";

const Checkbox = ({ className = "", control, ...props }) => {
  const { id, errors, children, disabled, hidden } = props;

  return (
    <Grid className={`${className}`} hidden={hidden}>
      <Controller
        disabled={disabled}
        name={id}
        control={control}
        defaultValue={false}
        render={({ field: { value, ref, ...field } }) => (
          <Grid
            container
            className={`checkbox ${disabled && "disabled"} ${errors && "error"}`}
          >
            <BaseCheckbox
              aria-label={children}
              inputRef={ref}
              checked={!!value}
              disableRipple
              {...field}
              {...props}
            />
            <span className="font-highlight">{children}</span>
          </Grid>
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default Checkbox;
