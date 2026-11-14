import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { aboutImage } from "@/lib/work";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { breadcrumbItems, createMetadata } from "@/lib/seo";

const title = `About ${business.legalName}`;
const description = `${business.story} Serving ${business.serviceRegion}.`;

export const metadata = createMetadata({
  title: `${title} | Franklin TN`,
  description,
  path: "/about",
});

export default function AboutPage() {
  const crumbs = breadcrumbItems([{ name: "About", path: "/about" }]);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path: "/about" }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Reveal className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Breadcrumbs items={crumbs} />
        <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
          Our story
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl text-ink md:text-5xl lg:text-6xl">
          Built on trust, detail, and care for every home
        </h1>
        <GoldRule className="mt-5 w-24" delay={0.1} />
      </Reveal>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <Reveal className="relative min-h-[380px] overflow-hidden border border-border">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              className="object-cover transition duration-[1.2s] ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-[family-name:var(--font-script)] text-3xl text-gold-dark">
              {business.shortName}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {business.story}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {business.meaning}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {business.differentiator}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <Stagger className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          {[
            {
              title: "Mission",
              body: "To deliver spotless spaces and peace of mind through detailed, personalized cleaning clients can trust.",
            },
            {
              title: "Promise",
              body: "Quality, attention to detail, and an excellent experience — not just a cleaned house, but lasting confidence.",
            },
            {
              title: "Service area",
              body: `Based in ${business.address.city}, ${business.address.state}, serving ${business.serviceRegion}. ${business.hoursLabel}.`,
            },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="h-full border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_16px_40px_-30px_rgba(197,163,90,0.5)]">
                <h2 className="font-heading text-2xl text-ink">{item.title}</h2>
                <GoldRule className="mt-3 mb-4 w-12" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        title="Let’s care for your space"
        subtitle={`Call ${business.phoneDisplay} to book today.`}
      />
    </>
  );
}
