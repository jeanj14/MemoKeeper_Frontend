import { Grid2 as Grid } from "@mui/material";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Heading from "@ui/Heading";
import Main from "@ui/Main";
import { NavLink, useRouteError } from "react-router-dom";

const isDev = import.meta.env.DEV;

const ErrorFallback = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <Main className="flex grow flex-col justify-center gap-[2rem]">
        <Heading className="text-center">Something wrong has happened</Heading>
        <p>
          If you see this message too frequently, please contact us providing
          the information displayed below:{" "}
          <NavLink
            to="/contato"
            target="_blank"
            className="text-multiBrown font-bold no-underline hover:underline"
          >
            contact
          </NavLink>
          .
        </p>
        <Grid className="w-full flex-col gap-3 overflow-y-auto rounded-lg px-6 py-4 text-red-900">
          <p>
            <strong>Error name: </strong> {error?.name}
          </p>
          <p>
            <strong>Error code: </strong> {error?.status}
          </p>
          <p>
            <strong>Error message: </strong> {error?.message}
          </p>
          {isDev && (
            <p>
              <strong>Error details: </strong>
              <pre className="overflow-auto">{error?.stack}</pre>
            </p>
          )}
        </Grid>
      </Main>
      <Footer />
    </>
  );
};

export default ErrorFallback;
