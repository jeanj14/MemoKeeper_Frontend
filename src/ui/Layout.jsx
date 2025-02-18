import Toaster from "@components/Toaster";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import Main from "@ui/Main";
import Providers from "@ui/Providers";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Providers>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Toaster />
    </Providers>
  );
};

export default Layout;
