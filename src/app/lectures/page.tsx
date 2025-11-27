import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllLectures } from "@/lib/markdown"

export default async function LecturesPage() {
  const lectures = await getAllLectures()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Lectures</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive video lectures and written materials covering all aspects of Git version control
            </p>
          </div>
        </div>
      </section>

      {/* Lectures List */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {lectures.map((lecture) => (
            <Card key={lecture.slug} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left side - Badge and date */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:w-32 shrink-0">
                  <Badge
                    variant={lecture.frontmatter.tags?.includes("announcements") ? "secondary" : "default"}
                    className={
                      lecture.frontmatter.tags?.includes("announcements")
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }
                  >
                    {lecture.frontmatter.tags?.includes("announcements") ? "ANNOUNCEMENT" : "LECTURE"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {new Date(lecture.frontmatter.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{lecture.frontmatter.title}</h2>
                  <p className="text-muted-foreground mb-4">{lecture.frontmatter.excerpt}</p>
                  <Link
                    href={`/lectures/${lecture.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
