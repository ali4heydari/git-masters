import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Master Git?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join the workshop and start your journey to becoming a Git expert. It's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 h-12 min-w-[200px]">
              <Link href="/syllabus">View Syllabus</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 min-w-[200px] bg-transparent"
              asChild
            >
              <Link href="/lectures">Lectures</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Questions? Email me at{" "}
            <a href="mailto:hello@gitmasters.ir" className="text-primary hover:underline">
              hello@gitmasters.ir
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
