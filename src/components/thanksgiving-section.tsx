import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { business } from "@/lib/business";
import { thanksgiving } from "@/lib/seasonal";
import { MapleLeaf, WheatStem } from "@/components/harvest-accents";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function ThanksgivingSection() {
  if (!thanksgiving.active) return null;

  return (
    <section
      className="relative overflow-hidden border-y border-border bg-secondary py-16 md:py-24"
      aria-label="Thanksgiving cleaning"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-cranberry" aria-hidden />
      <MapleLeaf
        tone="cranberry"
        className="absolute -right-4 top-12 size-24 opacity-[0.12] md:size-28"
      />
      <WheatStem
        tone="maple"
        className="absolute bottom-8 left-4 h-28 w-10 opacity-20 md:left-8 md:h-32"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-maple">
            {thanksgiving.sectionEyebrow}
          </p>
          <h2 className="mt-3 font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
            {thanksgiving.sectionTitle}
          </h2>
          <GoldRule className="mt-5 w-20" delay={0.1} />
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            {thanksgiving.sectionBody}
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
          {thanksgiving.checklist.map((item) => (
            <StaggerItem key={item}>
              <div className="flex gap-3 border border-maple/30 bg-cream px-4 py-4 text-sm text-ink transition hover:border-cranberry/50">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cranberry" />
                <span>{item}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" delay={0.1}>
          <Button
            asChild
            size="lg"
            className="bg-cranberry font-semibold text-cream transition hover:bg-maple"
          >
            <Link href="/quote">{business.estimateCta}</Link>
          </Button>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-maple">
            {business.firstVisitOffer} · {business.firstVisitOfferDetail}
          </p>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-sage" aria-hidden />
    </section>
  );
}
