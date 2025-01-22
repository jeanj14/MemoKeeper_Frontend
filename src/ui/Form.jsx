import { DevTool } from "@hookform/devtools";
import React from "react";

const isDev = import.meta.env.DEV;

const Form = ({ children, control, className = "", ...props }) => {
  return (
    <>
      <form className={className} {...props} noValidate>
        {children}
      </form>
      {isDev && <DevTool control={control} placement="top-right" />}
    </>
  );
};

export default Form;
