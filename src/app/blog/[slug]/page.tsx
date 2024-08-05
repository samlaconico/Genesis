import { getArticleData } from "@/utils/articles";
import getSortedArticles from "@/utils/articles";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sorted = getSortedArticles();
  const articleData = await getArticleData(params.slug);
  const article = sorted.find((o) => o.title === articleData.title);

  return {
    title: articleData.title,
    description: article?.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const sorted = getSortedArticles();
  const articleData = await getArticleData(params.slug);

  if (articleData.id == "404") {
    notFound();
  }

  return (
    <>
      <div className="container mx-auto pb-20 pt-48 lg:pt-5">
        <Link href="/blog">
          <h1 className="px-4 font-poppinsBold underline decoration-white decoration-2 underline-offset-4 hover:decoration-genesis-orange">
            {" "}
            &lt; Back to blog posts
          </h1>
        </Link>
        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
        />
      </div>
    </>
  );
}
