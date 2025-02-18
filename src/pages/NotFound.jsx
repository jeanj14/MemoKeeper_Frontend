import Backbutton from "@components/Backbutton";
import Heading from "@ui/Heading";

const NotFound = ({ resource = "page" }) => {
  return (
    <>
      <Heading>404</Heading>
      <p>
        The {resource} you are trying to access does not exist in your servers.
      </p>
      <Backbutton />
    </>
  );
};

export default NotFound;
