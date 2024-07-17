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
            className="w-screen h-[70vh] md:h-[35vw] object-cover"
          />
        </div>

        <div className="m-auto mx-[5vw] space-y-5">
          <div className="block md:flex-row md:flex md:space-x-24" >
          <h1 className="text-4xl font-semibold uppercase">{title}</h1>

          <p className="text-2xl font-sans font-medium">{descripion}</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 md:text-start md:items-start md:space-x-14 py-8 pb-14">
            <img
              className="md:w-1/2 rounded-xl shadow-lg shadow-neutral-500"
              src={bodyimg}
            />
            <ul className="list-disc ">
              {points.map((value) => (
                <li className="text-sans font-medium text-2xl">{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
