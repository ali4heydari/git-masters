import React from "react";
import { Layout } from "@components";
import { Assignment, getAllAssignments } from "@lib/api";
import Link from "next/link";

const Assignments: React.FC<{
  allAssignments: Assignment[];
}> = ({ allAssignments }) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Assignments
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This assignments helps you to practice and having deep understanding
            of concepts.
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {allAssignments.map((it, idx) => (
            <div
              key={`${it.title}-${it?.dueDate}`}
              className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
            >
              <div>
                {it.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mx-1"
                  >
                    {tag}
                  </span>
                ))}

                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">
                  {it.title}
                </h2>
                <p className="leading-relaxed mb-8">{it.excerpt}</p>
                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <Link
                    as={`/assignments/${it.slug}`}
                    href="/assignments/[slug]"
                  >
                    <a className="text-red-500 inline-flex items-center">
                      More
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
                  <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    {it.dueDate}
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                    {it.solution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allAssignments = getAllAssignments([
    "title",
    "documentation",
    "dueDate",
    "releaseDate",
    "attachment",
    "slug",
    "solution",
    "tags",
    "excerpt",
  ]);

  return {
    props: { allAssignments },
  };
}

export default Assignments;
