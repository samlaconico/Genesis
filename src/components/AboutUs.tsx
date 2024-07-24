import { AboutUsData } from "../../data";

export default function AboutUsComponent() {
  return (
    <>
      <div className="md:pb-20">
        <h1 className="pt-48 md:pt-0 text-5xl text-center font-poppins py-4">
          ABOUT US
        </h1>

        <div className="w-full h-[50vh] pb-10 object-cover overflow-hidden">
          <img
            src={AboutUsData.img}
            className="m-auto w-full h-full object-cover"
          />
        </div>
        <div className="py-10 md:py-0 md:pt-8 container text-center pr-10 text-2xl font-jost m-auto">
          <p>{AboutUsData.description}</p>
        </div>
      </div>
    </>
  );
}
