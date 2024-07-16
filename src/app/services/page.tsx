import Services from "@/components/Services";
import { ServiceData } from "../../../data";
import ServicePageTile from "@/components/ServicePageTile";

export default function ServicesPage() {
  return (
    <>
    <div>
      {ServiceData.map((item, idx) => (
        <ServicePageTile title={item.title} descripion={item.description} img={item.img} key={idx}/>
      ))}
      </div>
    </>
  );
}
