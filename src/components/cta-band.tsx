import { business } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export function CtaBand({
  title = "Ready for a cleaner space?",
  subtitle = `Call ${business.phoneDisplay} to book — serving ${business.primaryGeoPhrase}.`,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary py-16 text-ink md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/30 blur-3xl motion-safe:animate-shine" />
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-gold-light/40 blur-3xl motion-safe:animate-shine" />
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
            <a href={business.smsHref}>Text Us</a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
