import Link from "next/link";

import { Button } from "@/components/ui/button";

export function InventoryNote({
  title = "Photography in progress",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-cream-muted px-6 py-8 text-center sm:px-10 sm:py-10">
      <p className="font-serif text-2xl text-ink sm:text-[1.75rem]">{title}</p>
      <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
        {children ??
          "Real product photos will land here once they are shot. In the meantime, reach out if you are looking for a card, a playable piece, or accessories for the table."}
      </p>
      <Button asChild className="mt-6">
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  );
}
