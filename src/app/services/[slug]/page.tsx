import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { getTopCities } from "@/lib/areas";
import {
  getRelatedServices,
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug, 3);
  const topCities = getTopCities(6);
  const crumbs = breadcrumbItems([
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: service.h1,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
          }),
          breadcrumbSchema(crumbs),
          serviceSchema(service),
          faqSchema(service.faqs),
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Reveal>
          <Breadcrumbs items={crumbs} />
          <h1 className="max-w-4xl font-heading text-4xl text-ink md:text-5xl">
            {service.h1}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {service.intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_10px_28px_-12px_rgba(197,163,90,0.9)]"
            >
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={business.phoneHref}>Call {business.phoneDisplay}</a>
            </Button>
          </div>
          <GoldRule className="mt-10 mb-10 w-24" delay={0.1} />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h2 className="font-heading text-3xl text-ink">
              What&apos;s included
            </h2>
            <Stagger className="mt-5 space-y-3">
              {service.includes.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex gap-3 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <h2 className="mt-12 font-heading text-3xl text-ink">
              Why clients choose us
            </h2>
            <Stagger className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((item) => (
                <StaggerItem key={item}>
                  <div className="border border-border bg-card px-4 py-3 text-sm text-ink transition duration-300 hover:border-gold/40 hover:shadow-[0_12px_28px_-24px_rgba(197,163,90,0.6)]">
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="h-fit border border-border bg-secondary/40 p-6 transition hover:border-gold/30">
              <h2 className="font-heading text-2xl text-ink">Popular areas</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.shortName} available across Middle Tennessee.
              </p>
              <ul className="mt-4 space-y-2">
                {topCities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/areas/${city.slug}`}
                      className="link-underline text-sm text-gold-dark hover:link-underline-hover"
                    >
                      {service.shortName} in {city.name}, {city.state}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/areas"
                className="mt-5 inline-block text-sm font-medium text-ink transition hover:text-gold-dark"
              >
                View all service areas
              </Link>
            </aside>
          </Reveal>
        </div>
      </div>

      <FaqSection
        title={`Questions about ${service.name.toLowerCase()}`}
        faqs={service.faqs}
      />

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="mb-6 font-heading text-3xl text-ink">
              Related services
            </h2>
          </Reveal>
          <ServiceCards services={related} columns={3} />
        </div>
      </section>

      <CtaBand
        title={`Ready to book ${service.shortName.toLowerCase()}?`}
        subtitle={`Call ${business.phoneDisplay} or request a personalized quote online.`}
      />
    </>
  );
}
