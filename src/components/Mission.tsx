import Image from "next/image";

export default function Mission() {
  return (
    <>
      <div className="text-center flex flex-col m-auto py-6 md:pt-32 pb-16 font-sans justify-between">
        <h1 className="text-5xl md:text-5xl font-poppins ">OUR MISSION</h1>

        <p className="m-auto text-xl md:text-3xl xl:w-2/3 w-full py-12 pb-8 md:pb-32 px-8 font-jost">
          Genesis 1 Auto Concepts is committed to excellence in automotive
          craftsmanship. Our mission is to provide innovative solutions,
          personalized service, and unmatched quality to our valued customers.
          We strive to elevate the driving experience by combining cutting-edge
          technology with timeless design.
        </p>

        <div className="md:flex md:flex-row h-3/4 justify-center overflow-hidden ">
          <img src="/images/car1.png" className="opacity-100 transition-opacity hover:opacity-75 object-cover min-w-[33vw]"></img>
          <img src="/images/car2.png" className="opacity-100 transition-opacity hover:opacity-75 object-cover min-w-[33vw]"></img>
          <img src="/images/car3.png" className="opacity-100 transition-opacity hover:opacity-75 object-cover min-w-[33vw]"></img>
        </div>
      </div>
    </>
  )
}
