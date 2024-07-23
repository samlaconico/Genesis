import Services from "@/components/Services";
import { ServiceData } from "../../../data";
import ServicePageTile from "@/components/ServicePageTile";

export default function ServicesPage() {
  return (
    <>
    <div className="pt-36 md:pt-0">
    <h1 className="pt-48 md:pt-0 text-5xl text-center font-poppins py-4">
          SERVICES
        </h1>
      {ServiceData.map((item, idx) => (
        <ServicePageTile title={item.title} descripion={item.description} headerimg={item.headerimg} bodyimg={item.bodyimg} points={item.points} key={idx}/>
      ))}
      </div>
    </>
  );
}
