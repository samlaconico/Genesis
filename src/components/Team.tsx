import { TeamData } from "../../data";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <>
      <div className="pb-10">
        <h1 className="py-12 text-center font-poppinsBold text-5xl md:pt-0">
          MEETING THE TEAM
        </h1>
        <div className="flex flex-wrap justify-between px-3 text-center md:flex-row md:px-0">
          {TeamData.map((item, key) => (
            <TeamCard
              key={key}
              name={item.name}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}
