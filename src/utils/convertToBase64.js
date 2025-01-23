/*  
  - [ ]  Check for a way to make the image work returning a base64 string
 */

const convertToBase64 = async (img) => {
  console.log({ img });
  const reader = new FileReader();
  // reader.addEventListener("load", () => reader.result);
  reader.onloadEnd = () => reader.result;
  const data = reader.readAsDataURL(img[0]);
  console.log(data);
  // return data;
  return "ok";
};

export default convertToBase64;
