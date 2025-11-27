import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

const scheduleItems = [
  {
    week: 1,
    description: "Foundation of Git",
    sessions: [
      {
        title: "Getting Started",
        description: "Introduction to Git, installation, and first repository setup",
        duration: "2 hours",
        type: "lecture",
      },
      {
        title: "Creating Snapshots",
        description: "Master commits, staging, and managing your code changes",
        duration: "2.5 hours",
        type: "lecture",
      },
    ],
  },
  {
    week: 2,
    description: "Tracking Changes",
    sessions: [
      {
        title: "Browsing History",
        description: "Navigate your project timeline and track changes effectively",
        duration: "2 hours",
        type: "lecture",
      },
      {
        title: "GitHub Profile Assignment",
        description: "Create your professional GitHub README profile",
        duration: "Self-paced",
        type: "assignment",
      },
    ],
  },
  {
    week: 3,
    description: "Branching and Collaboration",
    sessions: [
      {
        title: "Branching",
        description: "Isolate features and manage parallel development streams",
        duration: "2.5 hours",
        type: "lecture",
      },
      {
        title: "Collaboration",
        description: "Work with teams using remote repositories and pull requests",
        duration: "2 hours",
        type: "lecture",
      },
    ],
  },
  {
    week: 4,
    description: "Advanced Git Techniques",
    sessions: [
      {
        title: "Rewriting History",
        description: "Clean up commits and maintain professional project history",
        duration: "2 hours",
        type: "lecture",
      },
      {
        title: "Git Tools",
        description: "Modern workflows, Git Flow, and professional development tools",
        duration: "2 hours",
        type: "lecture",
      },
    ],
  },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Workshop Schedule</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A structured 4-week journey from Git basics to advanced collaboration techniques. All sessions are live
                and interactive.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Live sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Flexible timing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Timeline */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {scheduleItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== scheduleItems.length - 1 && (
                    <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-border hidden sm:block"/>
                  )}

                  <div className="mb-12">
                    {/* Week Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg relative z-10">
                        {item.week}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Week {item.week}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Sessions */}
                    <div className="sm:ml-16 space-y-4">
                      {item.sessions.map((session, sessionIndex) => (
                        <Card
                          key={sessionIndex}
                          className="border-2 hover:border-primary/50 transition-colors overflow-hidden"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge
                                    variant={session.type === "lecture" ? "default" : "secondary"}
                                    className="capitalize"
                                  >
                                    {session.type}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {session.duration}
                                  </span>
                                </div>
                                <h4 className="text-lg font-semibold mb-2">{session.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{session.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Schedule Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Session Times</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Live sessions are held twice weekly. Recordings available for all enrolled students. Times
                          displayed in your local timezone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Assignments</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Hands-on assignments help reinforce concepts. Complete at your own pace with instructor
                          feedback and support.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Interactive Learning</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Ask questions during live sessions, participate in discussions, and collaborate with fellow
                          learners.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Lifetime Access</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Access all course materials, recordings, and resources forever. Learn at your own pace, even
                          after the workshop ends.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  )
}
