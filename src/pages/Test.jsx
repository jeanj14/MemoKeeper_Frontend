import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const err = new Error();
    err.message = "Just and error";
    err.name = "General error";
    err.status = 500;
    throw err;
  }, []);

  return <div>Test</div>;
};

export default Test;
