import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
        That route isn&apos;t on the map. Head home, or send a note if you were
        looking for something specific.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </Container>
  );
}
