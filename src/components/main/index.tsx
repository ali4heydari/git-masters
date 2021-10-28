import React from "react";
import Link from "next/link";
import envs from "../../../envs";
import { Image } from "@components";

export const Main: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
        <Image
          alt="hero"
          className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded relative"
          src={`${envs.basePath}/images/git-cover.jpeg`}
        />

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Now is the moment to learn Git
          </h1>
          <p className="mb-8 leading-relaxed">
            Git is the world&apos;s most popular Version Control System (VCS),
            It allows you to keep track of your development&apos;s history,
            reverse your code in case of a failure, and collaborate successfully
            with others.
          </p>
          <div className="flex justify-center">
            <Link href="/syllabus">
              <a className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Syllabus
              </a>
            </Link>
            <Link href="/lectures">
              <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Lectures
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
