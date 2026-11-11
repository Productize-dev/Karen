import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { getTopCities } from "@/lib/areas";

export function SiteFooter() {
  const topCities = getTopCities(10);

  return (
    <footer className="mt-auto border-t border-border bg-secondary text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image
            src={business.logoPath}
            alt={business.legalName}
            width={220}
            height={80}
            className="mb-4 h-14 w-auto rounded-sm bg-cream object-contain p-1.5"
          />
          <p className="mt-2 text-sm text-muted-foreground">{business.tagline}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {business.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg text-gold-dark">Services</h2>
          <div className="gold-rule mt-2 mb-4 w-16" />
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="link-underline text-muted-foreground transition hover:text-gold-dark hover:link-underline-hover"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg text-gold-dark">Top Areas</h2>
          <div className="gold-rule mt-2 mb-4 w-16" />
          <ul className="space-y-2 text-sm">
            {topCities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/areas/${city.slug}`}
                  className="link-underline text-muted-foreground transition hover:text-gold-dark hover:link-underline-hover"
                >
                  {city.name}, {city.state}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/areas"
                className="link-underline font-medium text-gold-dark transition hover:link-underline-hover"
              >
                View all service areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg text-gold-dark">Contact</h2>
          <div className="gold-rule mt-2 mb-4 w-16" />
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={business.phoneHref}
                className="link-underline transition hover:text-gold-dark hover:link-underline-hover"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.smsHref}
                className="link-underline transition hover:text-gold-dark hover:link-underline-hover"
              >
                Text {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={business.emailHref}
                className="link-underline transition hover:text-gold-dark hover:link-underline-hover"
              >
                {business.email}
              </a>
            </li>
            {business.social.facebook ? (
              <li>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition hover:text-gold-dark hover:link-underline-hover"
                >
                  Follow on Facebook
                </a>
              </li>
            ) : null}
            {business.social.google ? (
              <li>
                <a
                  href={business.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition hover:text-gold-dark hover:link-underline-hover"
                >
                  Google Business
                </a>
              </li>
            ) : null}
            <li>
              {business.address.city}, {business.address.state}
            </li>
            <li>{business.hoursLabel}</li>
            <li>
              <Link
                href="/quote"
                className="link-underline text-gold-dark transition hover:link-underline-hover"
              >
                Request a custom quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border bg-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.legalName}. All rights reserved.</p>
          <p>
            Residential & commercial cleaning · {business.address.city},{" "}
            {business.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
