import { InstagramData } from "../../data";
import Link from "next/link";

export default function InstagramFeed() {
  return (
    <>
      <div className="w-full bg-white grid grid-cols-4">
        {InstagramData.map((index, key) => (
          <div className="w-full h-full aspect-square object-cover overflow-hidden" key={key}>
          
          <Link href={index.link} rel="noopener noreferrer" target="_blank">
          <img
            src={index.image}
            className=" h-full w-full object-cover object-center m-auto hover:opacity-60 transition-all hover:scale-[1.01] "
          />
          </Link>
        </div>
        ))}
        
      </div>
    </>
  );
}
