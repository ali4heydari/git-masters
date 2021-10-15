import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { Layout } from "@components";
import markdownToHtml from "@lib/markdownToHtml";
import { Image } from "@components";
import {
  getAllAssignments,
  getItemBySlug,
  Assignment,
  assignmentsDirectory,
} from "@lib/api";
import { SITE_NAME } from "@lib/constants";
import React from "react";
import styled from "styled-components";
import { DiscussionEmbed } from "disqus-react";
import { domain, basePath } from "../../envs";

interface AssignmentPageProps {
  assignment: Assignment;
  moreAssignments: any;
  preview: any;
}

const GitHubMarkdown = styled.main`
  a {
    color: red;
    border-radius: 10px;
    padding: 0px 4px;
    text-decoration: underline;
  }

  a:hover {
    background: #f1dada;
  }

  ol li {
    list-style-type: decimal;
  }
`;

const AssignmentPage: React.FC<AssignmentPageProps> = ({
  assignment,
  moreAssignments,
  preview,
}) => {
  const router = useRouter();

  if (!router.isFallback && !assignment?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const disqusConfig = {
    url: `${domain}${router.basePath}/${assignment.slug}`,
    identifier: assignment.slug,
    title: assignment.title,
  };

  return (
    <Layout>
      {router.isFallback ? (
        <h3>Loading…</h3>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {assignment.title} | {SITE_NAME}
              </title>
              <meta
                property="og:image"
                content={`${basePath}/images/git-cover.jpeg`}
              />
            </Head>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                  <div className="rounded-lg h-64 overflow-hidden">
                    {/*1200*500 image*/}
                    <Image
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={`${basePath}/images/git-cover.jpeg`}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:pl-8 sm:py-8 border-l border-r border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                      <div className="leading-relaxed text-lg mb-4">
                        <GitHubMarkdown
                          className="markdown-body"
                          dangerouslySetInnerHTML={{
                            __html: assignment.content,
                          }}
                        />
                      </div>
                      <div className="mt-20 pt-2 border-t-2 border-gray-200">
                        <span>Tags:</span>
                        {assignment.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="ml-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <DiscussionEmbed
                        shortname={"ali4heydari-tech"}
                        config={disqusConfig}
                      />
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

export async function getStaticProps({ params }: any) {
  const assignment = getItemBySlug<Assignment>(
    params.slug,
    ["title", "releaseDate", "slug", "content", "tags"],
    assignmentsDirectory
  );
  const content = await markdownToHtml(assignment.content || "");

  return {
    props: {
      assignment: {
        ...assignment,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const assignments = getAllAssignments(["slug"]);

  return {
    paths: assignments.map((assignment) => {
      return {
        params: {
          slug: assignment.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default AssignmentPage;
