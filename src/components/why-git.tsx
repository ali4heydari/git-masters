export function WhyGit() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why Git Matters for Your Career
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Git is the industry-standard version control system used by over{" "}
                <strong className="text-foreground">90% of developers worldwide</strong>. Whether
                you're working solo or on a team, Git skills are essential.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-foreground">Never lose work again</strong> - Track every
                    change and revert to any previous version instantly
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-foreground">Collaborate seamlessly</strong> - Work with
                    teams of any size without stepping on each other's toes
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-foreground">Boost your employability</strong> - Git
                    proficiency is a must-have skill in every developer job posting
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-foreground">Contribute to open source</strong> - Join
                    the global developer community and build your portfolio
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-mono">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">git commit -m "Initial commit"</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">git push origin main</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">git checkout -b feature/new-feature</span>
                </div>
                <div className="h-px bg-border my-6" />
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm text-muted-foreground">3 files changed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-muted-foreground">12 commits ahead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Ready to merge</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
