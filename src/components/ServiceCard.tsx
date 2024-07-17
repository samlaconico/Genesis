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
      <div className="bg-neutral-300 p-6 md:p-4 lg:p-6 md:w-[25vw] space-y-2 rounded-xl m-auto shadow-neutral-400 shadow-md hover:scale-[1.01] transition-transform">
        <Link href={`services#${title}`}>
          <div className="container w-full overflow-hidden content-center m-auto">
            <img src={img} className="m-auto rounded-lg" />
          </div>

          <h1 className="text-3xl text-balance font-sans text-center pt-5 font-bold uppercase">
            {title}
          </h1>
        </Link>
      </div>
    </>
  );
}
