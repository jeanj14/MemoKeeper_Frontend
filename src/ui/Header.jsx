import Logo from "@components/Header/Logo";
import Navbar from "@components/Header/Navbar";
import Welcome from "@components/Header/Welcome";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <Welcome />
    </header>
  );
};

export default Header;
