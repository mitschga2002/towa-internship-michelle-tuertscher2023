import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Header = () => {
  return (
    <header className="p-10 w-full flex justify-between items-center">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
