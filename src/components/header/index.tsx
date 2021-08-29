import React, { useMemo } from "react";
import { PUBLIC_URL, SITE_NAME } from "@lib/constants";
import { GitLogo } from "@components/icons";
import { ActiveLink } from "@components/activeLink";

export const Header: React.FC = () => {
  const navLinks = useMemo(
    () => [
      {
        text: "Home",
        href: PUBLIC_URL,
      },
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
      {
        text: "Participants",
        href: "/participants",
      },
    ],
    []
  );

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <GitLogo className="w-10 h-10 text-white p-0 rounded-full" />
          <span className="ml-3 text-xl">{SITE_NAME}</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((it) => (
            <ActiveLink
              activeClassName={
                "bg-red-200 rounded border-2 border-red-400 font-bold"
              }
              href={it.href}
              key={it.href}
            >
              <a className="p-2 hover:text-gray-900">{it.text}</a>
            </ActiveLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
