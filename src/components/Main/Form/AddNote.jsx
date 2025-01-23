import Form from "@ui/Form";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import convertToBase64 from "@utils/convertToBase64";
import useConvert64 from "@hooks/useConvert64";

const AddNote = () => {
  const { control, register, formState, handleSubmit, watch } = useForm({
    defaultValues: {
      title: "",
      content: "",
      // img: note?.img ?? undefined,
    },
  });
  const { errors } = formState;
  // const [selImg, setSelImg] = useState("");

  // const [img] = watch(["img"]);
  // console.log({ watch: img });

  // useEffect(() => {
  //   if (img) {
  //     setSelImg((cur) => convertToBase64(img));
  //     console.log({ newImg: img });
  //   }
  // }, [img]);

  // const base64Data = useConvert64(img);
  // console.log(base64Data);

  const submitForm = (data) => {
    const { title, content } = data;
    // console.log(img);
    console.log({ title, content });
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
      <button type="submit">Add note</button>
    </Form>
  );
};

export default AddNote;
