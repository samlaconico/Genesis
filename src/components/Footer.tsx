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
      <div className="flex w-full flex-grow flex-col justify-center border-t-neutral-400 bg-neutral-300 p-2 font-bold md:flex-row md:justify-between md:p-8">
        <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-3">
          <div className="flex flex-col justify-center md:space-y-3">
            <img
              src="/images/logo.png"
              alt="genesis1 logo"
              className="size-28 self-center md:size-[10vw]"
            />
            <div className="flex flex-row justify-center space-x-4 self-center">
              <Link href="https://www.instagram.com/genesis1autoconcepts/">
                <BsInstagram className="size-8" />
              </Link>
              <Link href="https://www.facebook.com/genesis1autoconcepts/">
                <BsMeta className="size-8" />
              </Link>
              <Link href="https://www.yelp.com/biz/genesis-1-auto-concepts-valencia">
                <BsYelp className="size-8" />
              </Link>
            </div>
          </div>

          <div className="text-md flex flex-col justify-center px-3 text-center font-jost md:space-y-2 lg:text-start lg:text-xl">
            <h1>24922 Anza Dr, Valencia, CA 91355</h1>
            <h1>(661) 678-0990</h1>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="hidden flex-col justify-around px-3 text-end font-poppins text-2xl md:flex">
            <Link href="/">HOME</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/contact">CONTACT</Link>
            <Link href="/about-us" className="text-nowrap">
              ABOUT US
            </Link>
          </div>

          <div className="hidden h-full w-[50vw] flex-col overflow-hidden rounded-md md:flex">
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
      </div>
    </>
  );
}
