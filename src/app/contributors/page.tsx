import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getAllContributors } from "@/lib/markdown";

export default async function ContributorsPage() {
  const contributors = (await getAllContributors()).map((it) => it.frontmatter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Student Contributors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A living record of everyone who has completed the Git Masters workshop. Add your name
              by contributing to our open-source repository!
            </p>
          </div>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-2 border-primary/20 bg-muted/30">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">How to Add Your Name</h2>
                <p className="text-muted-foreground">
                  Practice your Git skills by adding yourself to this list via a Pull Request
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold mb-2">Fork and Clone</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fork the repository and clone it to your local machine
                  </p>
                  <div className="rounded-lg bg-background border border-border p-4 font-mono text-sm overflow-x-auto">
                    <div className="text-muted-foreground mb-1"># Fork on GitHub, then:</div>
                    <div>git clone https://github.com/YOUR_USERNAME/git-masters.git</div>
                    <div>cd git-masters</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  2
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold mb-2">Create a Branch</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Create a new branch for your contribution
                  </p>
                  <div className="rounded-lg bg-background border border-border p-4 font-mono text-sm overflow-x-auto">
                    <div>git checkout -b add-your-name</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  3
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold mb-2">Add Your Information</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Add file{" "}
                    <code className="px-1.5 py-0.5 rounded bg-muted text-xs">
                      _markdowns/_participants/your-name.md
                    </code>{" "}
                    and add your details with the format bellow:
                  </p>
                  <div className="rounded-lg bg-background border border-border p-4 font-mono text-sm overflow-x-auto">
                    <div className="text-muted-foreground">{"---"}</div>
                    <div className="pl-4">firstName: "YOUR FIRST NAME"</div>
                    <div className="pl-4">lastName: "YOUR LAST NAME"</div>
                    <div className="pl-4">githubUserName: "YOUR GITHUB USERNAME"</div>
                    <div className="pl-4">twitterUserName: "YOUR X USERNAME"</div>
                    <div className="text-muted-foreground">{"---"}</div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  4
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold mb-2">Commit and Push</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Commit your changes and push to your fork
                  </p>
                  <div className="rounded-lg bg-background border border-border p-4 font-mono text-sm overflow-x-auto">
                    <div>git add _markdowns/_participants</div>
                    <div>git commit -m "Add [Your Name] to contributors"</div>
                    <div>git push origin add-your-name</div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  5
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold mb-2">Create Pull Request</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Open a Pull Request on GitHub with a clear title
                  </p>
                  <div className="rounded-lg bg-background border border-border p-4 font-mono text-sm">
                    <div className="text-muted-foreground">Title:</div>
                    <div>Add [Your Name] to contributors list</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <Button asChild className="w-full sm:w-auto">
                <Link
                  href="https://github.com/Ali4Heydari/git-masters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Repository on GitHub
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Students</h2>
            <p className="text-lg text-muted-foreground">
              {contributors.length} students have completed the workshop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <img
                    src={`https://github.com/${contributor.githubUserName}.png`}
                    alt={`${contributor.firstName} ${contributor.lastName}`}
                    className="h-16 w-16 rounded-full border-2 border-border"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 truncate">{`${contributor.firstName} ${contributor.lastName}`}</h3>
                    <Link
                      href={`https://github.com/${contributor.githubUserName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      @{contributor.githubUserName}
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-muted/30 border-dashed">
              <div className="max-w-md mx-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Your Name Could Be Here!</h3>
                <p className="text-muted-foreground mb-4">
                  Complete the workshop and add yourself to this list by submitting a Pull Request
                </p>
                <Button asChild variant="outline">
                  <Link href="/schedule">View Workshop Schedule</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
