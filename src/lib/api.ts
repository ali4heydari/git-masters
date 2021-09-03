import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const lecturesDirectory = join(process.cwd(), "_markdowns", "_lectures");

export const participantsDirectory = join(
  process.cwd(),
  "_markdowns",
  "_participants"
);

export function getItemSlugs(directoryPath: string) {
  return fs.readdirSync(directoryPath);
}

export interface IMarkdownItem {
  slug?: string;
  content?: string;
  [key: string]: any;
}

export interface Lecture {
  slug?: string;
  content: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  name: string;
  picture: string;
  ogImage: string;
  url: string;
  tags: string[];
}

export interface Participant {
  slug?: string;
  content?: string;
  firstName: string;
  lastName: string;
  githubUserName?: string;
  twitterUserName?: string;
  rate?: number;
}

export function getItemBySlug<TItem extends IMarkdownItem>(
  slug: string,
  fields: (keyof TItem)[],
  directoryPath: string
): TItem {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directoryPath, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // @ts-ignore
  const items: TItem = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      // @ts-ignore
      items[field] = realSlug;
    }
    if (field === "content") {
      // @ts-ignore
      items[field] = content;
    }

    // @ts-ignore
    if (data[field]) {
      // @ts-ignore
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllItems<TItem>(
  directoryPath: string,
  fields: (keyof TItem)[] = [],
  compareFn?: (a: TItem, b: TItem) => number
) {
  const slugs = getItemSlugs(directoryPath);

  return (
    slugs
      .map((slug) => getItemBySlug<TItem>(slug, fields, directoryPath))
      // sort posts by date in descending order
      .sort(compareFn)
  );
}

export const getAllLectures = (fields: (keyof Lecture)[] = []) =>
  getAllItems<Lecture>(lecturesDirectory, fields, (lecture1, lecture2) =>
    lecture1.date > lecture2.date ? -1 : 1
  );

export const getAllParticipants = (fields: (keyof Participant)[] = []) =>
  getAllItems<Participant>(
    participantsDirectory,
    fields,
    (participant1, participant2) =>
      participant1.lastName > participant2.lastName ? -1 : 1
  );
