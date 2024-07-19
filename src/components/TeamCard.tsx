type TeamCardParams = {
  name: string;
  title: string;
  img: string;
};

export default function TeamCard({ name, title, img }: TeamCardParams) {
  return (
    <>
      <div className="w-[45vw] lg:w-[22vw] md:h-[45vw] object-cover">
        <img className="object-cover w-full h-[80%] md:h-[90%] pb-2" src={img} />
        <h1 className="font-extrabold text-xl">{name}</h1>
        <h1 className="font-extrabold text-xl">{title}</h1>
      </div>
    </>
  );
}
