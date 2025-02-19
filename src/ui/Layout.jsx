import Toaster from "@components/Toaster";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import Providers from "@ui/Providers";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Providers>
      <Header />
      <Main className={`${pathname === "/deleted" && "justify-center"}`}>
        <Outlet />
      </Main>
      <Footer />
      <Toaster />
    </Providers>
  );
};

export default Layout;
