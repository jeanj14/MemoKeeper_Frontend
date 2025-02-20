import useNotes from "@api/useNotes";
import { ArrowBack, Refresh, Save } from "@mui/icons-material";
import { Button, Grid2 as Grid, IconButton, TextField } from "@mui/material";
import Form from "@ui/Form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EditForm = ({ note = {} }) => {
  const navigate = useNavigate();
  const { id, ...edtValues } = note;
  const { updNotes } = useNotes.useUpdNotes();
  const isEdit = Boolean(note?.id);

  const { control, reset, handleSubmit, formState, register, watch } = useForm({
    defaultValues: isEdit ? edtValues : {},
  });
  const { errors } = formState;

  const submitForm = async (data) => {
    console.log("submitdata", { id, data });
    updNotes({ id, data });
    // reset();
    handleBack();
  };

  const handleBack = () => navigate(-1);

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
        <Grid className="flex items-center justify-center gap-4">
          <IconButton
            type="submit"
            className="button"
            disabled={Object.keys(errors).length > 0}
          >
            <Save />
          </IconButton>
          <IconButton onClick={() => reset()} className="button alternate">
            <Refresh />
          </IconButton>

          <Button
            className="button w-fit justify-self-center"
            onClick={handleBack}
            startIcon={<ArrowBack />}
          >
            Back to all posts
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EditForm;
