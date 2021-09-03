import React, { useMemo } from "react";
import { Layout } from "@components";
import {
  ClockIcon,
  CollaborationIcon,
  RewriteTextIcon,
  SnapshotIcon,
  StartIcon,
  ToolsIcon,
} from "@components/icons";

const Syllabus: React.FC = (props) => {
  const syllabus = useMemo(
    () => [
      {
        title: "Getting Started",
        icon: <StartIcon className="w-5 h-5" />,
        subs: [
          "introduction",
          "what is git",
          "using git",
          "installing git",
          "configuring git",
        ],
      },
      {
        title: "Creating Snapshots",
        icon: <SnapshotIcon className="w-5 h-5" />,
        subs: [
          "introduction",
          "initializing a repository",
          "git workflow",
          "staging files",
          "committing changes",
          "committing best practices",
          "skipping the staging area",
          "removing files",
          "renaming or moving files",
          "ignoring files",
          "short status",
          "viewing staged and unstaged changes",
          "visual diff tools",
          "viewing history",
          "viewing a commit",
          "unstaging files",
          "discarding local changes",
          "restoring a file to an earlier version",
        ],
      },
      {
        title: "Browsing History",
        icon: <ClockIcon className="w-5 h-5" />,
        subs: [
          "introduction",
          "getting a repository",
          "viewing the history",
          "filtering the history",
          "formatting the log output",
          "aliases",
          "viewing a commit",
          "viewing the changes across commits",
          "checking out a commit",
          "finding bugs using bisect",
          "finding contributors using shortlog",
          "viewing the history of a file",
          "restoring a deleting file",
          "finding the author of line using blame",
          "tagging",
        ],
      },
      {
        title: "Branching",
        subs: [
          "introduction",
          "what are branches",
          "getting a repository",
          "working with branches",
          "comparing branches",
          "stashing",
          "merging",
          "fast forward merges",
          "three way merges",
          "viewing merged and unmerged branches",
          "merge conflicts",
          "graphical merge tools",
          "aborting a merge",
          "undoing a faulty merge",
          "squash merging",
          "rebasing",
          "cherry picking",
          "picking a file from another branch",
        ],
      },
      {
        title: "Collaboration",
        icon: <CollaborationIcon className="w-5 h-5" />,
        subs: [
          "introduction",
          "workflows",
          "creating a github repository",
          "adding collaborators",
          "cloning a repository",
          "fetching",
          "pulling",
          "pushing",
          "storing credentials",
          "sharing tags",
          "releases",
          "sharing branches",
          "collaboration workflow",
          "pull requests",
          "resolving conflicts",
          "issues",
          "labels",
          "milestones",
          "contributing to open source projects",
          "keeping a forked repository up to date",
        ],
      },
      {
        title: "Rewriting History",
        icon: <RewriteTextIcon />,
        subs: [
          "introduction",
          "why rewrite history",
          "the golden rule of rewriting history",
          "example of a bad history",
          "undoing commits",
          "reverting commits",
          "recovering lost commits",
          "amending the last commit",
          "amending an earlier commit",
          "dropping commits",
          "rewording commit messages",
          "reordering commits",
          "squashing commits",
          "splitting a commit",
          "rewriting history using gitkraken",
        ],
      },
      {
        title: "Git tools",
        icon: <ToolsIcon className="w-5 h-5" />,
        subs: [
          "Git-Flow",
          "Delta",
          "Meld",
          "Commitizen CLI",
          "Commit lint",
          "Husky",
          "Git jump",
        ],
      },
    ],
    []
  );

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Syllabus
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In this course, we will learn to use git like a pro
          </p>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <ol className="list-decimal flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            {syllabus.map((section, index) => (
              <li
                key={section.title}
                className="lg:w-1/4 md:w-1/2 w-full px-4 my-4 flex relative pb-12"
              >
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="-ml-4 flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  {section?.icon}
                </div>
                <div className="flex-grow pl-4">
                  <p className="font-medium text-xl text-gray-900 mb-1 tracking-wider">
                    {`${index + 1}. ${section.title}`}
                  </p>
                  <ol className="list-decimal">
                    {section.subs.map((subName) => (
                      <li key={subName} className="leading-relaxed">
                        {subName}
                      </li>
                    ))}
                  </ol>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  );
};

export default Syllabus;
