import { cn } from "@/lib/utils";

export function PhotoPlaceholder({
  ratio = "portrait",
  caption = "Photography coming soon",
  className,
}: {
  ratio?: "portrait" | "square";
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2.5 rounded-md border border-ink/10 bg-cream-muted px-4 text-center",
        ratio === "portrait" ? "aspect-[3/4]" : "aspect-square",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6 text-ink/35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <path d="M4.5 7.5h2.2l1.1-1.8h8.4l1.1 1.8h2.2A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V9a1.5 1.5 0 0 1 1.5-1.5Z" />
        <circle cx="12" cy="13.2" r="3.1" />
      </svg>
      <p className="max-w-[10rem] text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-muted">
        {caption}
      </p>
    </div>
  );
}
