"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export function CtaBand({
  title = "Ready for a cleaner space?",
  subtitle = `Call, text, or request a personalized quote — serving ${business.primaryGeoPhrase}.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary py-16 text-ink md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <motion.div
          className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
          transition={{
            duration: reduce ? 0 : 5,
            repeat: reduce ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-gold-light/40 blur-3xl"
          animate={{ opacity: [0.3, 0.65, 0.3], x: [0, 12, 0] }}
          transition={{
            duration: reduce ? 0 : 6.5,
            repeat: reduce ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <Reveal className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="font-[family-name:var(--font-script)] text-3xl text-gold-dark md:text-4xl">
          {business.shortName}
        </p>
        <h2 className="mt-3 font-heading text-3xl text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-44 bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_12px_36px_-14px_rgba(197,163,90,0.95)]"
          >
            <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-44 border-gold/40 bg-cream/80 text-ink transition hover:border-gold hover:bg-cream"
          >
            <Link href="/quote">Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="min-w-44 text-gold-dark transition hover:bg-cream/80 hover:text-gold-dark"
          >
            <a href={business.smsHref}>Text Us</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
