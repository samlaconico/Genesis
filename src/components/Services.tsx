import service1 from "../../public/images/service1.png";
import ServiceCard from "./ServiceCard";
import { ServiceData } from "../../data";

export default function Services() {
  return (
    <>
      <h1 className="text-5xl text-center font-sans font-semibold">SERVICES OFFERED</h1>
      <div className="w-full flex flex-wrap flex-row p-16 m-auto gap-8 ">
        {ServiceData.map((item, idx) => (
          <ServiceCard
            title={item.title}
            description={item.description}
            img={item.headerimg}
            key={idx}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
}
