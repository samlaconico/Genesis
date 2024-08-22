import BrandContactForm from "@/components/BrandContactForm";
import LineCard from "@/components/LineCard";

export default function Links() {
  return (
    <>
      <div className="m-auto space-y-12 pb-20 pt-44 lg:pt-5">
        <h1 className="text-center font-poppinsBold text-5xl font-bold">
          LINE CARDS
        </h1>

        <h3 className="text-center font-poppins text-2xl font-bold">
          Here are some of the brands we carry & work with!
        </h3>
        <LineCard />

        <div className="m-auto w-[90vw] pb-10 lg:w-[55%]">
          <BrandContactForm />
        </div>
      </div>
    </>
  );
}
