import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { Layout } from "@components";
import markdownToHtml from "@lib/markdownToHtml";
import {
  getAllLectures,
  getItemBySlug,
  Lecture,
  lecturesDirectory,
} from "@lib/api";
import { SITE_NAME } from "@lib/constants";
import React from "react";

interface LecturePageProps {
  lecture: Lecture;
  moreLectures: any;
  preview: any;
}

const LecturePage: React.FC<LecturePageProps> = ({
  lecture,
  moreLectures,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !lecture?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h3>Loading…</h3>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {lecture.title} | {SITE_NAME}
              </title>
              {/*<meta property="og:image" content={lecture.ogImage.url} />*/}
            </Head>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                  <div className="rounded-lg h-64 overflow-hidden">
                    {/*1200*500 image*/}
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={lecture.coverImage}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center text-center justify-center">
                        <p className="text-base">Author</p>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                          {lecture.title}
                        </h2>
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <div className="leading-relaxed text-lg mb-4">
                        <main
                          dangerouslySetInnerHTML={{ __html: lecture.content }}
                        />
                      </div>
                      <div>
                        {lecture.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </>
      )}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const lecture = getItemBySlug<Lecture>(
    params.slug,
    [
      "title",
      "releaseDate",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
      "tags",
    ],
    lecturesDirectory
  );
  const content = await markdownToHtml(lecture.content || "");

  return {
    props: {
      lecture: {
        ...lecture,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const lectures = getAllLectures(["slug"]);

  return {
    paths: lectures.map((lecture) => {
      return {
        params: {
          slug: lecture.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default LecturePage;
