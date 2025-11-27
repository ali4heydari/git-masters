import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const modules = [
  {
    number: 1,
    title: "Getting Started",
    description: "Build your foundation with Git basics and essential setup",
    icon: "🚀",
    topics: [
      "Introduction to version control",
      "Understanding what Git is",
      "Installing and configuring Git",
      "Setting up your first repository",
      "Basic Git workflow overview",
    ],
  },
  {
    number: 2,
    title: "Creating Snapshots",
    description: "Master the art of commits and managing your code changes",
    icon: "📸",
    topics: [
      "Understanding the staging area",
      "Creating meaningful commits",
      "Writing effective commit messages",
      "Staging and unstaging files",
      "Viewing commit history",
      "Ignoring files with .gitignore",
      "Stashing work in progress",
      "Removing and renaming files",
      "Viewing changes and diffs",
      "Restoring files to previous versions",
    ],
  },
  {
    number: 3,
    title: "Browsing History",
    description: "Navigate your project's timeline and understand its evolution",
    icon: "🔍",
    topics: [
      "Advanced log filtering and formatting",
      "Viewing file history",
      "Finding bugs with git bisect",
      "Tracking code authorship with git blame",
      "Viewing commit details",
      "Comparing commits and branches",
      "Understanding the reflog",
      "Recovering lost commits",
    ],
  },
  {
    number: 4,
    title: "Branching",
    description: "Isolate features and manage parallel development streams",
    icon: "🌿",
    topics: [
      "Understanding branches",
      "Creating and switching branches",
      "Working with multiple branches",
      "Merging branches (fast-forward)",
      "Three-way merges",
      "Resolving merge conflicts",
      "Aborting and undoing merges",
      "Branch management strategies",
      "Deleting and renaming branches",
      "Viewing merged and unmerged branches",
    ],
  },
  {
    number: 5,
    title: "Collaboration",
    description: "Work seamlessly with teams using remote repositories",
    icon: "🤝",
    topics: [
      "Understanding remote repositories",
      "Cloning repositories",
      "Fetching and pulling changes",
      "Pushing your work",
      "Managing remote branches",
      "Tracking branches",
      "Handling push conflicts",
      "Working with multiple remotes",
    ],
  },
  {
    number: 6,
    title: "Rewriting History",
    description: "Clean up commits and maintain a professional project history",
    icon: "✏️",
    topics: [
      "Understanding when to rewrite history",
      "Amending commits",
      "Interactive rebasing",
      "Squashing commits",
      "Splitting commits",
      "Reordering commits",
      "Cherry-picking commits",
      "Dropping commits",
      "Editing commit messages",
      "The golden rule of rewriting history",
    ],
  },
  {
    number: 7,
    title: "Git Tools",
    description: "Leverage modern tools and workflows for professional development",
    icon: "🛠️",
    topics: [
      "Git Flow workflow",
      "GitHub Flow workflow",
      "Commitizen for standardized commits",
      "Husky for Git hooks",
      "Conventional commits",
      "Semantic versioning",
      "Git aliases and shortcuts",
    ],
  },
];

const resources = [
  {
    title: "Pro Git Book",
    description: "The comprehensive official Git book, available free online",
    image: "/images/pro-git.jpg",
    type: "Book",
    url: "https://git-scm.com/book/en/v2",
  },
  {
    title: "Learn Git Branching",
    description: "Interactive visual tutorial for mastering Git branching",
    image: "/images/learn-git-branching.png",
    type: "Interactive",
    url: "https://learngitbranching.js.org/",
  },
  {
    title: "Git Visualization Tool",
    description: "Visualize Git operations and understand complex workflows",
    image: "/images/visualizing-git.png",
    type: "Tool",
    url: "https://git-school.github.io/visualizing-git/",
  },
  {
    title: "Git explorer",
    description: "An interactive Git command explorer to learn and practice Git commands",
    image: "/images/git-explorer.png",
    type: "Interactive",
    url: "https://git.gaozih.com/",
  },
];

export default function SyllabusPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Complete Course Syllabus
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                7 comprehensive modules taking you from Git beginner to professional collaborator.
                Master version control with hands-on practice and real-world workflows.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>16+ hours of content</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Hands-on assignments</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>Professional resources</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {modules.map((module, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Module Icon */}
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-3xl sm:text-4xl">
                        {module.icon}
                      </div>

                      {/* Module Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            Module {module.number}
                          </Badge>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{module.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {module.description}
                        </p>

                        {/* Topics List */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-2">
                              <svg
                                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-sm text-foreground/90">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Learning Resources
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Curated materials to support your learning journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-muted relative">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={400}
                      height={225}
                      className="object-cover h-64"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {resource.type}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <Link
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-primary font-medium hover:underline"
                    >
                      Explore Resource &rarr;
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 sm:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Master Git?</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  View the full lecture series and start your journey to becoming a Git expert. It's
                  completely free!
                </p>
                <Button size="lg" className="text-base px-8 h-12 min-w-[200px]">
                  <Link href="/lectures">Lectures</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
