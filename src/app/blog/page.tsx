import { BlogData } from "../../../data";
import Link from "next/link";
import { title } from "process";
import getSortedArticles from "@/utils/articles";

export default function Blog() {
  const articles = getSortedArticles().reverse();
  console.log(articles);

  return (
    <>
      <div className="px-4 container m-auto pb-10">
        <h1 className="pt-48 lg:pt-0 pb-10 text-5xl text-center font-bold font-poppinsBold py-4">
          BUILDS, BLOGS, AND EVENTS
        </h1>

        {/*BlogData.map((item, key) => (
          <>
            <div key={key} className="pb-10">
              <img src={item.images[0]} className="w-full"></img>

              <h1 className="py-10 text-4xl font-poppinsBold">{item.title}</h1>
              <div className="flex flex-row space-x-4">
                <p className="font-jost text-xl">{item.description}</p>
                <div className="w-56 bg-genesis-orange text-center m-auto rounded-xl text-2xl text-nowrap p-2">
                  <Link href={`/blog/${item.title}`}>See More</Link>
                </div>
              </div>
            </div>
          </>
        ))*/}

        {articles.map((value) => (
          <>
            <div className="pb-10" key={value.title}>
              <Link href={`/blog/${value.id}`}>
                <img src={value.header} className="w-full"></img>
              </Link>
              <Link href={`/blog/${value.id}`}>
                <h1 className="py-10 underline hover:decoration-genesis-orange decoration-white transition-all underline-offset-8 text-4xl font-poppinsBold">
                  {value.title}
                </h1>
              </Link>
              <div className="flex flex-row space-x-4">
                <p className="font-jost text-xl">{value.description}</p>
                <div className="w-28 bg-genesis-orange text-center m-auto rounded-xl hover:scale-105 transition-all text-2xl text-nowrap p-2">
                  <Link href={`/blog/${value.id}`} className="">See More</Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
