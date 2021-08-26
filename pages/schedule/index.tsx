import React from "react";
import { Layout } from "@components";

const Index: React.FC = (props) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Schedule
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
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
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Assignment
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {new Date().toISOString()}
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores temporibus, voluptate. A ab accusamus aperiam
                    corporis ducimus ea earum optio repudiandae voluptates
                    voluptatum? Aliquid animi eligendi totam? A, commodi modi.
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    <a>Link</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
