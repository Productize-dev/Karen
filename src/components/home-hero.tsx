import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { thanksgiving } from "@/lib/seasonal";
import { heroImage } from "@/lib/work";
import { MapleLeaf } from "@/components/harvest-accents";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative min-h-[min(88vh,920px)] overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          fetchPriority="high"
          quality={65}
          className="object-cover object-right motion-safe:animate-ken-burns"
          sizes="100vw"
        />
        {/* Solid cream for copy — leaves the photo open on the right */}
        <div className="absolute inset-y-0 left-0 w-full bg-cream/88 md:w-[54%] md:bg-cream/94" />
        <div className="absolute inset-y-0 left-[54%] hidden w-[10%] bg-cream/50 md:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <MapleLeaf
          tone="cranberry"
          className="absolute right-[5%] top-24 hidden size-20 opacity-35 motion-safe:animate-float-soft lg:block lg:size-24"
        />
        <MapleLeaf
          tone="maple"
          className="absolute bottom-20 right-[12%] hidden size-14 rotate-[-16deg] opacity-40 motion-safe:animate-float-soft lg:block"
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(88vh,920px)] max-w-6xl flex-col justify-center px-4 py-14 md:py-20">
        <p className="animate-fade-up font-[family-name:var(--font-script)] text-4xl text-cranberry sm:text-5xl md:text-6xl">
          {business.shortName}
        </p>
        <p className="animate-fade-up-delay mt-2 text-sm uppercase tracking-[0.28em] text-maple md:text-base">
          {thanksgiving.eyebrow}
        </p>
        <h1 className="animate-fade-up-delay-2 mt-5 max-w-2xl font-heading text-4xl leading-tight text-ink sm:text-5xl md:max-w-3xl md:text-6xl lg:text-7xl">
          Residential & Commercial Cleaning in {business.primaryGeoPhrase}
        </h1>
        <p className="animate-fade-up-delay-3 mt-5 font-heading text-4xl leading-none text-cranberry sm:text-5xl md:text-6xl lg:text-7xl">
          {business.firstVisitOffer}
          <span className="mt-1.5 block text-xl font-medium uppercase tracking-[0.18em] text-maple sm:text-2xl md:text-3xl">
            {business.firstVisitOfferDetail}
          </span>
        </p>
        <p className="animate-fade-up-delay-3 mt-3 max-w-xl text-base text-muted-foreground md:text-lg">
          {thanksgiving.heroSupport}
        </p>
        <div className="animate-fade-up-delay-4 mt-7 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-cranberry px-8 text-base font-semibold text-cream transition hover:bg-maple md:text-lg"
          >
            <Link href="/quote">{business.estimateCta}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-maple/50 bg-cream text-ink transition hover:border-cranberry hover:bg-secondary"
          >
            <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
