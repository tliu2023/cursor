import Link from "next/link";

import { cn } from "@/lib/utils";

export function SiteLogo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex flex-col items-center leading-none text-ink",
        className,
      )}
      aria-label="GTLandCards home"
    >
      <span
        className={cn(
          "font-serif tracking-[0.04em]",
          compact ? "text-[1.35rem]" : "text-[1.65rem] sm:text-[1.85rem]",
        )}
      >
        GTLAND
      </span>
      <span
        className={cn(
          "mt-1 font-sans font-medium tracking-[0.38em] text-ink/70",
          compact ? "text-[8px]" : "text-[9px]",
        )}
      >
        — CARDS —
      </span>
    </Link>
  );
}
