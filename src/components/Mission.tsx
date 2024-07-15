import Image from "next/image";

export default function Mission() {
  return (
    <>
      <div className="text-center flex flex-col m-auto py-6 md:py-16 justify-between">
        <h1 className="text-3xl md:text-5xl font-semibold">OUR MISSION</h1>

        <p className="m-auto text-md md:text-xl font-semibold xl:w-1/3 w-full py-6 md:py-16 px-8">
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
