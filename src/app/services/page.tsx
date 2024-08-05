import Services from "@/components/Services";
import { ServiceDataNew } from "../../../data";
import ServicePageTile from "@/components/ServicePageTile";
import ServicePageTileNew from "@/components/ServicePageTileNew";
import { useState } from "react";

export default function ServicesPage() {
  return (
    <>
      <div className="pb-20 lg:pt-5 pt-44">
        <h1 className="text-center font-poppinsBold text-5xl font-bold pb-5">
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
