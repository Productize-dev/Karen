"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { business } from "@/lib/business";
import { heroImage } from "@/lib/work";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  const reduce = useReducedMotion();

  function item(delay: number) {
    return {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: reduce ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: reduce ? 0 : delay,
      },
    };
  }

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover motion-safe:animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20">
        <motion.p
          className="font-[family-name:var(--font-script)] text-4xl text-gold-dark md:text-5xl"
          {...item(0.05)}
        >
          {business.shortName}
        </motion.p>
        <motion.p
          className="mt-2 text-sm uppercase tracking-[0.28em] text-muted-foreground"
          {...item(0.18)}
        >
          Cleaning Service
        </motion.p>
        <motion.h1
          className="mt-6 max-w-3xl font-heading text-4xl leading-tight text-ink md:text-6xl"
          {...item(0.3)}
        >
          Residential & Commercial Cleaning in {business.primaryGeoPhrase}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl text-lg text-muted-foreground"
          {...item(0.42)}
        >
          {business.tagline} Detailed, personalized cleaning for homes, Airbnbs,
          and offices across Middle Tennessee.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          {...item(0.54)}
        >
          <Button
            asChild
            size="lg"
            className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_12px_36px_-14px_rgba(197,163,90,0.95)]"
          >
            <Link href="/quote">Request a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/40 bg-cream/70 text-ink backdrop-blur-sm transition hover:border-gold hover:bg-cream"
          >
            <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
