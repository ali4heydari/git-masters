import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { getItemBySlug, getSlugs, lecturesDirectory } from "@/lib/markdown";

export async function generateStaticParams() {
  const slugs = getSlugs(lecturesDirectory);
  return slugs.map((slug) => ({ slug }));
}

export default async function LecturePage(props: { params: Promise<{ slug: string }> }) {
  const lecture = await getItemBySlug(lecturesDirectory, (await props.params).slug);

  if (!lecture) {
    notFound();
  }

  const { frontmatter, contentHtml } = lecture;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Cover Image */}
      {frontmatter.coverImage && (
        <section className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-[2/1] rounded-lg overflow-hidden">
                <Image
                  src={frontmatter.coverImage}
                  alt={frontmatter.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Instructor Info */}
            <aside className="lg:w-64 shrink-0">
              <Card className="p-6 sticky top-20">
                <div className="flex flex-col items-center text-center">
                  {frontmatter.authorAvatar && (
                    <Image
                      src={frontmatter.authorAvatar}
                      alt={frontmatter.author}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full border-2 border-border mb-4"
                    />
                  )}
                  <h3 className="font-semibold text-lg mb-1">{frontmatter.author}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Instructor</p>
                  <div className="w-full pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">{frontmatter.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(frontmatter.releaseDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h1 className="text-4xl font-bold mb-4 text-primary">{frontmatter.title}</h1>
                <p className="text-lg text-muted-foreground mb-8">{frontmatter.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
