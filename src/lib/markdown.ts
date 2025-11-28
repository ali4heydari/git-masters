import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export const lecturesDirectory = path.join(process.cwd(), "_markdowns", "_lectures");
export const participantsDirectory = path.join(process.cwd(), "_markdowns", "_participants");

export function getSlugs(directory: string) {
  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getItemBySlug(directory: string, slug: string) {
  const fullPath = path.join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the lecture frontmatter
  const { data, content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter: data,
    contentHtml,
  };
}

export async function getAllLectures() {
  const slugs = getSlugs(lecturesDirectory);
  const lectures = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getItemBySlug(lecturesDirectory, slug);
      return {
        slug,
        frontmatter,
      };
    })
  );

  return lectures.sort((a, b) => {
    const dateA = new Date(a.frontmatter.releaseDate);
    const dateB = new Date(b.frontmatter.releaseDate);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getAllContributors() {
  const slugs = getSlugs(participantsDirectory);

  return await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getItemBySlug(participantsDirectory, slug);
      return {
        slug,
        frontmatter,
      };
    })
  );
}
