import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            100% Free Workshop
          </Badge>

          {/* Main Headline */}
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Master Git & Collaborate Like a Pro
          </h1>

          {/* Subheadline */}
          <p className="text-pretty text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Learn the essential version control skills that every developer needs. Track changes, collaborate
            seamlessly, and never lose code again.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 h-12 min-w-[200px]">
              <Link href="/syllabus">View Syllabus</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 min-w-[200px] bg-transparent" asChild>
              <Link href="/lectures">Lectures</Link>
            </Button>
          </div>

          {/* Stats or Quick Info */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7 Sessions</div>
              <div className="text-sm text-muted-foreground">Comprehensive Course</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Hands-On</div>
              <div className="text-sm text-muted-foreground">Practical Assignments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Certificate</div>
              <div className="text-sm text-muted-foreground">Upon Completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
