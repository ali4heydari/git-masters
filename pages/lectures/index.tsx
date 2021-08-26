import Link from "next/link";
import { Container, Layout } from "@components";
import distanceToNow from "../../src/lib/dateRelative";
import { getAllPosts } from "../../src/lib/api";

export default function NotePage({ allLectures }) {
  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {allLectures.length ? (
              allLectures.map((lecture) => (
                <article
                  key={lecture.slug}
                  className="py-8 flex flex-wrap md:flex-nowrap"
                >
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      CATEGORY
                    </span>
                    <time className="text-sm text-gray-500">
                      {distanceToNow(new Date(lecture.date))}
                    </time>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {lecture.title}
                    </h2>
                    <p className="leading-relaxed">{lecture.excerpt}</p>
                    <Link
                      as={`/lectures/${lecture.slug}`}
                      href="/lectures/[slug]"
                    >
                      <a className="text-indigo-500 inline-flex items-center mt-4">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p>No Lecture posted yet :/</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allLectures = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allLectures },
  };
}
