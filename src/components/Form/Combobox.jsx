import ErrorMessage from "@components/Form/ErrorMessage";
import {
  Autocomplete as BaseAutocomplete,
  TextField as BaseTextField,
  Grid2 as Grid,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Combobox = ({
  className = "",
  noOptionsText = "A opção escolhida não existe",
  freeSolo,
  control,
  fieldName,
  options = [""],
  ...props
}) => {
  const {
    id,
    errors,
    variant = "filled",
    placeholder,
    disabled,
    hidden,
  } = props;

  return (
    <Grid className={`${className}`} hidden={hidden}>
      <InputLabel className="!font-highlight" htmlFor={id}>
        {fieldName}
      </InputLabel>
      <Controller
        name={id}
        control={control}
        {...props}
        render={({ field: { onChange, value, ref, ...field } }) => (
          <BaseAutocomplete
            noOptionsText={noOptionsText}
            freeSolo={freeSolo}
            forcePopupIcon={freeSolo && true}
            getOptionLabel={(option) => {
              if (option.descricao) return option.descricao ?? "";
              if (option.nome) return option.nome ?? "";
            }}
            onChange={(event, newValue) => {
              onChange(newValue ? newValue.id : null);
              // event && onChange(event);
            }}
            getOptionDisabled={(option) => option.isDisponivel === false}
            disablePortal
            id={id}
            value={
              value
                ? (options.find((option) => {
                    return value === option.id;
                  }) ?? null)
                : null
            }
            options={options}
            renderInput={(params) => (
              <BaseTextField
                hiddenLabel
                error={errors && true}
                ref={ref}
                variant={variant}
                placeholder={placeholder}
                disabled={disabled}
                {...params}
              />
            )}
            className={`select ${errors && "error"} ${disabled && "disabled"}`}
            {...field}
          />
        )}
      />
      {errors && <ErrorMessage text={errors.message} />}
    </Grid>
  );
};

export default Combobox;
