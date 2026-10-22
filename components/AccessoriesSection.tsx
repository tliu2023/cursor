import Link from "next/link";

import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Button } from "@/components/ui/button";
import { accessoryCategories } from "@/lib/data";

export function AccessoriesSection() {
  return (
    <section className="py-4 lg:py-8">
      <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-[2.1rem]">
        Premium Accessories
      </h2>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Sleeves, storage, and table gear for players who compete and collectors
        who keep pieces looking right.
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5">
        {accessoryCategories.map((item) => (
          <li key={item.id}>
            <article>
              <PhotoPlaceholder ratio="square" />
              <h3 className="mt-3 text-[13px] text-ink">{item.name}</h3>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-9 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/accessories">Shop All Accessories</Link>
        </Button>
      </div>
    </section>
  );
}
