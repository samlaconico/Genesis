import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

import type { ArticleItem } from "@/types";

const articlesDirectory = path.join(process.cwd(), "data/articles");

export const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      header: matterResult.data.header,
      description: matterResult.data.description,
    };
  });

  const sortedArticles: ArticleItem[] = allArticlesData.sort((a, b) => {
    const format = "MM-DD-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedArticles;
};

export const getArticleData = async (id: string) => {
  const sorted = getSortedArticles();
  if (sorted.find((o) => o.id === id) === undefined) {
    return {
      id: "404",
      contentHTML: "404",
      title: "404",
      date: "404",
    };
  }

  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();

  return {
    id,
    contentHTML,
    title: matterResult.data.title,
    date: matterResult.data.date,
  };
};

export default getSortedArticles;
