"depricated";

type ServicePageTileParams = {
  title: string;
  descripion: string;
  points: string[];
  headerimg: string;
  bodyimg: string;
};

export default function ServicePageTile({
  title,
  descripion,
  points,
  headerimg,
  bodyimg,
}: ServicePageTileParams) {
  return (
    <>
      <div id={title} className="w-full">
        <div className="pb-10">
          <img
            src={headerimg}
            className="h-[70vh] w-screen object-cover md:h-[35vw]"
          />
        </div>

        <div className="m-auto mx-[5vw] space-y-5">
          <div className="block md:flex md:flex-row md:space-x-24">
            <h1 className="font-poppins text-4xl font-semibold uppercase">
              {title}
            </h1>

            <p className="font-jost text-2xl font-medium">{descripion}</p>
          </div>

          <div className="flex flex-col space-y-14 py-8 pb-14 md:flex-row md:items-start md:space-x-14 md:space-y-0 md:text-start">
            <img
              className="rounded-xl shadow-lg shadow-neutral-500 md:w-1/2"
              src={bodyimg}
            />
            <ul className="list-disc px-4">
              {points.map((value, key) => (
                <li key={key} className="font-jost text-2xl font-medium">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
