import type { Metadata } from "next";
import { business, siteConfig } from "./business";

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.legalName,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: absoluteUrl(business.logoPath),
          alt: business.legalName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function breadcrumbItems(
  items: { name: string; path: string }[]
): { name: string; href: string }[] {
  return [{ name: "Home", href: "/" }, ...items.map((item) => ({
    name: item.name,
    href: item.path,
  }))];
}
