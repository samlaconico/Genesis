import { BlogData } from "../../../data";
import Link from "next/link";
import { title } from "process";
import getSortedArticles from "@/utils/articles";

export default function Blog() {
  const articles = getSortedArticles().reverse();
  console.log(articles);

  return (
    <>
      <div className="container m-auto px-4 lg:pt-5 pt-44 pb-10">
        <h1 className="text-center font-poppinsBold text-5xl font-bold pb-10">
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
            <div className="pb-24">
              <div className="pb-10" key={value.title}>
                <Link href={`/blog/${value.id}`}>
                  <img src={value.header} className="w-full"></img>
                </Link>
                <Link href={`/blog/${value.id}`}>
                  <h1 className="py-10 font-poppinsBold text-4xl underline decoration-white underline-offset-8 transition-all hover:decoration-genesis-orange">
                    {value.title}
                  </h1>
                </Link>
                <div className="flex flex-row space-x-4">
                  <p className="font-jost text-xl">{value.description}</p>
                  <Link href={`/blog/${value.id}`} className="text-white">
                    <div className="m-auto w-28 text-nowrap rounded-xl bg-genesis-orange p-2 text-center text-xl transition-all hover:scale-105">
                      See More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
