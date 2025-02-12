import useNotes from "@api/useNotes";
import TextInput from "@components/Form/TextInput";
import { Button, Grid2 as Grid, TextField } from "@mui/material";
import Form from "@ui/Form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ note = {} }) => {
  const { id, ...edtValues } = note;
  console.log({ edtFormNote: note });
  const isEdit = Boolean(note?.id);
  // useEffect(() => {
  //   setNote(editNote);
  // }, [isEdit, editNote]);

  const { control, reset, handleSubmit, formState, register, watch, setValue } =
    useForm({
      defaultValues: isEdit ? edtValues : {},
    });
  const { errors } = formState;

  console.log(formState.defaultValues);

  // console.log(note, editNote);

  const submitForm = async (data) => {
    console.log(data);
    // if (isEdit) {
    // updNotes(data)
    // navigate('/')
    // };
    // addNotes(data);
    reset();
  };

  const [contentField] = watch(["content"]);

  const [charCount, setCharCount] = useState(contentField?.length ?? 0);

  useEffect(() => {
    console.log(charCount);
    setCharCount(contentField?.length);
  }, [contentField, charCount]);

  return (
    <Form
      control={control}
      onSubmit={handleSubmit(submitForm)}
      className="mx-auto w-[450px]"
    >
      <Grid className="grid grid-cols-1 gap-8">
        <TextField
          id="title"
          type="text"
          label="Title:"
          variant="filled"
          placeholder="Enter the title of the note"
          helperText={errors?.title?.message}
          {...register("title", {
            required: "Please provide a title for the note",
          })}
          error={errors?.title && true}
        />
        <TextField
          id="content"
          variant="filled"
          rows={5}
          label="Content:"
          placeholder="Add the content of the note"
          multiline
          {...register("content", {
            required: "Please provide the content for the note",
            maxLength: {
              value: 255,
              message: `The content of the note cannot exceed 255 characters`,
            },
          })}
          helperText={
            errors?.content ? errors.content.message : `${charCount} / 255`
          }
          slotProps={{
            formHelperText: {
              className:
                Object.values(errors).length === 0
                  ? "w-full !m-0 !text-right"
                  : "",
            },
          }}
          error={errors?.content && true}
        />
        <Grid className="flex justify-end gap-4">
          <Button
            type="submit"
            className="button"
            disabled={Object.keys(errors).length > 0}
          >
            Update note
          </Button>
          <Button onClick={() => reset()} className="button alternate">
            Cancel
          </Button>
        </Grid>
      </Grid>

      {<pre>{JSON.stringify(note, null, 2)}</pre>}
    </Form>
  );
};

export default EditForm;

/*
  - [ ] Fix conditions for disabling button
*/
