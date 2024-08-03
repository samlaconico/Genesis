import { InstagramData } from "../../data";
import Link from "next/link";

export default function InstagramFeed() {
  return (
    <>
      <div className="grid w-full grid-cols-4 bg-white">
        {InstagramData.map((index, key) => (
          <div
            className="aspect-square h-full w-full overflow-hidden object-cover"
            key={key}
          >
            <Link href={index.link} rel="noopener noreferrer" target="_blank">
              <img
                src={index.image}
                className="m-auto h-full w-full object-cover object-center transition-all hover:scale-[1.01] hover:opacity-60"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
