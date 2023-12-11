import ContactInfo from "../common/ContactInfo";
import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Footer = () => {
  return (
    <footer className="p-10 container mx-auto flex justify-between items-center">
      <div className="w-1/3 flex justify-center">
        <Logo />
      </div>
      <div className="w-1/3 flex justify-center">
        <Navigation />
      </div>

      <div className="w-1/3 flex justify-center">
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
