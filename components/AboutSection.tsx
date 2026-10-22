import Link from "next/link";

import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden px-1 py-4 lg:py-8">
      <JollyRogerWatermark />
      <div className="relative max-w-md">
        <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-[2.1rem]">
          About GTLandCards
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
          GTLandCards is run by people who play, collect, and show up at
          tournaments. We source cards and accessories for competitive players,
          collectors, and fans who care about the hobby as much as we do.
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/about">Learn More About Us</Link>
        </Button>
      </div>
    </section>
  );
}

function JollyRogerWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -right-6 -top-4 h-[280px] w-[280px] text-ink opacity-[0.055] sm:h-[320px] sm:w-[320px] lg:-right-10"
    >
      <g fill="none" stroke="currentColor" strokeWidth="3.5">
        <ellipse cx="100" cy="58" rx="34" ry="12" />
        <path d="M68 58c2-22 14-38 32-38s30 16 32 38" />
        <circle cx="100" cy="108" r="36" />
        <circle cx="88" cy="102" r="6" fill="currentColor" stroke="none" />
        <circle cx="112" cy="102" r="6" fill="currentColor" stroke="none" />
        <path d="M88 124c8 8 16 8 24 0" />
        <path d="M48 148l52-22 52 22M48 168l52-22 52 22" />
      </g>
    </svg>
  );
}
