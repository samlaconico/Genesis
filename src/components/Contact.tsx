import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <>
      <div className="md:pb-20">
        <h1 className="pt-48 md:pt-0 text-5xl text-center font-sans py-4">
          ABOUT US
        </h1>

        <div className="w-screen md:grid md:grid-cols-2 space-x-8 pt-4">
          <div className="md:w-[50vw] bg-slate-400 object-cover overflow-hidden">
            <img
              src="/images/car2.png"
              className="m-auto w-full h-full object-cover"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
