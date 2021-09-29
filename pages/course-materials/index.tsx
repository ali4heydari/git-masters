import React, { useMemo } from "react";
import { Layout } from "@components";
import envs from "../../envs";
import Link from "next/link";

const CourseMaterials: React.FC = (props) => {
  const courseMaterials = useMemo(
    () => [
      {
        title: "Git pro",
        subTitle: "2nd edition",
        description: "by Scott Chacon and Ben Straub",
        image: `${envs.basePath}/images/pro-git.jpg`,
        href: "https://git-scm.com/book/en/v2",
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
              This materials helps you to learn and understand concepts
            </p>
          </div>
          <div className="flex flex-wrap">
            {courseMaterials.map((it) => (
              <Link href={it?.href} key={it.title}>
                <a className="p-4 lg:w-1/3 md:w-1/2 hover:bg-red-100 ">
                  <div className="h-full flex flex-col items-center text-center">
                    {it?.image && (
                      <img
                        alt={it.title}
                        className="flex-shrink-0 rounded-lg w-full h-96 object-cover object-center mb-4 block"
                        src={it?.image}
                      />
                    )}
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {it.title}
                      </h2>
                      <h3 className="text-gray-500 mb-3">
                        {it?.subTitle || ""}
                      </h3>
                      <p className="mb-4">{it?.description || ""}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseMaterials;
