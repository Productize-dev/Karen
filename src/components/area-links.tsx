"use client";

import Link from "next/link";
import type { CityRecord } from "@/lib/areas";
import { GoldRule, Stagger, StaggerItem } from "@/components/motion";

export function AreaLinks({
  cities,
  grouped,
}: {
  cities?: CityRecord[];
  grouped?: { county: string; cities: CityRecord[] }[];
}) {
  if (grouped) {
    return (
      <Stagger className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {grouped.map((group) => (
          <StaggerItem key={group.county}>
            <h3 className="font-heading text-2xl text-ink">{group.county}</h3>
            <GoldRule className="mt-2 mb-4 w-14" />
            <ul className="space-y-2">
              {group.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/areas/${city.slug}`}
                    className="link-underline text-sm text-muted-foreground transition hover:text-gold-dark hover:link-underline-hover"
                  >
                    {city.name}, {city.state}
                    {city.isHq ? " (Home base)" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    );
  }

  return (
    <Stagger className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {(cities ?? []).map((city) => (
        <StaggerItem key={city.slug}>
          <Link
            href={`/areas/${city.slug}`}
            className="group flex items-center justify-between border border-border bg-card px-4 py-3 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-[0_12px_32px_-24px_rgba(197,163,90,0.7)]"
          >
            <span>
              {city.name}, {city.state}
            </span>
            <span className="text-gold opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
              →
            </span>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
