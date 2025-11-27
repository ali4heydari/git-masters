import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function InstructorSection() {
  return (
    <section className="py-20 sm:py-24 bg-muted/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Meet Your Instructor
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn from an experienced developer passionate about teaching
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Instructor Image Placeholder */}
                <div className="shrink-0">
                  <Image
                    src={"https://github.com/Ali4Heydari.png"}
                    alt="Ali Heydari"
                    width={32 * 4}
                    height={32 * 4}
                    className="h-32 w-32 rounded-full"
                  />
                </div>

                {/* Instructor Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">Ali Heydari</h3>
                    <p className="text-muted-foreground mb-3">@Ali4Heydari</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Developer</Badge>
                      <Badge variant="secondary">Git Expert</Badge>
                      <Badge variant="secondary">Open Source Contributor</Badge>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      With over {new Date().getFullYear() - 2020} years of experience in software
                      development and a passion for version control systems, I've helped hundreds of
                      developers master Git and improve their collaboration workflows.
                    </p>
                    <p>
                      This workshop distills everything I've learned into a practical, hands-on
                      curriculum that will have you confidently using Git in real-world projects.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href="https://twitter.com/Ali4Heydari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/ali4heydari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
