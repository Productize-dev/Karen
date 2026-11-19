import Link from "next/link";
import { business } from "@/lib/business";
import { thanksgiving } from "@/lib/seasonal";
import { HarvestBackdrop } from "@/components/harvest-accents";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export function CtaBand({
  title = thanksgiving.ctaLead,
  subtitle = `Call, text, or request your free estimate — plus ${business.firstVisitOffer.toLowerCase()} your ${business.firstVisitOfferDetail}. Serving ${business.primaryGeoPhrase}.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-cranberry/25 bg-secondary py-16 text-ink md:py-20">
      <div className="absolute inset-x-0 top-0 h-1 bg-cranberry" aria-hidden />
      <HarvestBackdrop />
      <Reveal className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="font-[family-name:var(--font-script)] text-4xl text-cranberry md:text-5xl">
          {business.shortName}
        </p>
        {title ? (
          <p className="mt-4 text-base text-maple md:text-lg">{title}</p>
        ) : null}
        <p className="mt-5 font-heading text-6xl leading-none text-cranberry sm:text-7xl md:text-8xl">
          {business.firstVisitOffer}
        </p>
        <p className="mt-2 text-lg font-medium uppercase tracking-[0.2em] text-maple md:text-xl">
          {business.firstVisitOfferDetail}
        </p>
        <h2 className="mt-6 font-heading text-5xl text-ink md:text-6xl lg:text-7xl">
          {business.estimateCta}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-44 bg-cranberry text-base font-semibold text-cream transition hover:bg-maple md:text-lg"
          >
            <Link href="/quote">{business.estimateCta}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-44 border-maple/50 bg-cream text-ink transition hover:border-cranberry hover:bg-cream"
          >
            <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="min-w-44 text-cranberry transition hover:bg-cream hover:text-cranberry"
          >
            <a href={business.smsHref}>Text Us</a>
          </Button>
        </div>
      </Reveal>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-sage" aria-hidden />
    </section>
  );
}
