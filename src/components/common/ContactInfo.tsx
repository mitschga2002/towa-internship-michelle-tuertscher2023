const ContactInfo = () => {
  return (
    <>
      <div>
        <p className="text-gray-500 text-sm">Name: John Doe</p>
        <p className="text-gray-500 text-sm">Address: 123 Main St, City</p>
        <p className="text-gray-500 text-sm">
          Phone:
          <a className="underline" href="tel:(123) 456-7890">
            (123) 456-7890
          </a>
        </p>
        <p className="text-gray-500 text-sm">
          Email:
          <a className="underline" href="mailto:john.doe@example.com">
            john.doe@example.com
          </a>
        </p>
      </div>
    </>
  );
};
export default ContactInfo;
