import React from "react";
import { Layout } from "@components";
import { getAllParticipants, Participant } from "@lib/api";
import Link from "next/link";

const Participants: React.FC<{ allParticipants: Participant[] }> = (props) => {
  const { allParticipants } = props;
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Participants
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Participants in this course
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              {allParticipants.map((it) => (
                <Link
                  key={JSON.stringify(it)}
                  href={`https://github.com/${it.githubUserName}`}
                >
                  <a className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                      src={`https://github.com/${it.githubUserName}.png?size=200`}
                    />
                    <div className="flex-grow">
                      <h2 className="text-red-500 title-font font-medium">
                        {`${it.firstName} ${it.lastName}`}
                      </h2>
                      {it.rate ? (
                        <span className="flex items-center">
                          {new Array(5).fill(null).map((_, idx) => (
                            <svg
                              key={idx}
                              fill={
                                idx + 1 <= it?.rate ? "currentColor" : "none"
                              }
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-indigo-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </span>
                      ) : null}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allParticipants = getAllParticipants([
    "slug",
    "firstName",
    "lastName",
    "githubUserName",
    "rate",
  ]);

  return {
    props: { allParticipants },
  };
}

export default Participants;
