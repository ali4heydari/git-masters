import Link from "next/link";
import { Layout } from "@components";
import distanceToNow from "@lib/dateRelative";
import { getAllLectures, Lecture } from "@lib/api";
import React from "react";

const Lectures: React.FC<{ allLectures: Lecture[] }> = ({ allLectures }) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Lectures
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
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
};

export default Lectures;

export async function getStaticProps() {
  const allLectures = getAllLectures(["slug", "title", "excerpt", "date"]);

  return {
    props: { allLectures },
  };
}
