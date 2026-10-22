import { Package, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { trustPoints } from "@/lib/data";

const icons = {
  shield: ShieldCheck,
  package: Package,
  truck: Truck,
};

export function Hero() {
  return (
    <section className="overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6 xl:gap-10">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
              One Piece. One Community.
            </p>
            <h1 className="mt-4 font-serif text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[3.35rem] xl:text-[3.7rem]">
              Collect.
              <br />
              Celebrate.
              <br />
              Be Part of the Crew.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Curated One Piece cards and premium accessories for competitive
              players, collectors, and anyone who loves the game.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/collections">Browse Collection</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/accessories">Shop Accessories</Link>
              </Button>
            </div>
            <ul className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/10 pt-7 sm:grid-cols-3 sm:gap-4">
              {trustPoints.map((point) => {
                const Icon = icons[point.icon];
                return (
                  <li key={point.title} className="flex items-start gap-3">
                    <Icon
                      strokeWidth={1.4}
                      className="mt-0.5 size-5 shrink-0 text-ink"
                    />
                    <div>
                      <p className="text-[13px] font-semibold text-ink">
                        {point.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted">
                        {point.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/11] lg:aspect-[5/4] lg:min-h-[480px]">
              <Image
                src="/images/hero/crew.png"
                alt="The Straw Hat crew together in an anime-style group portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center object-right"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
