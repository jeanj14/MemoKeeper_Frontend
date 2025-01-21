const date = new Date().getFullYear();
const Copyright = () => {
  return <div className="copy">All rights reserved &bull; {date}</div>;
};

export default Copyright;
