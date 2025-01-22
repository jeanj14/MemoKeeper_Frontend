import { v4 as uuid } from "uuid";

const notes = [
  {
    id: uuid(),
    title: "Title 1",
    content: "Content 1",
    img: "link to image 1",
    date: new Date(),
  },
  {
    id: uuid(),
    title: "Title 2",
    content: "Content 2",
    img: "link to image 2",
    date: new Date(),
  },
  {
    id: uuid(),
    title: "Title 3",
    content: "Content 3",
    img: "link to image 3",
    date: new Date(),
  },
];

export default notes;
