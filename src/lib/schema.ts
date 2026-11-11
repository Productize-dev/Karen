import { business, siteConfig, homeFaqs } from "./business";
import { cities } from "./areas";
import type { ServiceFaq, ServiceRecord } from "./services";
import { absoluteUrl } from "./seo";

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return {
    __html: JSON.stringify(data),
  };
}

function areaServed() {
  return cities.map((city) => ({
    "@type": "City",
    name: city.name,
    containedInPlace: {
      "@type": "State",
      name: business.address.stateFull,
    },
  }));
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["CleaningService", "LocalBusiness"],
    "@id": `${absoluteUrl("/")}/#business`,
    name: business.legalName,
    alternateName: business.shortName,
    description: business.description,
    url: absoluteUrl("/"),
    telephone: `+1${business.phone}`,
    email: business.email,
    image: absoluteUrl(business.logoPath),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: areaServed(),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: business.hoursLabel,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}/#website`,
    name: business.legalName,
    url: absoluteUrl("/"),
    publisher: { "@id": `${absoluteUrl("/")}/#business` },
    inLanguage: "en-US",
  };
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${absoluteUrl("/")}/#website` },
    about: { "@id": `${absoluteUrl("/")}/#business` },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(faqs: ServiceFaq[] | typeof homeFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: ServiceRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.intro,
    provider: { "@id": `${absoluteUrl("/")}/#business` },
    areaServed: areaServed(),
    url: absoluteUrl(`/services/${service.slug}`),
    serviceType: service.name,
  };
}

export function siteConfigName() {
  return siteConfig.name;
}
