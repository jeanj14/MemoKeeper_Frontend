import useNotes from "@hooks/useGetNotes";
import { Button, Grid2 as Grid, TextField } from "@mui/material";
import Form from "@ui/Form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NoteForm = ({ note }) => {
  const { addNote } = useNotes();
  const { control, watch, formState, register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: note?.title ? note.title : "",
      content: note?.content ? note.content : "",
    },
  });

  const { errors } = formState;

  const submitForm = (data) => {
    const { title, content } = data;
    addNote({ title, content });
    reset();
  };

  const [content] = watch(["content"]);

  const [charCount, setCharCount] = useState(content?.length ?? 0);

  useEffect(() => {
    console.log(charCount);
    setCharCount(content?.length);
  }, [content, charCount]);

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
            Add note
          </Button>
          <Button onClick={() => reset()} className="button alternate">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default NoteForm;

/*
  - [ ] Fix conditions for disabling button
*/
