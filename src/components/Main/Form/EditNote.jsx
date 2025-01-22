import Form from "@ui/Form";
import React from "react";
import { useForm } from "react-hook-form";
import convertToBase64 from "@utils/convertToBase64";

const EditNote = ({ note = {} }) => {
  const { control, register, formState, handleSubmit } = useForm({
    defaultValues: {
      title: note?.title ?? "",
      content: note?.content ?? "",
      img: note?.img ?? "",
    },
  });
  const { errors } = formState;

  const submitForm = (data) => {
    const { title, content, img } = data;
    console.log(img);
    // const base64Data = convertToBase64(img[0]);
    // console.log({ title, content, base64Data });
  };

  return (
    <Form control={control} onSubmit={handleSubmit(submitForm)}>
      <div>
        <input
          type="text"
          placeholder="Title"
          {...register("title", {
            required: "Please provide a title for the note",
          })}
        />
        <p className="text-sm font-bold text-red-700">
          {errors?.title?.message}
        </p>
      </div>
      <div>
        <textarea
          type="text"
          placeholder="Contents"
          {...register("content", {
            required: "Please provide the content for the note",
          })}
        ></textarea>
        <p className="text-sm font-bold text-red-700">
          {errors?.content?.message}
        </p>
      </div>
      <div>
        <input
          id="img"
          name="img"
          type="file"
          {...register("img", {
            onChange: (e) => convertToBase64(e.target.files[0]),
          })}
          className="w-full"
        />
      </div>
      <button type="submit">Save changes</button>
    </Form>
  );
};

export default EditNote;
