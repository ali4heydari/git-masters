import React from "react";
import { Layout } from "@components";
import { getAllAssignments, getAllLectures, IEvent } from "@lib/api";
import Link from "next/link";

const Schedule: React.FC<{
  allEvents: IEvent[];
}> = ({ allEvents }) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Schedule
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Here you can find all lectures and assignments
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Event
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Date
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Description
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Course material
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
                </tr>
              </thead>
              <tbody>
                {allEvents.map((event) => (
                  <tr key={event.title}>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {event?.type}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {`${new Date(event.releaseDate).toLocaleDateString(
                        "en-US"
                      )} - ${new Date(event.releaseDate).toLocaleTimeString(
                        "en-US"
                      )}`}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">
                      {event.title}
                    </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                      <Link
                        href={
                          event.type === "ASSIGNMENT"
                            ? "/assignments/[slug]"
                            : "/lectures/[slug]"
                        }
                        as={
                          event.type === "ASSIGNMENT"
                            ? `/assignments/${event.slug}`
                            : `/lectures/${event.slug}`
                        }
                      >
                        <a className="text-red-500 hover:bg-red-50 underline rounded px-1">
                          More
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const allLectures: IEvent[] = getAllLectures([
    "type",
    "title",
    "slug",
    "releaseDate",
  ]);

  const allAssignments: IEvent[] = getAllAssignments([
    "type",
    "title",
    "slug",
    "releaseDate",
  ]);

  const allEvents: IEvent[] = [...allLectures, ...allAssignments].sort(
    (event1, event2) => (event1.releaseDate > event2.releaseDate ? -1 : 1)
  );

  return {
    props: { allEvents },
  };
}

export default Schedule;
