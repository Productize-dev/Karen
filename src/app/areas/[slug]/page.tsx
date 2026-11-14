import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import {
  getCityBySlug,
  getCityH1,
  getCityMetaDescription,
  getCityMetaTitle,
  getCitySlugs,
  getDefaultCityIntro,
  getFeaturedServicesForCity,
  getNearbyCities,
} from "@/lib/areas";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return createMetadata({
    title: getCityMetaTitle(city),
    description: getCityMetaDescription(city),
    path: `/areas/${city.slug}`,
  });
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const nearby = getNearbyCities(city.slug, 6);
  const featuredServices = getFeaturedServicesForCity();
  const crumbs = breadcrumbItems([
    { name: "Areas", path: "/areas" },
    { name: `${city.name}, ${city.state}`, path: `/areas/${city.slug}` },
  ]);
  const h1 = getCityH1(city);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: h1,
            description: getCityMetaDescription(city),
            path: `/areas/${city.slug}`,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
            {city.county}
            {city.isHq ? " · Home base" : ""}
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {getDefaultCityIntro(city)}
          </p>
          {city.override?.extra ? (
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              {city.override.extra}
            </p>
          ) : (
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Whether you need biweekly house cleaning in {city.name}, a deep
              clean before guests arrive, Airbnb turnover support, or office
              cleaning, {business.shortName} builds each visit around your
              property and schedule. {business.hoursLabel}.
            </p>
          )}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_10px_28px_-12px_rgba(197,163,90,0.9)]"
            >
              <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={business.smsHref}>Text Us</a>
            </Button>
          </div>
          <GoldRule className="mt-10 mb-10 w-24" delay={0.1} />
        </Reveal>

        <Reveal>
          <h2 className="font-heading text-3xl text-ink">
            Cleaning services in {city.name}
          </h2>
          <p className="mt-3 mb-8 max-w-2xl text-muted-foreground">
            Popular services for homes and businesses in {city.name},{" "}
            {city.state}.
          </p>
        </Reveal>
        <ServiceCards services={featuredServices} columns={2} />

        <div className="mt-14">
          <Reveal>
            <h2 className="font-heading text-3xl text-ink">
              Nearby communities
            </h2>
          </Reveal>
          <Stagger className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((nearbyCity) => (
              <StaggerItem key={nearbyCity.slug}>
                <Link
                  href={`/areas/${nearbyCity.slug}`}
                  className="group flex items-center justify-between border border-border bg-card px-4 py-3 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_12px_28px_-24px_rgba(197,163,90,0.55)]"
                >
                  <span>
                    House cleaning in {nearbyCity.name}, {nearbyCity.state}
                  </span>
                  <span className="text-gold opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-5" delay={0.1}>
            <Link
              href="/areas"
              className="link-underline inline-block text-sm font-medium text-gold-dark hover:link-underline-hover"
            >
              View all service areas
            </Link>
          </Reveal>
        </div>
      </div>

      <CtaBand
        title={`Need cleaning in ${city.name}?`}
        subtitle={`Call ${business.phoneDisplay} to book cleaning for your ${city.name} property.`}
      />
    </>
  );
}
