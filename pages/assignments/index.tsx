import React, { useMemo } from "react";
import { Layout } from "@components";

const Assignments: React.FC = (props) => {
  const assignments = useMemo(
    () => [
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipisicing elit. Ab amet at cupiditate delectus dignissimos id ipsam, laboriosam quasi repudiandae tempora. Animi ea, illo in ipsa odit omnis quis quod veniam",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipisicing elit. Ab amet at cupiditate delectus dignissimos id ipsam, laboriosam quasi repudiandae tempora. Animi ea, illo in ipsa odit omnis quis quod veniam",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipisicing elit. Ab amet at cupiditate delectus dignissimos id ipsam, laboriosam quasi repudiandae tempora. Animi ea, illo in ipsa odit omnis quis quod veniam",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description:
          "consectetur adipisicing elit. Ab amet at cupiditate delectus dignissimos id ipsam, laboriosam quasi repudiandae tempora. Animi ea, illo in ipsa odit omnis quis quod veniam",
      },
    ],
    []
  );

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Assignments
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {assignments.map((it, idx) => (
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                {idx + 1}
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    {it.title}
                  </h2>
                  <p className="leading-relaxed">{it.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Assignments;
