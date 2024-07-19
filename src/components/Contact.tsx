import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <>
      <div className="">
        <h1 className="pt-48 md:pt-0 text-5xl text-center font-sans py-4">
          CONTACT
        </h1>

        <div className="w-screen h-[50vh] pb-10 object-cover overflow-hidden">
          <img
            src="/images/car2.png"
            className="m-auto w-full h-full object-cover"
          />
        </div>

        <div className="m-auto w-[90vw] lg:w-[55%] pb-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
