import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ServiceCardParams = {
  title: string;
  description: string;
  img: string;
};

export default function ServiceCard({
  title,
  description,
  img,
}: ServiceCardParams) {
  return (
    <>
      <Link
        href={`services#${title}`}
        className="m-auto h-[30vw] w-screen flex-col justify-center bg-cover text-center shadow-md shadow-neutral-400 brightness-100 transition-transform hover:scale-[1.01] md:w-[25vw]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex h-full w-full bg-white/20 hover:bg-white/60">
          <h1 className="m-auto text-center font-poppins text-2xl font-semibold uppercase text-black lg:text-4xl">
            {title}
          </h1>
        </div>
      </Link>
    </>
  );
}
