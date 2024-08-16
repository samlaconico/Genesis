import BrandContactForm from "@/components/BrandContactForm";
import LinkLayout from "@/components/Links";

export default function Links() {
  return (
    <>
      <div className="m-auto pb-20 pt-44 lg:pt-5 space-y-12">
        <LinkLayout />

        <div className="m-auto w-[90vw] pb-10 lg:w-[55%]">
          <BrandContactForm/>
        </div>
      </div>
    </>
  );
}
