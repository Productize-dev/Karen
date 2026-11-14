import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AreaLinks } from "@/components/area-links";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal } from "@/components/motion";
import { business } from "@/lib/business";
import { getCitiesByCounty, cities } from "@/lib/areas";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

const title = `House Cleaning in ${business.serviceRegion}`;
const description = `Find ${business.shortName} service areas across Williamson, Rutherford, and Davidson Counties. ${cities.length}+ cities including Franklin, Nashville, and Murfreesboro. Call ${business.phoneDisplay}.`;

export const metadata = createMetadata({
  title: `House Cleaning Service Areas | Middle Tennessee | ${business.shortName}`,
  description,
  path: "/areas",
});

export default function AreasHubPage() {
  const crumbs = breadcrumbItems([{ name: "Areas", path: "/areas" }]);
  const grouped = getCitiesByCounty();

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path: "/areas" }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <h1 className="max-w-4xl font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
            House Cleaning Across Middle Tennessee
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Based in {business.address.city}, {business.address.state}, we travel
            throughout Williamson, Rutherford, and Davidson Counties for
            residential and commercial cleaning. Don&apos;t see your city?{" "}
            <a href={business.phoneHref} className="font-medium text-gold-dark">
              Call {business.phoneDisplay}
            </a>{" "}
            — we may still be able to serve your area.
          </p>
          <GoldRule className="mt-6 mb-12 w-24" delay={0.1} />
        </Reveal>
        <AreaLinks grouped={grouped} />
        <Reveal className="mt-10" delay={0.1}>
          <p className="text-sm text-muted-foreground">
            Prefer to jump to a top market? Try{" "}
            <Link
              href="/areas/franklin-tn"
              className="link-underline text-gold-dark hover:link-underline-hover"
            >
              Franklin
            </Link>
            ,{" "}
            <Link
              href="/areas/nashville-tn"
              className="link-underline text-gold-dark hover:link-underline-hover"
            >
              Nashville
            </Link>
            , or{" "}
            <Link
              href="/areas/murfreesboro-tn"
              className="link-underline text-gold-dark hover:link-underline-hover"
            >
              Murfreesboro
            </Link>
            .
          </p>
        </Reveal>
      </div>
      <CtaBand />
    </>
  );
}
