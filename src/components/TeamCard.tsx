type TeamCardParams = {
  name: string;
  title: string;
  img: string;
};

export default function TeamCard({ name, title, img }: TeamCardParams) {
  return (
    <>
      <div className="w-[45vw] lg:w-[22vw] md:h-[75vw] lg:h-[35vw] object-cover md:py-10">
        <img className="object-cover w-full h-[80%] md:h-[90%] pb-2 opacity-100 transition-opacity hover:opacity-75" src={img} />
        <h1 className="font-extrabold text-xl">{name}</h1>
        <h1 className="font-extrabold text-xl">{title}</h1>
      </div>
    </>
  );
}
