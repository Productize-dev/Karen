"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Get a Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

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
            <Phone className="size-3.5 text-gold" />
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
            height={80}
            className="h-11 w-auto object-contain sm:h-12 md:h-14"
            priority
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
                  "group relative text-sm font-medium tracking-wide transition",
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
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -40, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 40, scale: 0.8 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              className="inline-flex"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-border bg-cream md:hidden"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {nav.map((item, index) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.04 * index,
                      duration: reduce ? 0 : 0.25,
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm font-medium transition hover:bg-secondary",
                        active && "bg-secondary text-gold-dark"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href={business.phoneHref}
                className="mt-2 rounded-md bg-gold-gradient px-3 py-2.5 text-center text-sm font-semibold text-ink transition hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Call {business.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
