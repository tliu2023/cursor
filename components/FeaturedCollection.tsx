import Link from "next/link";

import { Container } from "@/components/Container";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Button } from "@/components/ui/button";
import { FEATURED_SLOT_COUNT } from "@/lib/data";

export function FeaturedCollection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="rounded-2xl bg-cream-muted px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
          <h2 className="text-center font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
            Featured Collection
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-ink-soft">
            Playable singles, graded pieces, and pulls worth keeping — photos of
            the actual inventory go here next.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-6">
            {Array.from({ length: FEATURED_SLOT_COUNT }).map((_, index) => (
              <li key={index}>
                <PhotoPlaceholder />
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center sm:justify-end">
            <Button asChild variant="outline" size="sm">
              <Link href="/collections">View All Collections</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
