import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";

export default function Header() {
  return (
    <div>
      <h1 className="bg-genesis-orange w-full text-white text-center p-1">
        WE ARE NOW LOCATED AT 24922 Anza Dr Valencia, CA 91355
      </h1>

      <div className="py-3 flex-row flex w-full justify-center">
        <Link href="/">
          <img src="images/logo.png" className="h-24"/>
        </Link>
        <div className="hidden md:flex flex-row space-x-12 self-center text-2xl">
          <Link href="/">HOME</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/about">ABOUT US</Link>
        </div>
      </div>
    </div>
  );
}
