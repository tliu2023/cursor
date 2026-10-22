import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "GTLandCards is a player- and collector-run One Piece card shop based in NJ / NYC — for competitive play, collections, and fans of the game.",
};

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <PageIntro eyebrow="The shop" title="About GTLandCards">
        <p>
          GTLandCards is a collector-run business that also lives at the table.
          We play, we go to tournaments, and we care about the cards enough to
          source them carefully — whether they&apos;re headed into a deck or
          onto a shelf.
        </p>
      </PageIntro>

      <Container className="mt-14 space-y-16 lg:mt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <section>
            <h2 className="font-serif text-2xl text-ink sm:text-[1.85rem]">
              Players, collectors, and fans
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              The shop is for people who grind locals, people who chase a
              favorite character, and people who just love One Piece. You do
              not have to pick a lane. Competitive lists, personal collections,
              and gifts for someone still watching the series all belong here.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink sm:text-[1.85rem]">
              Built for the table
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We know what it means to sleeve a deck the night before an event,
              to keep a single safe after a trade, and to pack something so it
              arrives the way it left. Authenticity, careful packaging, and
              secure shipping are the baseline — not extras.
            </p>
          </section>
        </div>

        <section className="border-t border-ink/8 pt-14">
          <h2 className="font-serif text-2xl text-ink sm:text-[1.85rem]">
            NJ / NYC
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            We&apos;re based in New Jersey and New York City. The site is
            Phase 1: a clean place to meet the shop while inventory photography
            is being shot. Buy, sell, and trade tools for players and collectors
            will come later — without turning this into a cluttered marketplace.
          </p>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/collections">See the collection</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
