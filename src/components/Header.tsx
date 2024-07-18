"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import { useEffect, useState } from "react";

const ListItemStyle: string = "p-6 border-t-2 hover:bg-neutral-300";

export default function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <div>
      <h1 className="bg-genesis-orange fixed md:static w-full text-white text-center z-30 p-1">
        WE ARE NOW LOCATED AT 24922 Anza Dr Valencia, CA 91355
      </h1>

      <div className="py-3 fixed bg-white md:static top-8 flex-row flex w-full justify-between px-10 md:justify-center z-50 border-b-2 md:border-b-0">
        <Link href="/">
          <img src="images/logo.png" className="h-24" />
        </Link>
        <div className="hidden md:flex flex-row space-x-12 self-center font-medium font-sans text-2xl">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about-us">ABOUT US</Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="self-center bg-red-400 hover:cursor-pointer md:hidden"
        >
          icon
        </div>

        <div
          className={
            nav
              ? "fixed md:hidden top-0 right-0 w-[300px] h-screen bg-white z-50 duration-300"
              : "fixed md:hidden top-0 right-[-100%] w-[300px] h-screen bg-white z-50 duration-300"
          }
        >
          <h1
            onClick={() => {
              setNav(!nav);
            }}
            className="text-end"
          >
            icon
          </h1>
          <ul>
            <Link onClick={() => setNav(!nav)} href="/">
              <li className={ListItemStyle}>HOME</li>
            </Link>
            <Link onClick={() => setNav(!nav)} href="/services">
              <li className={ListItemStyle}>SERVICES</li>
            </Link>
            <Link onClick={() => setNav(!nav)} href="/contact">
              <li className={ListItemStyle}>CONTACT</li>
            </Link>
            <Link onClick={() => setNav(!nav)} href="/about-us">
              <li className={`${ListItemStyle} border-b-2`}>ABOUT US</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
