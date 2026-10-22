import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Button } from "@/components/ui/button";
import { accessoryCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accessories",
  description:
    "Premium card accessories for competitive play and collecting — sleeves, top loaders, binders, deck boxes, playmats, and display stands.",
};

export default function AccessoriesPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <PageIntro eyebrow="Table & storage" title="Premium Accessories">
        <p>
          Gear for people who actually play — and for people who want their
          cards stored the right way. Category photos will be catalog-style
          product shots, separate from the collection photography.
        </p>
      </PageIntro>

      <Container className="mt-12">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {accessoryCategories.map((item) => (
            <li key={item.id}>
              <article>
                <PhotoPlaceholder ratio="square" />
                <h2 className="mt-4 font-serif text-2xl text-ink">{item.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl bg-cream-muted px-6 py-8 sm:px-8 sm:py-10">
          <p className="font-serif text-2xl text-ink">Need something for this weekend?</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Product photos and pricing land here after the shoot. If you need
            sleeves, a deck box, or storage before then, write in and we&apos;ll
            help you from NJ / NYC.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Ask about accessories</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
