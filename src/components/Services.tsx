import service1 from "../../public/images/service1.png";
import ServiceCard from "./ServiceCard";
import { ServiceDataNew } from "../../data";

export default function Services() {
  return (
    <>
      <h1 className="text-4xl text-center font-poppinsBold">SERVICES OFFERED</h1>
      <div className="w-full flex flex-wrap flex-row px-8 py-16 md:p-16 m-auto gap-8 ">
        {ServiceDataNew.map((item, idx) => (
          <ServiceCard
            title={item.title}
            description={item.description}
            img={item.images[0]}
            key={idx}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
}
