import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, HeartHandshake, Sparkles, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { CtaBand } from "@/components/cta-band";
import { FacebookFeed } from "@/components/facebook-feed";
import { FaqSection } from "@/components/faq-section";
import { HomeHero } from "@/components/home-hero";
import { JsonLd } from "@/components/json-ld";
import { ServiceCards } from "@/components/service-cards";
import { AreaLinks } from "@/components/area-links";
import { WorkGallery } from "@/components/work-gallery";
import { Button } from "@/components/ui/button";
import { CountUp, GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";

const BeforeAfterSection = dynamic(
  () =>
    import("@/components/before-after").then((mod) => mod.BeforeAfterSection),
  {
    loading: () => (
      <section className="bg-cream py-16 md:py-24" aria-hidden>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-10 h-28 max-w-2xl rounded-md bg-secondary/60" />
          <div className="aspect-[4/3] rounded-md bg-secondary/40" />
        </div>
      </section>
    ),
  }
);
import {
  business,
  homeFaqs,
  testimonials,
} from "@/lib/business";
import { getCitiesByCounty, getTopCities, cities } from "@/lib/areas";
import { services } from "@/lib/services";
import { teamImage } from "@/lib/work";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `Residential & Commercial Cleaning in ${business.primaryGeoPhrase} | ${business.shortName}`,
  description: `${business.description} Call ${business.phoneDisplay} to book.`,
  path: "/",
});

const processSteps = [
  {
    title: "Call us",
    body: "Call or text to share your property size, condition, and the services you need.",
  },
  {
    title: "Personalized plan",
    body: "We tailor the scope and schedule — one-time deep clean, recurring visits, Airbnb turnover, or office care.",
  },
  {
    title: "Spotless results",
    body: "Enjoy a detailed, personalized clean and the peace of mind that comes with trusted service.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Quality you can see",
    body: "Meticulous attention to every room — homes, rentals, and offices.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & reliability",
    body: "Clear communication, appointment-based scheduling, and consistent care.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized service",
    body: "We don’t just clean houses — we deliver confidence and an excellent experience.",
  },
];

const checklist = [
  "Residential recurring cleaning — weekly, biweekly, monthly",
  "Deep cleans for new clients and full resets",
  "Airbnb turnovers and office cleaning",
];

export default function HomePage() {
  const topCities = getTopCities(8);
  const pageTitle = `Residential & Commercial Cleaning in ${business.primaryGeoPhrase}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: pageTitle,
            description: business.description,
            path: "/",
          }),
          faqSchema(homeFaqs),
        ]}
      />

      <HomeHero />

      <section className="border-b border-border bg-secondary/50">
        <Stagger className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Personalized quotes", display: "Custom" as const },
            {
              label: "Cities & communities",
              display: "count" as const,
              value: cities.length,
              suffix: "+",
            },
            { label: "Detail-focused care", display: "5★" as const },
            { label: "Home base", display: "Franklin" as const },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center sm:text-left">
              <p className="font-heading text-3xl text-gold-dark md:text-4xl">
                {stat.display === "count" ? (
                  <CountUp value={stat.value!} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
              A team you can count on
            </p>
            <h2 className="mt-3 font-heading text-4xl text-ink md:text-5xl">
              Detailed cleaning. Personal care.
            </h2>
            <GoldRule className="mt-5 w-20" delay={0.12} />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {business.story}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {business.differentiator}
            </p>
            <Stagger className="mt-6 space-y-3" delay={0.15}>
              {checklist.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex gap-3 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
          <Reveal delay={0.12} className="relative min-h-[360px] overflow-hidden border border-border">
            <Image
              src={teamImage.src}
              alt={teamImage.alt}
              fill
              loading="lazy"
              className="object-cover transition duration-[1.2s] ease-out hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-10 max-w-2xl">
            <h2 className="font-heading text-4xl text-ink md:text-5xl">Our Story</h2>
            <GoldRule className="mt-4 w-20" delay={0.1} />
            <p className="mt-5 text-muted-foreground">{business.meaning}</p>
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="group h-full border border-transparent border-l-gold/40 bg-transparent py-2 pl-5 transition duration-300 hover:border-l-gold md:border md:border-border md:bg-card md:p-6 md:pl-6 md:hover:border-gold/40 md:hover:shadow-[0_16px_40px_-30px_rgba(197,163,90,0.55)]">
                  <value.icon className="size-7 text-gold transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                  <h3 className="mt-4 font-heading text-2xl text-ink md:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8" delay={0.15}>
            <Button asChild variant="outline" className="transition hover:border-gold/50">
              <Link href="/about">Learn more about us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-4xl text-ink md:text-5xl">
                Residential & Commercial Cleaning
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Homes, Airbnbs, move-outs, and offices across{" "}
                {business.serviceRegion}.
              </p>
            </div>
            <Link
              href="/services"
              className="link-underline text-sm font-medium text-gold-dark hover:link-underline-hover"
            >
              View all services
            </Link>
          </Reveal>
          <ServiceCards services={services} />
        </div>
      </section>

      <BeforeAfterSection />
      <WorkGallery />
      <FacebookFeed />

      <section className="relative overflow-hidden border-y border-border bg-secondary/60 py-16 text-ink md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/2 top-0 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-center font-heading text-4xl text-ink md:text-5xl">
              Getting started is simple
            </h2>
            <GoldRule className="mx-auto mt-4 w-24" delay={0.1} />
          </Reveal>
          <div className="relative mt-12">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20 md:block" />
            <Stagger className="grid gap-8 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <StaggerItem key={step.title} className="text-center">
                  <p className="relative z-10 mx-auto inline-flex size-12 items-center justify-center rounded-full border border-gold/30 bg-cream font-[family-name:var(--font-script)] text-3xl text-gold-dark shadow-sm">
                    {index + 1}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-10 text-center">
            <h2 className="font-heading text-4xl text-ink md:text-5xl">
              Trusted by neighbors across Middle Tennessee
            </h2>
            <p className="mt-3 text-muted-foreground">
              Homes and rentals we serve — feedback from clients across Franklin,
              Nashville, and Murfreesboro.
            </p>
            <GoldRule className="mx-auto mt-5 w-24" delay={0.1} />
          </Reveal>
          <Stagger className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <StaggerItem key={item.quote}>
                <blockquote className="group relative h-full border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_44px_-30px_rgba(197,163,90,0.55)]">
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-script)] text-5xl leading-none text-gold/40"
                  >
                    “
                  </span>
                  <div
                    className="mb-3 text-sm tracking-widest text-gold"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                  <p className="text-sm leading-relaxed text-ink/90">
                    {item.quote}
                  </p>
                  <footer className="mt-5 flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium text-ink">{item.author}</span>
                      {" · "}
                      {item.location}
                    </div>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-wide text-gold-dark">
                      {item.source}
                    </span>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-4xl text-ink md:text-5xl">
                Cleaning across Middle Tennessee
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Based in {business.address.city}, we proudly serve Williamson,
                Rutherford, and Davidson County communities.
              </p>
            </div>
            <Link
              href="/areas"
              className="link-underline text-sm font-medium text-gold-dark hover:link-underline-hover"
            >
              Browse all cities
            </Link>
          </Reveal>
          <AreaLinks cities={topCities} />
          <Reveal className="mt-10 hidden lg:block" delay={0.1}>
            <AreaLinks grouped={getCitiesByCounty()} />
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Common questions about our cleaning services"
        subtitle={`Answers for homeowners and businesses searching for cleaning services in ${business.primaryGeoPhrase}.`}
        faqs={homeFaqs}
      />

      <CtaBand />
    </>
  );
}
