import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapleLeaf } from "@/components/harvest-accents";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal } from "@/components/motion";
import { QuoteForm } from "@/components/quote-form";
import { business } from "@/lib/business";
import { thanksgiving } from "@/lib/seasonal";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

const title = "Free Estimate";
const description = `Get a free cleaning estimate from ${business.legalName}. New clients get 10% off their first visit. Call ${business.phoneDisplay}.`;

export const metadata = createMetadata({
  title: `${title} | ${business.shortName}`,
  description,
  path: "/quote",
});

export default function QuotePage() {
  const crumbs = breadcrumbItems([{ name: "Free Estimate", path: "/quote" }]);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path: "/quote" }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <div className="relative mt-6 text-center md:text-left">
            <MapleLeaf
              tone="maple"
              className="absolute -right-2 -top-4 size-14 opacity-20 md:size-20"
            />
            <p className="text-sm uppercase tracking-[0.22em] text-maple">
              {thanksgiving.eyebrow}
            </p>
            <p className="mt-3 font-heading text-6xl leading-none tracking-tight text-cranberry sm:text-7xl md:text-8xl">
              {business.firstVisitOffer}
            </p>
            <p className="mt-2 text-lg font-medium uppercase tracking-[0.2em] text-maple md:text-xl">
              {business.firstVisitOfferDetail}
            </p>
            <h1 className="mt-8 font-heading text-5xl leading-none text-ink sm:text-6xl md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              {thanksgiving.quoteNote} Prefer to talk now? Call or text{" "}
              <a href={business.phoneHref} className="font-medium text-cranberry">
                {business.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <GoldRule className="mt-6 mb-8 w-24 md:mx-0 mx-auto" delay={0.1} />
        </Reveal>
        <QuoteForm />
      </div>
    </>
  );
}
