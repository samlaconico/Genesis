import service1 from "../../public/images/service1.png";
import ServiceCard from "./ServiceCard";
import { ServiceDataNew } from "../../data";

export default function Services() {
  return (
    <>
      <h1 className="text-center font-poppinsBold text-4xl">
        SERVICES OFFERED
      </h1>
      <div className="m-auto flex w-full flex-row flex-wrap gap-8 px-8 py-16 md:p-16">
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
