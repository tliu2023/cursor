"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/Container";
import { SiteLogo } from "@/components/SiteLogo";
import { Button } from "@/components/ui/button";
import { accessoryCategories, navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

type Panel = "search" | "account" | "cart" | "menu" | null;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (panel === "search") {
      searchRef.current?.focus();
    }
  }, [panel]);

  useEffect(() => {
    document.body.style.overflow = panel === "menu" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel]);

  const q = query.trim().toLowerCase();
  const categoryMatches = q
    ? accessoryCategories.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q),
      )
    : accessoryCategories;

  function close() {
    setPanel(null);
    setQuery("");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/95 backdrop-blur-sm">
      <Container className="grid h-[4.75rem] grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-[5.25rem]">
        <SiteLogo />

        <nav className="hidden justify-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink/80 transition-colors hover:text-ink",
                      active && "text-ink",
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-ink" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-0.5 sm:gap-1">
          <IconBtn
            label="Search"
            active={panel === "search"}
            onClick={() => setPanel(panel === "search" ? null : "search")}
          >
            <Search strokeWidth={1.5} className="size-[18px]" />
          </IconBtn>
          <IconBtn
            label="Account"
            active={panel === "account"}
            onClick={() => setPanel(panel === "account" ? null : "account")}
          >
            <User strokeWidth={1.5} className="size-[18px]" />
          </IconBtn>
          <IconBtn
            label="Cart"
            active={panel === "cart"}
            onClick={() => setPanel(panel === "cart" ? null : "cart")}
          >
            <ShoppingBag strokeWidth={1.5} className="size-[18px]" />
          </IconBtn>
          <IconBtn
            label={panel === "menu" ? "Close menu" : "Open menu"}
            className="lg:hidden"
            active={panel === "menu"}
            onClick={() => setPanel(panel === "menu" ? null : "menu")}
          >
            {panel === "menu" ? (
              <X strokeWidth={1.5} className="size-[18px]" />
            ) : (
              <Menu strokeWidth={1.5} className="size-[18px]" />
            )}
          </IconBtn>
        </div>
      </Container>

      {panel === "search" ? (
        <div className="border-t border-ink/8 bg-cream">
          <Container className="py-6 sm:py-8">
            <div className="relative mx-auto max-w-xl">
              <Search
                strokeWidth={1.5}
                className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-muted"
              />
              <input
                ref={searchRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search accessories and pages"
                className="w-full border-0 border-b border-ink/20 bg-transparent py-2.5 pl-7 pr-8 font-sans text-sm text-ink outline-none placeholder:text-muted focus:border-ink"
                aria-label="Search"
              />
              <button
                type="button"
                onClick={close}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                aria-label="Close search"
              >
                <X strokeWidth={1.5} className="size-4" />
              </button>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
              Card inventory search will open once photography is in. Accessory
              categories are listed below.
            </p>

            <div className="mx-auto mt-6 max-w-xl">
              {categoryMatches.length === 0 ? (
                <p className="text-sm text-muted">No matching categories.</p>
              ) : (
                <ul className="space-y-2">
                  {categoryMatches.map((item) => (
                    <li key={item.id}>
                      <Link
                        href="/accessories"
                        onClick={close}
                        className="block py-1 text-sm text-ink hover:text-ink-soft"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Container>
        </div>
      ) : null}

      {panel === "account" ? (
        <div className="border-t border-ink/8 bg-cream">
          <Container className="max-w-lg py-8 text-center">
            <p className="font-serif text-2xl text-ink">Accounts coming soon</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Player and collector accounts will arrive with the shop. No sign-in
              needed to browse for now.
            </p>
            <Button className="mt-5" onClick={close}>
              Continue browsing
            </Button>
          </Container>
        </div>
      ) : null}

      {panel === "cart" ? (
        <div className="border-t border-ink/8 bg-cream">
          <Container className="max-w-lg py-8 text-center">
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Checkout will open with inventory. Until photos are up, send a
              note if you are looking for something specific.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/contact" onClick={close}>
                  Contact us
                </Link>
              </Button>
              <Button variant="outline" onClick={close}>
                Close
              </Button>
            </div>
          </Container>
        </div>
      ) : null}

      {panel === "menu" ? (
        <div className="border-t border-ink/8 bg-cream lg:hidden">
          <Container className="py-6">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.label} className="border-b border-ink/8">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-3.5 font-sans text-[12px] font-medium uppercase tracking-[0.22em] text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function IconBtn({
  children,
  label,
  onClick,
  active,
  className,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-sm text-ink transition-colors hover:bg-cream-muted",
        active && "bg-cream-muted",
        className,
      )}
    >
      {children}
    </button>
  );
}
