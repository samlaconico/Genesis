export default function LineCard() {
  return (
    <div className="m-auto grid w-4/6 grid-flow-row-dense grid-cols-2 content-around items-end justify-evenly justify-items-center space-y-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
      <LineItems title="title" img="title" />
    </div>
  );
}

export function LineItems({ title, img }: { title: string; img: string }) {
  return (
    <>
      <div className="text-center">
        <h1>title</h1>
        <div className="size-48 border-4 border-black bg-yellow-400" />
      </div>
    </>
  );
}
