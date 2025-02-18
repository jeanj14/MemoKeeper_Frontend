const Heading = ({ as = "h1", children }) => {
  return (
    <>
      {as === "h1" && <h1>{children}</h1>}
      {as === "h2" && <h2>{children}</h2>}
      {as === "h3" && <h3>{children}</h3>}
    </>
  );
};

export default Heading;
