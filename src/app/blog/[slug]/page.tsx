import { BlogData } from "../../../../data";
import { getArticleData } from "@/utils/articles";
import getSortedArticles from "@/utils/articles";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {

  const sorted = getSortedArticles()
  const articleData = await getArticleData(params.slug)

  if (articleData.id == "404") {
    notFound();
  }

  return (
    <>
      <div className="pt-48 md:pt-0 container mx-auto pb-20">
        <article className="article" dangerouslySetInnerHTML={{__html: articleData.contentHTML}}/>
      </div>
    </>
  );
}
