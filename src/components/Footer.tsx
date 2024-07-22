import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="h-[30vh] w-full flex flex-row justify-between flex-grow p-8 bg-neutral-200 border-t-neutral-400">
        <div className="flex-col flex justify-center">
          <img
            src="images/logo.png"
            alt="genesis1 logo"
            className=""
          />

          <h1 className="text-center"> asoidsh</h1>
        </div>

        <div className="flex flex-col text-2xl font-poppins justify-center">
          <h1>24922 Anza Dr Santa Clarita, CA 91355</h1>
          <h1>(661) 678-0990</h1>
        </div>

        <div className="hidden md:flex flex-col text-2xl font-poppins justify-around text-end px-10">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about-us" className="text-nowrap">ABOUT US</Link>
        </div>
        
        <div className="hidden md:flex flex-col h-full w-[50vw]">
        <GoogleMapsEmbed
          apiKey={process.env.MAP_API || ""}
          height="210%"
          width="100%"
          mode="place"
          q="24922 Anza Dr Valencia, CA 91355"
          style=""
        />
        </div>
      </div>
    </>
  );
}
