import Services from "@/components/Services";
import { ServiceDataNew } from "../../../data";
import ServicePageTile from "@/components/ServicePageTile";
import ServicePageTileNew from "@/components/ServicePageTileNew";
import { useState } from "react";

export default function ServicesPage() {
  return (
    <>
      <div className="md:pb-20 md:pt-0">
        <h1 className="py-4 pt-48 text-center font-poppinsBold text-5xl font-bold lg:pt-0">
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
