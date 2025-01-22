import Form from "@ui/Form";
import React from "react";
import { useForm } from "react-hook-form";

const AddNote = () => {
  const { control } = useForm();
  return (
    <Form control={control}>
      <input type="text" placeholder="Title" />
      <textarea placeholder="Description"></textarea>
      <button type="submit">Add Note</button>
    </Form>
  );
};

export default AddNote;
