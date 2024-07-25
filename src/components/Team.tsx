import { TeamData } from "../../data";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <>
      <div className="pb-10">
        <h1 className="py-12 md:pt-0 text-5xl text-center font-poppinsBold">
          MEETING THE TEAM
        </h1>
        <div className="flex px-3 md:px-0 md:flex-row flex-wrap justify-between text-center ">
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
