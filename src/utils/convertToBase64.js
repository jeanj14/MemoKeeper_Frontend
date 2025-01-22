/*  
  - [ ]  Check for a way to make the image work returning a base64 string
 */

const convertToBase64 = (img) => {
  console.log(img);
  const reader = new FileReader();
  reader.addEventListener("load", () => reader.result);
  // reader.onload = (e) => e.result;
  const data = reader.readAsDataURL(img);
  console.log(data);
  // return data;
  return "ok";
};

export default convertToBase64;
