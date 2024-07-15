import service1 from "../../public/images/service1.png";
import ServiceCard from "./ServiceCard";

const ServiceData = [
  {
    title: "GENERAL MAINTENANCE",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service1.png",
  },
  {
    title: "PERFORMANCE",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service2.png",
  },
  {
    title: "SUSPENSION",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service2.png",
  },
  {
    title: "VINYL WRAP & TINT",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service1.png",
  },
  {
    title: "AUDIO",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service2.png",
  },
  {
    title: "WHEELS & TIRES",
    description:
      "Genesis 1 Auto Concepts is committed to excellence in automotive craftsmanship. Our mission is to provide innovative solutions, personalized service, and unmatched quality to our valued customers.",
    img: "/images/service1.png",
  },
];

export default function Services() {
  return (
    <>
      <h1 className="text-5xl text-center font-semibold">SERVICES OFFERED</h1>
      <div className="w-full flex flex-wrap flex-row p-16 m-auto gap-8 ">
        {ServiceData.map((item, idx) => (
          <ServiceCard
            title={item.title}
            description={item.description}
            img={item.img}
            key={idx}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
}
