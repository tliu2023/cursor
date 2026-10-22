import { CalendarDays } from "lucide-react";

export function ComingSoonBanner() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-5 py-8 text-center sm:flex-row sm:gap-5 sm:px-8 sm:py-7 sm:text-left lg:px-10">
        <CalendarDays
          strokeWidth={1.4}
          className="size-5 shrink-0 text-gold"
          aria-hidden="true"
        />
        <div>
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.2em]">
            Buy, Sell & Trade Features Coming Soon
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-cream/70">
            We&apos;re building a secure way to buy, sell, and trade with fellow
            players and collectors. Stay tuned.
          </p>
        </div>
      </div>
    </section>
  );
}
