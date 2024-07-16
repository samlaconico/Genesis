type ServicePageTileParams = {
  title: string;
  descripion: string;
  img: string;
};

export default function ServicePageTile({
  title,
  descripion,
  img,
}: ServicePageTileParams) {
  return (
    <>
      <div className="w-full py-4">
        <div className="pb-10">
          <img src={img} className="w-screen h-[35vw] object-cover"></img>
        </div>

        <div className="px-5 space-y-5">
          <h1 className="text-3xl font-semibold">{title}</h1>

          <p className="text-xl font-medium w-[50vw]">{descripion}</p>
        </div>
      </div>
    </>
  );
}
