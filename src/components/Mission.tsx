import Image from "next/image";

export default function Mission() {
  return (
    <>
      <div className="m-auto flex flex-col justify-between py-6 pb-16 text-center font-sans md:pt-32">
        <h1 className="font-poppinsBold text-5xl md:text-5xl">OUR MISSION</h1>

        <p className="m-auto w-full px-8 py-12 pb-8 font-jost text-xl md:pb-32 md:text-3xl xl:w-2/3">
          Genesis 1 Auto Concepts is committed to excellence in automotive
          craftsmanship. Our mission is to provide innovative solutions,
          personalized service, and unmatched quality to our valued customers.
          We strive to elevate the driving experience by combining cutting-edge
          technology with timeless design.
        </p>

        <div className="h-[35vw] justify-center overflow-hidden md:flex md:flex-row">
          <img
            src="/images/homepage/mission1.jpg"
            className="z-10 min-w-[26vw] object-cover opacity-100 transition-transform hover:z-20 hover:scale-110"
          ></img>
          <img
            src="/images/homepage/mission2.jpg"
            className="z-10 min-w-[48vw] object-cover opacity-100 transition-transform hover:z-20 hover:scale-110"
          ></img>
          <img
            src="/images/homepage/mission3.jpg"
            className="z-10 min-w-[26vw] object-cover opacity-100 transition-transform hover:z-20 hover:scale-110"
          ></img>
        </div>
      </div>
    </>
  );
}
