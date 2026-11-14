"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 5h16M4 12h16M4 19h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-cream/90 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_12px_40px_-20px_rgba(154,123,60,0.25)]"
      )}
    >
      <div className="border-b border-gold/25 bg-secondary text-ink">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 transition hover:text-gold-dark"
          >
            <PhoneIcon className="size-3.5 text-gold" />
            {business.phoneDisplay}
          </a>
          <p className="hidden text-muted-foreground sm:block">
            {business.hoursLabel}
          </p>
          <div className="flex items-center gap-3">
            {business.social.facebook ? (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-muted-foreground transition hover:text-gold-dark sm:inline"
              >
                Facebook
              </a>
            ) : null}
            {business.social.google ? (
              <a
                href={business.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-muted-foreground transition hover:text-gold-dark md:inline"
              >
                Google
              </a>
            ) : null}
            <a
              href={business.emailHref}
              className="truncate transition hover:text-gold-dark"
            >
              {business.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <Image
            src={business.logoPath}
            alt={business.legalName}
            width={220}
            height={146}
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
            sizes="(max-width: 640px) 140px, 180px"
          />
          <span className="sr-only">{business.legalName}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-base font-medium tracking-wide transition",
                  active ? "text-ink" : "text-ink/80 hover:text-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
          <Button
            asChild
            className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_8px_24px_-12px_rgba(197,163,90,0.9)]"
          >
            <a href={business.phoneHref}>Call Now</a>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border transition hover:border-gold/40 hover:bg-secondary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border bg-cream transition-[grid-template-rows] duration-300 ease-out md:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <nav className="min-h-0">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition hover:bg-secondary",
                    active && "bg-secondary text-gold-dark"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={business.phoneHref}
              className="mt-2 rounded-md bg-gold-gradient px-3 py-2.5 text-center text-sm font-semibold text-ink transition hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
