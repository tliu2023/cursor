import { Container } from "@/components/Container";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-[2.2rem] leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
          {children}
        </div>
      </Container>
    </section>
  );
}
