import type { MetadataRoute } from "next";
import { cities } from "@/lib/areas";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/areas"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: absoluteUrl(`/areas/${city.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: city.isHq ? 0.95 : city.priority && city.priority <= 3 ? 0.85 : 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
