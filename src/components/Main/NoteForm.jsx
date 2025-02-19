import useNotes from "@api/useNotes";
import { Button, Grid2 as Grid, TextField } from "@mui/material";
import Form from "@ui/Form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * NoteForm component for creating or editing notes.
 *
 * This component renders a form for adding or editing notes. It includes fields
 * for the note's title and content, with character count and validation.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isEdit - Indicates if the form is in edit mode.
 * @param {Object} [props.editNote] - The note being edited (if in edit mode).
 * @param {string} [props.editNote.title] - The title of the note being edited.
 * @param {string} [props.editNote.content] - The content of the note being edited.
 * @returns {JSX.Element} A form for creating or editing notes.
 */
const NoteForm = ({ isEdit, editNote }) => {
  const { addNotes } = useNotes.useAddNotes();

  const { control, watch, formState, register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: editNote?.title ? editNote.title : "",
      content: editNote?.content ? editNote.content : "",
    },
  });

  const { errors } = formState;

  console.log(formState.defaultValues);

  // console.log(note, editNote);

  const submitForm = async (data) => {
    // if (isEdit) {
    // updNotes(data)
    // navigate('/')
    // };
    addNotes(data);
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
