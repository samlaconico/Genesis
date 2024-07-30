import Services from "@/components/Services";
import { ServiceDataNew } from "../../../data";
import ServicePageTile from "@/components/ServicePageTile";
import ServicePageTileNew from "@/components/ServicePageTileNew";
import { useState } from "react";

export default function ServicesPage() {
  return (
    <>
      <div className="md:pt-0">
        <h1 className="pt-48 lg:pt-0 text-5xl text-center font-bold font-poppinsBold py-4">
          SERVICES
        </h1>
        {ServiceDataNew.map((item, idx) => (
          <ServicePageTileNew
            title={item.title}
            description={item.description}
            images={item.images}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}
