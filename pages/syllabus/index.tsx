import React from "react";
import { Layout } from "@components";

const Index: React.FC = (props) => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {[
                {
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                  icon: (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta error expedita, illum labore maiores nemo nobis, optio perferendis quaerat saepe. Ab animi atque, dicta eaque expedita placeat sed.",
                },
                {
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                  icon: (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta error expedita, illum labore maiores nemo nobis, optio perferendis quaerat saepe. Ab animi atque, dicta eaque expedita placeat sed.",
                },
                {
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                  icon: (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta error expedita, illum labore maiores nemo nobis, optio perferendis quaerat saepe. Ab animi atque, dicta eaque expedita placeat sed.",
                },
                {
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                  icon: (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta error expedita, illum labore maiores nemo nobis, optio perferendis quaerat saepe. Ab animi atque, dicta eaque expedita placeat sed.",
                },
                {
                  title:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                  icon: (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis dicta error expedita, illum labore maiores nemo nobis, optio perferendis quaerat saepe. Ab animi atque, dicta eaque expedita placeat sed.",
                },
              ].map((it) => (
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    {it?.icon}
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      {it.title}
                    </h2>
                    <p className="leading-relaxed">{it.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="https://dummyimage.com/1200x500"
              alt="step"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
