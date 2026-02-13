import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InstructorSection } from "@/components/instructor-section";
import { Navigation } from "@/components/navigation";
import { WhatYouLearn } from "@/components/what-you-learn";
import { WhyGit } from "@/components/why-git";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WhatYouLearn />
        <WhyGit />
        <InstructorSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
