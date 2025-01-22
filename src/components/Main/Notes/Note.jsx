import React from "react";

const Note = ({ note }) => {
  const { id, title, content, date, img } = note;
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{date.toISOString()}</p>
      <img src={img} alt={title} />
      <span>{id}</span>
    </div>
  );
};

export default Note;
