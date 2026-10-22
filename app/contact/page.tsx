import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { InstagramIcon } from "@/components/InstagramIcon";
import { PageIntro } from "@/components/PageIntro";
import { INSTAGRAM_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write GTLandCards without seeing a public email address. Players, collectors, and fans — NJ / NYC.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-24">
      <PageIntro eyebrow="Say hello" title="Contact">
        <p>
          Looking for a card, accessories for an event, or just want to talk
          through a trade? Write in here. Your note comes to us — we don&apos;t
          publish an inbox on the site.
        </p>
      </PageIntro>

      <Container className="mt-12">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <aside className="space-y-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Location
              </p>
              <p className="mt-2 text-[15px] text-ink-soft">NJ / NYC</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                Instagram
              </p>
              <a
                href={INSTAGRAM_URL}
                className="mt-2 inline-flex items-center gap-2 text-[15px] text-ink-soft transition-colors hover:text-ink"
                rel="noreferrer"
                target="_blank"
              >
                <InstagramIcon />
                @gtlandcards
              </a>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Players, collectors, and One Piece fans are all welcome. Tell us
              what you&apos;re looking for and how we should reply.
            </p>
          </aside>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
