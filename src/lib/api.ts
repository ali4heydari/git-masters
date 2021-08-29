import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const lecturesDirectory = join(process.cwd(), "_markdowns", "_lectures");

const participantsDirectory = join(
  process.cwd(),
  "_markdowns",
  "_participants"
);

export function getItemSlugs(directoryPath: string) {
  return fs.readdirSync(directoryPath);
}

type Lecture = { slug?: string; content?: string; [key: string]: any };
type Participant = {
  slug?: string;
  content?: string;
  firstName: string;
  lastName: string;
  githubUserName?: string;
  twitterUserName?: string;
  rate?: number;
};

export function getItemBySlug<TItem>(
  slug: string,
  fields: (keyof TItem)[] = [],
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
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
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
