import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal } from "@/components/motion";
import { ServiceCards } from "@/components/service-cards";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

const title = "Residential & Commercial Cleaning Services";
const description = `Explore cleaning services from ${business.legalName} in ${business.primaryGeoPhrase} — residential, deep clean, recurring, Airbnb, move-out, and office cleaning. Call ${business.phoneDisplay}.`;

export const metadata = createMetadata({
  title: `House Cleaning Services | ${business.address.city} ${business.address.state} | ${business.shortName}`,
  description,
  path: "/services",
});

export default function ServicesHubPage() {
  const crumbs = breadcrumbItems([{ name: "Services", path: "/services" }]);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path: "/services" }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <h1 className="max-w-3xl font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Homes and businesses in {business.primaryGeoPhrase} — routine
            maintenance, deep cleans, Airbnb turnovers, move-in / move-out, and
            office cleaning. Personalized quotes for every property.
          </p>
          <GoldRule className="mt-6 mb-10 w-24" delay={0.1} />
        </Reveal>
        <ServiceCards services={services} />
      </div>
      <CtaBand />
    </>
  );
}
