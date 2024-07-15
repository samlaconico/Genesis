import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="h-[30vh] w-full flex flex-row justify-between p-8 bg-neutral-200 border-t-neutral-400 border-t-2">
        <div>
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="genesis1 logo"
            className="size-full"
          />
        </div>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-hv5qvorhz6/locator-plus/dn47/locator-plus.html"
          width="50%"
          height="100%"
          className="hidden md:block rounded-lg"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
