import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <>
      <div className="">
        <h1 className="py-4 pt-48 text-center font-poppinsBold text-5xl md:pt-0">
          CONTACT
        </h1>

        <div className="h-[50vh] w-full overflow-hidden object-cover pb-10">
          <img
            src="/images/car2.png"
            className="m-auto h-full w-full object-cover"
          />
        </div>

        <div className="m-auto w-[90vw] pb-10 lg:w-[55%]">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
