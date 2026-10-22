import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { InventoryNote } from "@/components/InventoryNote";
import { PageIntro } from "@/components/PageIntro";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Button } from "@/components/ui/button";
import { COLLECTION_SLOT_COUNT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "One Piece singles, graded cards, and playable pieces from GTLandCards. Photography of the actual inventory is coming next.",
};

export default function CollectionsPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <PageIntro eyebrow="The vault" title="Collections">
        <p>
          This is where the real cards live — singles for the table, graded
          pieces for the shelf, and pulls we&apos;re proud to stand behind.
          Photos of cards we actually own will fill this grid once they&apos;re
          shot with consistent lighting and framing.
        </p>
      </PageIntro>

      <Container className="mt-12">
        <InventoryNote title="Inventory photography coming soon">
          We&apos;re not listing placeholder scans. When this page fills in,
          you&apos;ll see our own photography of the pieces on hand. Looking for
          something now? Send a note.
        </InventoryNote>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: COLLECTION_SLOT_COUNT }).map((_, index) => (
            <li key={index}>
              <PhotoPlaceholder />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/8 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Players, collectors, and fans are all welcome — if you need a card
            for a deck or a piece for the collection, ask.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Request a card</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
