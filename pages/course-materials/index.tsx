import React, { useMemo } from "react";
import { Layout } from "@components";

const CourseMaterials: React.FC = (props) => {
  const courseMaterials = useMemo(
    () => [
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "this book helps for learning git",
        image: "",
      },
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "this book helps for learning git",
        image: "",
      },
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "this book helps for learning git",
        image: "",
      },
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "this book helps for learning git",
      },
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "this book helps for learning git",
      },
    ],
    []
  );

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              Course materials
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {courseMaterials.map((it) => (
              <div key={it.title} className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt={it.title}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={it?.image || ""}
                  />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      {it.title}
                    </h2>
                    <h3 className="text-gray-500 mb-3">{it?.subTitle || ""}</h3>
                    <p className="mb-4">{it?.description || ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseMaterials;
