import { AboutSection } from "@/components/AboutSection";
import { AccessoriesSection } from "@/components/AccessoriesSection";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { Container } from "@/components/Container";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <div className="grid items-start gap-14 border-t border-ink/8 pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20">
            <AboutSection />
            <AccessoriesSection />
          </div>
        </Container>
      </section>
      <ComingSoonBanner />
    </>
  );
}
