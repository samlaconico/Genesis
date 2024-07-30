import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import { BsYelp } from "react-icons/bs";
import { BsMeta } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="h-[30vh] w-full flex flex-col md:flex-row justify-evenly font-bold flex-grow p-2 md:p-8 bg-neutral-200 border-t-neutral-400">
        <div className="flex-col md:space-y-3 flex justify-center">
          <img
            src="/images/logo.png"
            alt="genesis1 logo"
            className="size-32 md:size-[10vw] self-center"
          />
          <div className="flex flex-row justify-center space-x-4">
            <Link href="https://www.instagram.com/genesis1autoconcepts/">
              <BsInstagram className="size-8"/>
            </Link>
            <Link href="https://www.facebook.com/genesis1autoconcepts/">
              <BsMeta className="size-8"/>
            </Link>
            <Link href="https://www.yelp.com/biz/genesis-1-auto-concepts-valencia">
              <BsYelp className="size-8"/>
            </Link>
          </div>
        </div>

        <div className="flex flex-col text-center md:text-start text-md md:text-2xl font-jost md:space-y-2 md:text-nowrap justify-center px-3">
          <h1>24922 Anza Dr Santa Clarita, CA 91355</h1>
          <h1>Santa Clarita, CA 91355</h1>
          <h1>(661) 678-0990</h1>
        </div>

        <div className="hidden md:flex flex-col text-2xl font-poppins justify-around text-end px-3">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about-us" className="text-nowrap">
            ABOUT US
          </Link>
        </div>

        <div className="hidden md:flex flex-col h-full overflow-hidden w-[50vw]">
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
