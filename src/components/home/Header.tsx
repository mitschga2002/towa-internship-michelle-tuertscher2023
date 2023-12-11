import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Header = () => {
  return (
    <header className="p-10 container mx-auto flex flex-col justify-center md:justify-between items-center gap-5 md:flex-row border-b-2">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
