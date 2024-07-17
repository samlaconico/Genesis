"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <div>
      <h1 className="bg-genesis-orange w-full text-white text-center p-1">
        WE ARE NOW LOCATED AT 24922 Anza Dr Valencia, CA 91355
      </h1>

      <div className="py-3 flex-row flex w-full justify-center">
        <Link href="/">
          <img src="images/logo.png" className="h-24" />
        </Link>
        <div className="hidden lg:flex flex-row space-x-12 self-center font-medium font-sans text-2xl">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about">ABOUT US</Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="self-center bg-red-400 hover:cursor-pointer lg:hidden"
        >
          icon
        </div>

        <ul className={nav ? "absolute w-screen text-center h-[50vh] bg-yellow-400 z-50" : "hidden"}>
          <li>
            <Link onClick={() => setNav(!nav)} href="/">HOME</Link>
          </li>
          <li>
            <Link onClick={() => setNav(!nav)} href="/services">SERVICES</Link>
          </li>
          <li>
            <Link onClick={() => setNav(!nav)} href="/contact">CONTACT</Link>
          </li>
          <li>
            <Link onClick={() => setNav(!nav)} href="/about">ABOUT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
