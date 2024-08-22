import BrandContactForm from "@/components/BrandContactForm";
import LineCard from "@/components/LineCard";

export default function Links() {
  return (
    <>
      <div className="m-auto pb-20 pt-44 lg:pt-5 space-y-12">
        <LineCard />

        <div className="m-auto w-[90vw] pb-10 lg:w-[55%]">
          <BrandContactForm/>
        </div>
      </div>
    </>
  );
}
