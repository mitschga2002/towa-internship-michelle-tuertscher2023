import ContactInfo from "../common/ContactInfo";
import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Footer = () => {
  return (
    <footer className="p-4 md:p-10 container mx-auto flex flex-col md:flex-row justify-between items-center border-t-2">
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <Logo />
      </div>

      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <Navigation />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center">
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
