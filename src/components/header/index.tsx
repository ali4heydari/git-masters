import React, { useMemo } from "react";
import Link from "next/link";
import { SITE_NAME } from "../../lib/constants";

export const Header: React.FC = () => {
  const navLinks = useMemo(
    () => [
      {
        text: "Syllabus",
        href: "/syllabus",
      },
      {
        text: "Schedule",
        href: "/schedule",
      },
      {
        text: "Assignments",
        href: "/assignments",
      },
      {
        text: "Lectures",
        href: "/lectures",
      },
      {
        text: "Course materials",
        href: "/course-materials",
      },
    ],
    []
  );

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">{SITE_NAME}</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((it) => (
            <Link href={it.href} key={it.href}>
              <a className="mr-5 hover:text-gray-900">{it.text}</a>
            </Link>
          ))}
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};
