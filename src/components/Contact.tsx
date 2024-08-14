import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <>
      <div className="">
        <h1 className="pb-10 lg:pt-0 text-center font-poppinsBold text-5xl">
          CONTACT
        </h1>

        <div className="h-[30vw] min-h-[250px] overflow-hidden object-cover pb-10">
          <img
            src="/images/contact.JPG"
            className="m-auto h-full w-full object-cover object-center"
          />
        </div>

        <div className="m-auto w-[90vw] pb-10 lg:w-[55%]">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
