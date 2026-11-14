import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal } from "@/components/motion";
import { QuoteForm } from "@/components/quote-form";
import { business } from "@/lib/business";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

const title = "Request a Personalized Cleaning Quote";
const description = `Get a custom cleaning quote from ${business.legalName}. Pricing depends on property size, condition, and services. Call ${business.phoneDisplay}.`;

export const metadata = createMetadata({
  title: `${title} | ${business.shortName}`,
  description,
  path: "/quote",
});

export default function QuotePage() {
  const crumbs = breadcrumbItems([{ name: "Get a Quote", path: "/quote" }]);

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
          <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
            Free personalized estimate
          </p>
          <h1 className="mt-3 font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-muted-foreground">
            {business.pricingNote} Prefer to talk now? Call or text{" "}
            <a href={business.phoneHref} className="font-medium text-gold-dark">
              {business.phoneDisplay}
            </a>
            .
          </p>
          <GoldRule className="mt-6 mb-8 w-24" delay={0.1} />
        </Reveal>
        <QuoteForm />
      </div>
    </>
  );
}
