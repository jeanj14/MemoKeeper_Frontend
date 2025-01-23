import { useState } from "react";

const useConvert64 = (file) => {
  const [base64, setBase64] = useState(file);

  if (base64) {
    const reader = new FileReader();

    reader.onload = (event) => {
      setBase64(event.target.result);
    };

    reader.readAsDataURL(file);
    console.log(base64);

    return base64;
  }
};

export default useConvert64;
