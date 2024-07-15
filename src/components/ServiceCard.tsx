import Image, { StaticImageData } from "next/image";

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
      <div className="bg-neutral-300 p-6 md:p-4 lg:p-6 md:w-[30vw] m-auto shadow-lg hover:scale-[1.01] transition-transform">
        <div className="container w-full overflow-hidden content-center m-auto">
          <img src={img} className="m-auto rounded-md"/>
        </div>

        <h1 className="text-2xl py-6 font-semibold">{title}</h1>

        <p className="text-lg font-semibold">{description}</p>
      </div>
    </>
  );
}
