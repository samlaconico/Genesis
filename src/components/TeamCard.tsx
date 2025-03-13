type TeamCardParams = {
  name: string;
  title: string;
  img: string;
};

export default function TeamCard({ name, title, img }: TeamCardParams) {
  return (
    <>
      <div className="w-[45vw] object-cover md:h-[75vw] md:py-10 lg:h-[35vw] lg:w-[24vw]">
        <img
          className="h-[80%] w-full object-cover pb-2 opacity-100 transition-opacity hover:opacity-75 md:h-[90%]"
          src={img}
        />
        <h1 className="font-poppins text-xl font-extrabold">{name}</h1>
        <h1 className="font-poppins text-xl font-extrabold">{title}</h1>
      </div>
    </>
  );
}
