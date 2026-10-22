import { Mail } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/Container";
import { InstagramIcon } from "@/components/InstagramIcon";
import { SiteLogo } from "@/components/SiteLogo";
import { INSTAGRAM_URL, navigation } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <SiteLogo compact />
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted">
              Built by players and collectors, for the crew.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  <Mail strokeWidth={1.5} className="size-4" />
                  Email us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Location
            </p>
            <p className="mt-4 text-sm text-ink-soft">NJ / NYC</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} GTLandCards. All rights reserved.
          </p>
          <p className="text-xs text-muted">One Piece. One community.</p>
        </div>
      </Container>
    </footer>
  );
}
