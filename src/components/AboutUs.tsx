import { AboutUsData } from "../../data";

export default function AboutUsComponent() {
  return (
    <>
      <div className="pb-20">
        <h1 className="pb-10 text-center font-poppinsBold text-5xl lg:pt-0">
          ABOUT US
        </h1>

        <div className="h-[50vh] w-full overflow-hidden object-cover pb-10">
          <img
            src={AboutUsData.img}
            className="m-auto h-full w-full object-cover object-center-down"
          />
        </div>
        <div className="container m-auto px-6 py-10 text-center font-jost text-2xl md:py-0 md:pt-8">
          <p>{AboutUsData.description}</p>
        </div>
      </div>
    </>
  );
}
