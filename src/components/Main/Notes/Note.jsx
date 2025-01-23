import { Link, NavLink } from "react-router-dom";

const Note = ({ note }) => {
  const { id, title, content, date } = note;
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{date.toISOString()}</p>
      {/* <img src={img} alt={title} /> */}
      <span>{id}</span>
      {/* work as link that will redirect to a edit notes page*/}
      {/* <button>Edit note</button> */}
      <NavLink to={`/edit`}>Edit note</NavLink>
    </div>
  );
};

export default Note;

/*
  - There are two components from react-router-dom used for navitation purpose

  - The component NavLink from react-router is used for internal navigation inside the application

  - The component Link from react-router is used for redirecting to external links
*/
