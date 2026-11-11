import Image from "next/image";
import { business } from "@/lib/business";
import { heroImage } from "@/lib/work";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-secondary">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          fetchPriority="high"
          quality={65}
          className="object-cover motion-safe:animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/92 to-cream/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20">
        <p className="animate-fade-up font-[family-name:var(--font-script)] text-4xl text-gold-dark md:text-5xl">
          {business.shortName}
        </p>
        <p className="animate-fade-up-delay mt-2 text-sm uppercase tracking-[0.28em] text-muted-foreground">
          Cleaning Service
        </p>
        <h1 className="animate-fade-up-delay-2 mt-6 max-w-3xl font-heading text-4xl leading-tight text-ink md:text-6xl">
          Residential & Commercial Cleaning in {business.primaryGeoPhrase}
        </h1>
        <p className="animate-fade-up-delay-3 mt-5 max-w-xl text-lg text-muted-foreground">
          {business.tagline} Detailed, personalized cleaning for homes, Airbnbs,
          and offices across Middle Tennessee.
        </p>
        <div className="animate-fade-up-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_12px_36px_-14px_rgba(197,163,90,0.95)]"
          >
            <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gold/40 bg-cream/70 text-ink backdrop-blur-sm transition hover:border-gold hover:bg-cream"
          >
            <a href={business.smsHref}>Text Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
